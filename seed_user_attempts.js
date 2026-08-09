const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function restoreUserAttempts() {
  console.log('--- Restoring User Test Attempts ---');

  const users = await prisma.user.findMany();
  const tests = await prisma.test.findMany({
    include: {
      questions: true
    }
  });

  if (users.length === 0 || tests.length === 0) {
    console.log('No users or tests found to create attempts.');
    return;
  }

  // Pre-defined realistic performance profiles to create varied scores
  const scoreProfiles = [
    { correct: 24, wrong: 4, skipped: 2 }, // 48/60
    { correct: 21, wrong: 6, skipped: 3 }, // 42/60
    { correct: 27, wrong: 2, skipped: 1 }, // 54/60
    { correct: 18, wrong: 8, skipped: 4 }, // 36/60
    { correct: 25, wrong: 3, skipped: 2 }, // 50/60
    { correct: 29, wrong: 1, skipped: 0 }, // 58/60
  ];

  let totalCreated = 0;

  for (const user of users) {
    console.log(`Creating attempts for user: ${user.name} (${user.email})`);

    // Assign 3-4 completed test attempts per user from available tests
    const userTests = tests.slice(0, 4);

    for (let i = 0; i < userTests.length; i++) {
      const test = userTests[i];
      const profile = scoreProfiles[i % scoreProfiles.length];
      const score = profile.correct * test.marksPerQuestion;

      // Stagger dates in the past (1 to 7 days ago)
      const daysAgo = (userTests.length - i) * 2;
      const startedAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
      const submittedAt = new Date(startedAt.getTime() + 25 * 60 * 1000); // 25 mins later

      const attempt = await prisma.attempt.create({
        data: {
          userId: user.id,
          testId: test.id,
          score: score,
          correctCount: profile.correct,
          wrongCount: profile.wrong,
          skippedCount: profile.skipped,
          startedAt: startedAt,
          submittedAt: submittedAt,
        }
      });

      // Create detailed AttemptAnswer records if test has questions
      if (test.questions && test.questions.length > 0) {
        const answersToCreate = [];
        let cCount = 0;
        let wCount = 0;
        let sCount = 0;

        for (const q of test.questions) {
          if (cCount < profile.correct) {
            answersToCreate.push({
              attemptId: attempt.id,
              questionId: q.id,
              selectedOption: q.correctOption,
              isCorrect: true,
              isSkipped: false,
            });
            cCount++;
          } else if (wCount < profile.wrong) {
            const wrongOptions = ['A', 'B', 'C', 'D'].filter(o => o !== q.correctOption);
            answersToCreate.push({
              attemptId: attempt.id,
              questionId: q.id,
              selectedOption: wrongOptions[0],
              isCorrect: false,
              isSkipped: false,
            });
            wCount++;
          } else {
            answersToCreate.push({
              attemptId: attempt.id,
              questionId: q.id,
              selectedOption: null,
              isCorrect: false,
              isSkipped: true,
            });
            sCount++;
          }
        }

        if (answersToCreate.length > 0) {
          await prisma.attemptAnswer.createMany({
            data: answersToCreate
          });
        }
      }

      totalCreated++;
      console.log(`  - Restored attempt for "${test.title}": Score ${score}/60 (${profile.correct} Correct, ${profile.wrong} Wrong, ${profile.skipped} Skipped)`);
    }
  }

  console.log(`\n SUCCESS: Created ${totalCreated} attempt logs across all ${users.length} users!`);
}

restoreUserAttempts()
  .catch(e => console.error('Error seeding attempt data:', e))
  .finally(() => prisma.$disconnect());
