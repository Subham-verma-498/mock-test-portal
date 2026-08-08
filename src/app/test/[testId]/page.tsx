'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Clock, ShieldAlert, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface QuestionData {
  id: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  topicTag: string;
}

interface TestData {
  id: string;
  title: string;
  category: string;
  totalQuestions: number;
  timePerQuestion: number;
  questions: QuestionData[];
}

export default function ExamEnginePage() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const testId = params?.testId as string;
  const attemptId = searchParams?.get('attemptId');

  const [test, setTest] = useState<TestData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Array<{ questionId: string; selectedOption: string | null }>>([]);

  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize test data
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }
    if (testId && attemptId) {
      loadExamData();
    }
  }, [testId, attemptId, status]);

  const loadExamData = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/test/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testId }),
      });

      if (!res.ok) {
        alert('Failed to load exam questions.');
        router.push('/dashboard');
        return;
      }

      const data = await res.json();
      setTest(data.test);
    } catch (err) {
      console.error('Error loading exam engine data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Submission handler
  const submitExam = useCallback(async (finalAnswers: Array<{ questionId: string; selectedOption: string | null }>) => {
    if (submitting || !attemptId) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/test/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attemptId,
          answers: finalAnswers,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        router.push(data.redirectUrl);
      } else {
        alert('An error occurred submitting your exam.');
        setSubmitting(false);
      }
    } catch (err) {
      console.error('Error submitting exam:', err);
      setSubmitting(false);
    }
  }, [attemptId, submitting, router]);

  // Handle advancing to next question or auto-advancing on 0s countdown
  const advanceToNextQuestion = useCallback(() => {
    if (!test) return;

    const currentQuestion = test.questions[currentIndex];
    const newAnswer = {
      questionId: currentQuestion.id,
      selectedOption: selectedOption,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    if (currentIndex + 1 < test.questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(60); // Reset timer ring for next question
    } else {
      // Reached end of 30 questions -> Submit exam
      submitExam(updatedAnswers);
    }
  }, [test, currentIndex, selectedOption, answers, submitExam]);

  // Per-question countdown timer effect
  useEffect(() => {
    if (loading || submitting || !test) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current as NodeJS.Timeout);
          // Auto-skip or lock answer on 0s
          advanceToNextQuestion();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading, submitting, test, currentIndex, advanceToNextQuestion]);

  // beforeunload warning handler
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!submitting) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [submitting]);

  if (loading || !test) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 text-sm animate-pulse">Initializing Secure Test Engine...</p>
      </div>
    );
  }

  const currentQuestion = test.questions[currentIndex];
  const isLastQuestion = currentIndex + 1 === test.questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / test.questions.length) * 100);

  // Timer ring color state
  const isTimerCritical = timeLeft <= 10;
  const isTimerWarning = timeLeft <= 20 && timeLeft > 10;

  const timerBorderColor = isTimerCritical
    ? 'border-red-500 text-red-400 shadow-red-500/30'
    : isTimerWarning
    ? 'border-amber-500 text-amber-400 shadow-amber-500/30'
    : 'border-indigo-500 text-indigo-400 shadow-indigo-500/30';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Distraction-Free Header */}
      <header className="bg-slate-900/90 border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
            {test.category}
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-base text-slate-100">
              {test.title}
            </h1>
            <div className="text-[11px] text-slate-400 flex items-center space-x-2">
              <span>Question {currentIndex + 1} of {test.totalQuestions}</span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">+2 Marks per question</span>
            </div>
          </div>
        </div>

        {/* Circular Countdown Timer */}
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-full border-4 ${timerBorderColor} flex items-center justify-center font-mono font-extrabold text-base transition-all shadow-lg bg-slate-950`}>
            {timeLeft}s
          </div>

          <button
            onClick={() => setShowExitModal(true)}
            className="hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Quit Exam</span>
          </button>
        </div>
      </header>

      {/* Top Question Progress Bar */}
      <div className="w-full bg-slate-900 h-1.5 relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Exam Question Workspace */}
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 flex flex-col justify-center">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          {/* Topic Tag & Question Meta */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium uppercase tracking-wider">
              Topic: {currentQuestion.topicTag}
            </span>
            <span className="text-xs text-slate-400">
              No Negative Marking
            </span>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className="text-indigo-400 font-bold text-xs uppercase tracking-wider">
              Question #{currentIndex + 1}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQuestion.questionText}
            </h2>
          </div>

          {/* 4 Selectable Options Grid */}
          <div className="grid grid-cols-1 gap-3.5 pt-2">
            {[
              { key: 'A', text: currentQuestion.optionA },
              { key: 'B', text: currentQuestion.optionB },
              { key: 'C', text: currentQuestion.optionC },
              { key: 'D', text: currentQuestion.optionD },
            ].map((opt) => {
              const isSelected = selectedOption === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => setSelectedOption(opt.key)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-300 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'
                      }`}
                    >
                      {opt.key}
                    </div>
                    <span className="text-sm font-medium">{opt.text}</span>
                  </div>

                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-700'
                  }`}>
                    {isSelected && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Control Bar */}
      <footer className="bg-slate-900/90 border-t border-slate-800 px-4 sm:px-8 py-4 sticky bottom-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="text-xs text-slate-400 hidden sm:block">
            {selectedOption ? (
              <span className="text-emerald-400 font-medium flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Option {selectedOption} selected. Click Next to lock.</span>
              </span>
            ) : (
              <span className="text-slate-400 flex items-center space-x-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Unattempted will auto-skip on timer expiry.</span>
              </span>
            )}
          </div>

          <button
            onClick={advanceToNextQuestion}
            disabled={submitting}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center space-x-2 ${
              isLastQuestion
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25 scale-[1.02]'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/25'
            }`}
          >
            <span>{isLastQuestion ? 'Submit Test Now' : 'Lock & Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Quitting Modal Confirmation */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-2">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Quit Examination?
            </h3>
            <p className="text-xs text-slate-400">
              Are you sure you want to exit? Your progress so far will be submitted immediately and cannot be resumed.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setShowExitModal(false)}
                className="w-1/2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Continue Exam
              </button>
              <button
                onClick={() => submitExam(answers)}
                className="w-1/2 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors"
              >
                Quit & Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay when Submitting */}
      {submitting && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <h2 className="text-xl font-bold text-white">Evaluating Exam Answers...</h2>
          <p className="text-xs text-slate-400">Calculating final score and compiling performance breakdown.</p>
        </div>
      )}
    </div>
  );
}
