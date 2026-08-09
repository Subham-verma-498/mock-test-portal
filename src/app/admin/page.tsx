'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import {
  Users,
  FileCheck2,
  AlertOctagon,
  TrendingUp,
  Plus,
  Edit2,
  Trash2,
  Download,
  Search,
  CheckCircle,
  X,
  Filter,
  Shield,
  HelpCircle,
  Flag,
  BookOpen
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'attempts' | 'questions' | 'reports'>('overview');
  const [loading, setLoading] = useState(true);

  // Admin Data state
  const [data, setData] = useState<any>({
    stats: { totalStudents: 0, totalAttempts: 0, pendingReports: 0, avgScore: 0 },
    students: [],
    attempts: [],
    tests: [],
    questions: [],
    reports: [],
    hardestQuestions: [],
    mostSkippedQuestions: [],
  });

  // Filters state
  const [studentSearch, setStudentSearch] = useState('');
  const [attemptFilterTest, setAttemptFilterTest] = useState('ALL');
  const [questionFilterTest, setQuestionFilterTest] = useState('ALL');
  const [questionSearch, setQuestionSearch] = useState('');

  // Question CRUD Modal state
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<any>(null);
  const [questionForm, setQuestionForm] = useState({
    id: '',
    testId: '',
    questionText: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctOption: 'A',
    topicTag: '',
    explanation: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
      return;
    }
    if (status === 'authenticated') {
      if (session?.user?.role !== 'ADMIN') {
        router.push('/dashboard');
        return;
      }
      fetchAdminData();
    }
  }, [status, session, router]);

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const json = await res.json();
        setData(json);

        // Pre-select first test ID for question form
        if (json.tests && json.tests.length > 0) {
          setQuestionForm((prev) => ({ ...prev, testId: json.tests[0].id }));
        }
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Question Form handlers
  const openNewQuestionModal = () => {
    const defaultTestId = data.tests[0]?.id || '';
    setEditingQuestion(null);
    setQuestionForm({
      id: '',
      testId: defaultTestId,
      questionText: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOption: 'A',
      topicTag: 'OOPs',
      explanation: '',
    });
    setQuestionModalOpen(true);
  };

  const openEditQuestionModal = (q: any) => {
    setEditingQuestion(q);
    setQuestionForm({
      id: q.id,
      testId: q.testId,
      questionText: q.questionText,
      optionA: q.optionA,
      optionB: q.optionB,
      optionC: q.optionC,
      optionD: q.optionD,
      correctOption: q.correctOption,
      topicTag: q.topicTag,
      explanation: q.explanation || '',
    });
    setQuestionModalOpen(true);
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questionForm),
      });

      if (res.ok) {
        setQuestionModalOpen(false);
        fetchAdminData();
      } else {
        alert('Failed to save question.');
      }
    } catch (err) {
      console.error('Error saving question:', err);
    }
  };

  const handleDeleteQuestion = async (id: string) => {
    if (!confirm('Are you sure you want to delete this question?')) return;
    try {
      const res = await fetch(`/api/admin/question?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchAdminData();
      }
    } catch (err) {
      console.error('Error deleting question:', err);
    }
  };

  const handleToggleReportResolve = async (reportId: string, currentResolved: boolean) => {
    try {
      const res = await fetch('/api/admin/report', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportId, resolved: !currentResolved }),
      });
      if (res.ok) {
        fetchAdminData();
      }
    } catch (err) {
      console.error('Error toggling report status:', err);
    }
  };

  // CSV Export Engine
  const exportToCSV = () => {
    const headers = ['Attempt ID', 'Candidate Name', 'Candidate Email', 'Test Title', 'Category', 'Score', 'Correct Count', 'Wrong Count', 'Skipped Count', 'Started At'];
    const rows = data.attempts.map((att: any) => [
      att.id,
      `"${att.user?.name || ''}"`,
      att.user?.email || '',
      `"${att.test?.title || ''}"`,
      att.test?.category || '',
      att.score,
      att.correctCount,
      att.wrongCount,
      att.skippedCount,
      new Date(att.startedAt).toISOString(),
    ]);

    const csvContent = [headers.join(','), ...rows.map((r: any) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `MockTestPortal_Results_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-[#03070d] text-slate-100 flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-4 border-[#38C7C7] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-[#38C7C7] text-sm animate-pulse font-semibold">Loading Admin Console...</p>
      </div>
    );
  }

  // Filtered lists
  const filteredStudents = data.students.filter((s: any) =>
    (s.name || '').toLowerCase().includes(studentSearch.toLowerCase()) ||
    (s.email || '').toLowerCase().includes(studentSearch.toLowerCase())
  );

  const filteredAttempts = data.attempts.filter((att: any) => {
    if (attemptFilterTest !== 'ALL' && att.testId !== attemptFilterTest) return false;
    return true;
  });

  const filteredQuestions = data.questions.filter((q: any) => {
    if (questionFilterTest !== 'ALL' && q.testId !== questionFilterTest) return false;
    if (
      questionSearch &&
      !q.questionText.toLowerCase().includes(questionSearch.toLowerCase()) &&
      !q.topicTag.toLowerCase().includes(questionSearch.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#03070d] text-slate-100 flex flex-col selection:bg-[#38C7C7] selection:text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8 flex-1">
        {/* Admin Header */}
        <div className="bg-black/80 border border-[#38C7C7]/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#38C7C7]/15 border border-[#38C7C7]/40 text-[#38C7C7] text-xs font-semibold mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Portal Administrator</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Admin Control Panel
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Manage student accounts, test bank questions, review reported errors, & export performance analytics.
            </p>
          </div>

          <button
            onClick={exportToCSV}
            className="flex items-center space-x-2 py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-slate-200 text-xs font-semibold transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Export Results (CSV)</span>
          </button>
        </div>

        {/* Stats Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-black/80 border border-[#38C7C7]/20 p-5 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-xs text-slate-400 font-medium">Students</span>
              <div className="text-2xl font-bold text-white mt-1">{data.stats.totalStudents}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#38C7C7]/10 border border-[#38C7C7]/30 text-[#38C7C7] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-black/80 border border-[#38C7C7]/20 p-5 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-xs text-slate-400 font-medium">Total Attempts</span>
              <div className="text-2xl font-bold text-white mt-1">{data.stats.totalAttempts}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#38C7C7]/10 border border-[#38C7C7]/30 text-[#38C7C7] flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-black/80 border border-[#38C7C7]/20 p-5 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-xs text-slate-400 font-medium">Average Score</span>
              <div className="text-2xl font-bold text-white mt-1">{data.stats.avgScore} / 60</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-black/80 border border-[#38C7C7]/20 p-5 rounded-2xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-xs text-slate-400 font-medium">Pending Reports</span>
              <div className="text-2xl font-bold text-amber-400 mt-1">{data.stats.pendingReports}</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <AlertOctagon className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-800 overflow-x-auto space-x-6 text-sm font-semibold">
          {[
            { id: 'overview', label: 'Analytics Overview', icon: TrendingUp },
            { id: 'students', label: `Students (${data.students.length})`, icon: Users },
            { id: 'attempts', label: `Attempts (${data.attempts.length})`, icon: FileCheck2 },
            { id: 'questions', label: `Question Bank (${data.questions.length})`, icon: BookOpen },
            { id: 'reports', label: `Reports Queue (${data.reports.length})`, icon: Flag },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 flex items-center space-x-2 border-b-2 transition-all shrink-0 ${
                  active
                    ? 'border-[#38C7C7] text-[#38C7C7] font-bold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview & Question Analytics */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hardest Questions */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-white flex items-center space-x-2">
                <AlertOctagon className="w-5 h-5 text-red-400" />
                <span>Hardest Questions (Lowest Correct %)</span>
              </h3>
              <div className="space-y-3">
                {data.hardestQuestions.length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">No question answer data recorded yet.</p>
                ) : (
                  data.hardestQuestions.map((q: any, i: number) => (
                    <div key={q.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs space-y-1">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-indigo-400">Q#{i + 1} • {q.topicTag}</span>
                        <span className="text-red-400 font-bold">{q.correctPercentage}% Correct</span>
                      </div>
                      <p className="text-slate-300 line-clamp-2">{q.questionText}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Most Skipped Questions */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-white flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <span>Most Skipped Questions</span>
              </h3>
              <div className="space-y-3">
                {data.mostSkippedQuestions.length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">No question skip data recorded yet.</p>
                ) : (
                  data.mostSkippedQuestions.map((q: any, i: number) => (
                    <div key={q.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs space-y-1">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-indigo-400">Q#{i + 1} • {q.topicTag}</span>
                        <span className="text-amber-400 font-bold">{q.skippedAnswers} Times Skipped</span>
                      </div>
                      <p className="text-slate-300 line-clamp-2">{q.questionText}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Registered Students Directory */}
        {activeTab === 'students' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="font-bold text-lg text-white">Registered Students</h3>
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-slate-400 uppercase bg-slate-950/60 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Joined Date</th>
                    <th className="py-3 px-4 text-right">Tests Completed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {filteredStudents.map((s: any) => (
                    <tr key={s.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 flex items-center space-x-3">
                        {s.image ? (
                          <img src={s.image} alt={s.name} className="w-8 h-8 rounded-full ring-1 ring-slate-700" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs">
                            {s.name?.[0] || 'S'}
                          </div>
                        )}
                        <span className="font-semibold text-white">{s.name || 'Candidate'}</span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-400">{s.email}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-400">
                        {new Date(s.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-indigo-400">
                        {s._count?.attempts || 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Attempt Logs */}
        {activeTab === 'attempts' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="font-bold text-lg text-white">Test Attempt Logs</h3>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={attemptFilterTest}
                  onChange={(e) => setAttemptFilterTest(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200 focus:outline-none"
                >
                  <option value="ALL">All Test Categories</option>
                  {data.tests.map((t: any) => (
                    <option key={t.id} value={t.id}>{t.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-slate-400 uppercase bg-slate-950/60 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Test Title</th>
                    <th className="py-3 px-4">Score</th>
                    <th className="py-3 px-4">C / W / S</th>
                    <th className="py-3 px-4 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {filteredAttempts.map((att: any) => (
                    <tr key={att.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white">
                        {att.user?.name || att.user?.email || 'Student'}
                      </td>
                      <td className="py-3.5 px-4 text-xs font-medium text-slate-300">
                        {att.test?.title || 'Mock Test'}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-indigo-400">
                        {att.score} / 60
                      </td>
                      <td className="py-3.5 px-4 text-xs">
                        <span className="text-emerald-400 font-semibold">{att.correctCount} C</span> •{' '}
                        <span className="text-red-400 font-semibold">{att.wrongCount} W</span> •{' '}
                        <span className="text-amber-400 font-semibold">{att.skippedCount} S</span>
                      </td>
                      <td className="py-3.5 px-4 text-right text-xs text-slate-400">
                        {new Date(att.startedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Question Bank CRUD */}
        {activeTab === 'questions' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-white">Question Bank CRUD Manager</h3>
                <p className="text-xs text-slate-400">Add, edit, or remove test questions</p>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <select
                  value={questionFilterTest}
                  onChange={(e) => setQuestionFilterTest(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200 focus:outline-none"
                >
                  <option value="ALL">All Test Banks</option>
                  {data.tests.map((t: any) => (
                    <option key={t.id} value={t.id}>{t.title}</option>
                  ))}
                </select>

                <button
                  onClick={openNewQuestionModal}
                  className="flex items-center space-x-2 py-2 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Question</span>
                </button>
              </div>
            </div>

            {/* Questions Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-slate-400 uppercase bg-slate-950/60 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Topic</th>
                    <th className="py-3 px-4">Question Text</th>
                    <th className="py-3 px-4">Correct Option</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {filteredQuestions.map((q: any) => (
                    <tr key={q.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-xs font-bold text-indigo-400">
                        {q.topicTag}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-white max-w-md truncate">
                        {q.questionText}
                      </td>
                      <td className="py-3.5 px-4 text-xs font-bold text-emerald-400">
                        Option {q.correctOption}
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          onClick={() => openEditQuestionModal(q)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                          title="Edit Question"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(q.id)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                          title="Delete Question"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 5: Reported Questions Queue */}
        {activeTab === 'reports' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg space-y-4">
            <h3 className="font-bold text-lg text-white flex items-center space-x-2">
              <Flag className="w-5 h-5 text-amber-400" />
              <span>Student Reported Questions Queue</span>
            </h3>

            <div className="space-y-4">
              {data.reports.length === 0 ? (
                <p className="text-xs text-slate-500 py-8 text-center">No student question reports submitted yet.</p>
              ) : (
                data.reports.map((rep: any) => (
                  <div
                    key={rep.id}
                    className={`p-5 rounded-2xl border space-y-3 transition-all ${
                      rep.resolved
                        ? 'bg-slate-950/40 border-slate-800 text-slate-400 opacity-75'
                        : 'bg-slate-950/80 border-amber-500/30 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                        {rep.reportType}
                      </span>
                      <span className="text-slate-400">
                        Reported by {rep.user?.name || rep.user?.email} on {new Date(rep.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs">
                      <strong className="text-indigo-400 block mb-1">Question:</strong>
                      <p className="text-slate-200 font-medium">{rep.question?.questionText}</p>
                    </div>

                    {rep.comment && (
                      <p className="text-xs text-slate-300 italic">
                        "{rep.comment}"
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <button
                        onClick={() => openEditQuestionModal(rep.question)}
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit Question in Bank</span>
                      </button>

                      <button
                        onClick={() => handleToggleReportResolve(rep.id, rep.resolved)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          rep.resolved
                            ? 'bg-slate-800 text-slate-400'
                            : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                        }`}
                      >
                        {rep.resolved ? 'Mark Unresolved' : 'Mark Resolved'}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>

      {/* Add / Edit Question Modal */}
      {questionModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setQuestionModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white">
              {editingQuestion ? 'Edit Question' : 'Add New Question'}
            </h3>

            <form onSubmit={handleSaveQuestion} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Target Test Bank</label>
                <select
                  value={questionForm.testId}
                  onChange={(e) => setQuestionForm({ ...questionForm, testId: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none"
                >
                  {data.tests.map((t: any) => (
                    <option key={t.id} value={t.id}>{t.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Topic Tag</label>
                <input
                  type="text"
                  placeholder="e.g. OOPs, C++, Quant, Logical"
                  value={questionForm.topicTag}
                  onChange={(e) => setQuestionForm({ ...questionForm, topicTag: e.target.value })}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Question Text</label>
                <textarea
                  rows={3}
                  value={questionForm.questionText}
                  onChange={(e) => setQuestionForm({ ...questionForm, questionText: e.target.value })}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Option A</label>
                  <input
                    type="text"
                    value={questionForm.optionA}
                    onChange={(e) => setQuestionForm({ ...questionForm, optionA: e.target.value })}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-slate-200 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Option B</label>
                  <input
                    type="text"
                    value={questionForm.optionB}
                    onChange={(e) => setQuestionForm({ ...questionForm, optionB: e.target.value })}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-slate-200 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Option C</label>
                  <input
                    type="text"
                    value={questionForm.optionC}
                    onChange={(e) => setQuestionForm({ ...questionForm, optionC: e.target.value })}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-slate-200 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Option D</label>
                  <input
                    type="text"
                    value={questionForm.optionD}
                    onChange={(e) => setQuestionForm({ ...questionForm, optionD: e.target.value })}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-slate-200 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Correct Answer Option</label>
                <select
                  value={questionForm.correctOption}
                  onChange={(e) => setQuestionForm({ ...questionForm, correctOption: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none font-bold text-indigo-400"
                >
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                  <option value="C">Option C</option>
                  <option value="D">Option D</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Solution & Concept Explanation</label>
                <textarea
                  rows={3}
                  value={questionForm.explanation}
                  onChange={(e) => setQuestionForm({ ...questionForm, explanation: e.target.value })}
                  placeholder="Explain why the correct option is right and provide concept rationale..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setQuestionModalOpen(false)}
                  className="w-1/3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
