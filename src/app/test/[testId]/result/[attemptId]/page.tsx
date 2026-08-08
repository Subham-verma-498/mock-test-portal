'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  SkipForward,
  Clock,
  Flag,
  RotateCcw,
  ArrowRight,
  Send,
  X,
  AlertCircle
} from 'lucide-react';

interface QuestionReportData {
  questionId: string;
  reportType: string;
  comment: string;
}

export default function TestResultPage() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams();

  const attemptId = params?.attemptId as string;

  const [attemptData, setAttemptData] = useState<any>(null);
  const [durationSeconds, setDurationSeconds] = useState(0);
  const [loading, setLoading] = useState(true);

  // Reporting Question Modal state
  const [reportingQuestionId, setReportingQuestionId] = useState<string | null>(null);
  const [reportType, setReportType] = useState('Question is wrong');
  const [reportComment, setReportComment] = useState('');
  const [submittingReport, setSubmittingReport] = useState(false);
  const [reportedIds, setReportedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }
    if (attemptId) {
      fetchResultDetails();
    }
  }, [attemptId, status]);

  const fetchResultDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/test/result/${attemptId}`);
      if (res.ok) {
        const data = await res.json();
        setAttemptData(data.attempt);
        setDurationSeconds(data.durationSeconds || 0);

        // Trigger confetti for high score (>= 40/60)
        if (data.attempt?.score >= 40) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }
    } catch (err) {
      console.error('Error fetching test result:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReportSubmit = async () => {
    if (!reportingQuestionId) return;
    try {
      setSubmittingReport(true);
      const res = await fetch('/api/question/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: reportingQuestionId,
          reportType,
          comment: reportComment,
        }),
      });

      if (res.ok) {
        setReportedIds((prev) => new Set(prev).add(reportingQuestionId));
        setReportingQuestionId(null);
        setReportComment('');
        alert('Thank you! Question report submitted for Admin review.');
      } else {
        alert('Failed to submit question report.');
      }
    } catch (err) {
      console.error('Error submitting question report:', err);
    } finally {
      setSubmittingReport(false);
    }
  };

  if (loading || !attemptData) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 text-sm animate-pulse">Compiling Exam Scorecard...</p>
      </div>
    );
  }

  const { test, score, correctCount, wrongCount, skippedCount, answers } = attemptData;
  const minutesTaken = Math.floor(durationSeconds / 60);
  const secondsTaken = durationSeconds % 60;
  const percentage = Math.round((score / 60) * 100);

  // Performance Badge
  let badgeTitle = 'Practice Needed';
  let badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
  if (percentage >= 80) {
    badgeTitle = '🏆 Outstanding Performance!';
    badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
  } else if (percentage >= 60) {
    badgeTitle = '🎉 Great Job!';
    badgeColor = 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30';
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8 flex-1">
        {/* Result Score Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <span className={`inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full border text-xs font-bold ${badgeColor}`}>
              <Award className="w-4 h-4" />
              <span>{badgeTitle}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {test?.title || 'Mock Test'} Scorecard
            </h1>
            <p className="text-slate-400 text-sm">
              Submitted on {new Date(attemptData.submittedAt || attemptData.startedAt).toLocaleString()}
            </p>
          </div>

          {/* Big Score Display */}
          <div className="relative z-10 py-4 flex flex-col items-center justify-center">
            <div className="text-6xl sm:text-7xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-white bg-clip-text text-transparent">
              {score} <span className="text-2xl sm:text-3xl font-medium text-slate-400">/ 60</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mt-2">
              Overall Score ({percentage}% Accuracy)
            </div>
          </div>

          {/* Stat Cards Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
            <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl">
              <div className="flex items-center justify-center space-x-1 text-emerald-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Correct</span>
              </div>
              <div className="text-2xl font-bold text-white">{correctCount}</div>
              <div className="text-[10px] text-slate-400">+{correctCount * 2} Marks</div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl">
              <div className="flex items-center justify-center space-x-1 text-red-400 mb-1">
                <XCircle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Wrong</span>
              </div>
              <div className="text-2xl font-bold text-white">{wrongCount}</div>
              <div className="text-[10px] text-slate-400">0 Marks</div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl">
              <div className="flex items-center justify-center space-x-1 text-amber-400 mb-1">
                <SkipForward className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Skipped</span>
              </div>
              <div className="text-2xl font-bold text-white">{skippedCount}</div>
              <div className="text-[10px] text-slate-400">Auto-Skipped</div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-2xl">
              <div className="flex items-center justify-center space-x-1 text-indigo-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Time Spent</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {minutesTaken}m {secondsTaken}s
              </div>
              <div className="text-[10px] text-slate-400">Total Duration</div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <button
              onClick={() => router.push('/dashboard')}
              className="flex items-center space-x-2 py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-indigo-600/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>

        {/* Question Review Breakdown List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              <span>Question Solutions & Review</span>
            </h2>
            <span className="text-xs text-slate-400">Review all 30 questions & answers below</span>
          </div>

          <div className="space-y-4">
            {answers.map((ans: any, index: number) => {
              const q = ans.question;
              const isCorrect = ans.isCorrect;
              const isSkipped = ans.isSkipped;

              const isReported = reportedIds.has(q.id);

              let statusBadge = (
                <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Correct (+2)</span>
                </span>
              );

              if (isSkipped) {
                statusBadge = (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                    <SkipForward className="w-3.5 h-3.5" />
                    <span>Skipped (0)</span>
                  </span>
                );
              } else if (!isCorrect) {
                statusBadge = (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Incorrect (0)</span>
                  </span>
                );
              }

              return (
                <div
                  key={ans.id}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4 relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-lg">
                        Q{index + 1}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Topic: {q.topicTag}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      {statusBadge}
                      <button
                        onClick={() => setReportingQuestionId(q.id)}
                        disabled={isReported}
                        className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full border text-xs font-semibold transition-all ${
                          isReported
                            ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-default'
                            : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-300 hover:text-amber-400'
                        }`}
                      >
                        <Flag className="w-3 h-3" />
                        <span>{isReported ? 'Reported' : 'Report Question'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Question Text */}
                  <h3 className="font-semibold text-base text-white leading-relaxed">
                    {q.questionText}
                  </h3>

                  {/* Option Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {[
                      { key: 'A', text: q.optionA },
                      { key: 'B', text: q.optionB },
                      { key: 'C', text: q.optionC },
                      { key: 'D', text: q.optionD },
                    ].map((opt) => {
                      const isUserChoice = ans.selectedOption === opt.key;
                      const isRightOption = q.correctOption === opt.key;

                      let optStyle = 'bg-slate-950/60 border-slate-800 text-slate-400';
                      if (isRightOption) {
                        optStyle = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-semibold ring-1 ring-emerald-500/30';
                      } else if (isUserChoice && !isCorrect) {
                        optStyle = 'bg-red-500/10 border-red-500/40 text-red-300 font-semibold line-through';
                      }

                      return (
                        <div
                          key={opt.key}
                          className={`p-3 rounded-xl border text-xs flex items-center justify-between ${optStyle}`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="font-mono font-bold">{opt.key}.</span>
                            <span>{opt.text}</span>
                          </div>

                          <div className="flex items-center space-x-1">
                            {isRightOption && (
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
                                Correct Answer
                              </span>
                            )}
                            {isUserChoice && (
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                                isCorrect
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : 'bg-red-500/20 text-red-400'
                              }`}>
                                Your Choice
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Question Report Modal */}
      {reportingQuestionId && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 relative overflow-hidden animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setReportingQuestionId(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
                <Flag className="w-3.5 h-3.5" />
                <span>Question Flagging</span>
              </div>
              <h3 className="text-xl font-bold text-white">Report Question Issue</h3>
              <p className="text-xs text-slate-400 mt-1">
                Help us keep our question bank accurate. Flag typos, incorrect options, or formatting errors.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Report Type
                </label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  <option value="Question is wrong">Question statement is wrong or confusing</option>
                  <option value="Correct answer is wrong">Marked correct answer is incorrect</option>
                  <option value="Typo or formatting error">Typo or option formatting error</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Optional Feedback / Explanation
                </label>
                <textarea
                  rows={3}
                  value={reportComment}
                  onChange={(e) => setReportComment(e.target.value)}
                  placeholder="Provide additional details regarding the error..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setReportingQuestionId(null)}
                className="w-1/3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleReportSubmit}
                disabled={submittingReport}
                className="w-2/3 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submittingReport ? 'Submitting...' : 'Submit Report'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
