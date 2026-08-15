'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import {
  BookOpen,
  Clock,
  CheckCircle2,
  Award,
  TrendingUp,
  AlertTriangle,
  ChevronRight,
  Code2,
  Brain,
  History,
  ArrowRight,
  BarChart3,
  X,
  Layers,
  Cpu,
  Server,
  Zap,
  Sparkles,
  Database,
  PieChart,
  Calculator,
  GraduationCap,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface TestItem {
  id: string;
  title: string;
  category: string;
  description: string;
  totalQuestions: number;
  timePerQuestion: number;
  marksPerQuestion: number;
  _count?: { questions: number };
}

interface AttemptItem {
  id: string;
  testId: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  startedAt: string;
  test: {
    title: string;
    category: string;
    totalQuestions: number;
    marksPerQuestion?: number;
  };
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [tests, setTests] = useState<TestItem[]>([]);
  const [attempts, setAttempts] = useState<AttemptItem[]>([]);
  const [stats, setStats] = useState({ totalAttempts: 0, avgScore: 0, highestScore: 0 });
  const [loading, setLoading] = useState(true);

  // Selected test for instructions modal
  const [selectedTest, setSelectedTest] = useState<TestItem | null>(null);
  const [agreedRules, setAgreedRules] = useState(false);
  const [startingTest, setStartingTest] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchDashboardData();
    }
  }, [status]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [testsRes, historyRes] = await Promise.all([
        fetch('/api/tests'),
        fetch('/api/user/history'),
      ]);

      if (testsRes.ok) {
        const testsData = await testsRes.json();
        setTests(testsData.tests || []);
      }

      if (historyRes.ok) {
        const historyData = await historyRes.json();
        setAttempts(historyData.attempts || []);
        setStats(historyData.stats || { totalAttempts: 0, avgScore: 0, highestScore: 0 });
      }
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartTest = async () => {
    if (!selectedTest || !agreedRules) return;
    try {
      setStartingTest(true);
      const res = await fetch('/api/test/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testId: selectedTest.id }),
      });

      if (res.ok) {
        const data = await res.json();
        router.push(`/test/${data.test.id}?attemptId=${data.attemptId}`);
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.details ? `${data.error}: ${data.details}` : (data.error || 'Failed to initialize test attempt. Please try again.'));
      }
    } catch (err) {
      console.error('Error starting test:', err);
      alert('Error connecting to test engine. Please try again.');
    } finally {
      setStartingTest(false);
    }
  };

  // Helper to select icon & accent colors based on test title/category
  const getTestVisuals = (test: TestItem) => {
    const titleLower = test.title.toLowerCase();
    if (titleLower.includes('full-stack') || titleLower.includes('system design')) {
      return {
        icon: Server,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'Microservices, APIs, Security, Caching',
      };
    }
    if (titleLower.includes('data structures') || titleLower.includes('dsa') || titleLower.includes('algorithms')) {
      return {
        icon: Layers,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'DP, Graphs, Trees, Bit Manipulation',
      };
    }
    if (titleLower.includes('core cs') || titleLower.includes('fundamentals')) {
      return {
        icon: Database,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'OS, DBMS, Networks, SOLID',
      };
    }
    if (titleLower.includes('aptitude mock test 2') || titleLower.includes('advanced placement aptitude') || titleLower.includes('aptitude ii')) {
      return {
        icon: Sparkles,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'Permutations, Circular Puzzles, Syllogisms',
      };
    }
    if (titleLower.includes('aptitude mock test 3') || titleLower.includes('data interpretation')) {
      return {
        icon: PieChart,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'DI, Speed Math, Pipes & Cisterns',
      };
    }
    if (titleLower.includes('aptitude mock test 4') || titleLower.includes('business analytics')) {
      return {
        icon: Calculator,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'Analytics, Mixtures, Data Sufficiency',
      };
    }
    if (titleLower.includes('aptitude mock test 5') || titleLower.includes('grand aptitude')) {
      return {
        icon: GraduationCap,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'Campus Placement Grand Exam',
      };
    }
    if (test.category === 'Aptitude') {
      return {
        icon: Brain,
        badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
        hoverBorder: 'hover:border-[#38C7C7]/60',
        glowColor: 'bg-[#38C7C7]/10',
        btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
        subTag: 'Quant, Logical, Verbal',
      };
    }
    // Default Technical
    return {
      icon: Code2,
      badgeBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
      iconBg: 'bg-[#38C7C7]/15 border-[#38C7C7]/40 text-[#38C7C7]',
      hoverBorder: 'hover:border-[#38C7C7]/60',
      glowColor: 'bg-[#38C7C7]/10',
      btnBg: 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/20',
      subTag: 'OOPs, C++, C# Core',
    };
  };

  // Prepare chart data
  const chartData = attempts
    .slice()
    .reverse()
    .map((att, idx) => ({
      name: `Test #${idx + 1}`,
      score: att.score,
      title: att.test.title,
      date: new Date(att.startedAt).toLocaleDateString(),
    }));

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-[#03070d] text-slate-100 flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-4 border-[#38C7C7] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-[#38C7C7] text-sm animate-pulse font-semibold">Loading Mock Test Portal...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#03070d] text-slate-100 flex flex-col selection:bg-[#38C7C7] selection:text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8 flex-1">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-[#38C7C7]/20 via-[#0a1e24] to-black border border-[#38C7C7]/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#38C7C7]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#38C7C7]/15 border border-[#38C7C7]/30 text-[#38C7C7] text-xs font-semibold mb-3 shadow-[0_0_10px_rgba(56,199,199,0.2)]">
                <Award className="w-3.5 h-3.5" />
                <span>Student Exam Portal</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Welcome back, {session?.user?.name || 'Candidate'}! 👋
              </h1>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                Ready to take a mock test today? Hone your skills with timed 30-question placement mock exams covering Technical, System Design, DSA, Core CS, Aptitude, and Reasoning series tracks.
              </p>
            </div>

            <div className="flex items-center space-x-3 bg-black/80 border border-[#38C7C7]/30 p-3 rounded-2xl shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#38C7C7]/15 border border-[#38C7C7]/30 flex items-center justify-center text-[#38C7C7]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Marking Scheme</div>
                <div className="text-lg font-bold text-white">+2 Marks / Q</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Series Hub Banner Promo */}
        <div className="bg-gradient-to-r from-cyan-950/70 via-slate-900 to-black border border-[#38C7C7]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-[#38C7C7]/5">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#38C7C7]/20 border border-[#38C7C7]/40 flex items-center justify-center shrink-0 shadow-md">
              <Layers className="w-6 h-6 text-[#38C7C7]" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-0.5">
                <span className="text-[10px] font-bold text-[#38C7C7] uppercase tracking-wider">New Course Hub</span>
                <span className="px-2 py-0.5 rounded-full bg-[#38C7C7]/20 text-[#38C7C7] text-[10px] font-extrabold border border-[#38C7C7]/30">4 Series Tracks</span>
              </div>
              <h3 className="text-lg font-bold text-white">Explore Courses & Dedicated Test Series</h3>
              <p className="text-xs text-slate-300">
                Master 10-test Aptitude Masterclass, Reasoning Series, and System Design tracks with non-repeating questions.
              </p>
            </div>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#38C7C7] text-black font-bold text-xs hover:bg-[#2fb0b0] transition-all shadow-md shadow-[#38C7C7]/20 shrink-0 hover:scale-105"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-black/80 border border-[#38C7C7]/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Tests Attempted</p>
              <p className="text-2xl font-bold text-white mt-1">{stats.totalAttempts}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#38C7C7]/10 border border-[#38C7C7]/30 flex items-center justify-center text-[#38C7C7]">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-black/80 border border-[#38C7C7]/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Average Score</p>
              <p className="text-2xl font-bold text-[#38C7C7] mt-1">
                {stats.avgScore} <span className="text-xs text-slate-400 font-normal">pts</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#38C7C7]/10 border border-[#38C7C7]/30 flex items-center justify-center text-[#38C7C7]">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-black/80 border border-[#38C7C7]/20 rounded-2xl p-5 shadow-lg flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Highest Score</p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">
                {stats.highestScore} <span className="text-xs text-slate-400 font-normal">pts</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Available Mock Tests Dynamic Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-[#38C7C7]" />
              <span>Available Mock Tests ({tests.length})</span>
            </h2>
            <span className="text-xs text-slate-400">Select any mock test to view rules and begin</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => {
              const visuals = getTestVisuals(test);
              const IconComp = visuals.icon;
              const qCount = test._count?.questions || test.totalQuestions || 30;

              return (
                <div
                  key={test.id}
                  className={`bg-black/80 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group ${visuals.hoverBorder} transition-all`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${visuals.glowColor} rounded-full blur-2xl pointer-events-none`} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${visuals.iconBg}`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base text-white line-clamp-1">{test.title}</h3>
                          <span className="text-[11px] font-semibold text-slate-400 block">{visuals.subTag}</span>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 ${visuals.badgeBg}`}>
                        {test.category}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs mb-6 line-clamp-3 leading-relaxed">
                      {test.description}
                    </p>

                    {/* Specs List */}
                    <div className="grid grid-cols-3 gap-2 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80 mb-6 text-xs text-slate-300">
                      <div className="text-center">
                        <span className="block text-slate-400 text-[10px]">QUESTIONS</span>
                        <span className="font-bold text-white">{qCount} Qs</span>
                      </div>
                      <div className="text-center border-x border-zinc-800">
                        <span className="block text-slate-400 text-[10px]">TIME / Q</span>
                        <span className="font-bold text-white">{test.timePerQuestion || 60}s</span>
                      </div>
                      <div className="text-center">
                        <span className="block text-slate-400 text-[10px]">MARKING</span>
                        <span className="font-bold text-[#38C7C7]">+{test.marksPerQuestion || 2} M</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedTest(test);
                      setAgreedRules(false);
                    }}
                    className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-black font-extrabold text-sm transition-all shadow-lg ${visuals.btnBg} group-hover:scale-[1.01]`}
                  >
                    <span>Start {test.category} Test</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Score Trend & History Section */}
        {attempts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="history">
            {/* Chart */}
            <div className="lg:col-span-1 bg-black/80 border border-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-white flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-[#38C7C7]" />
                <span>Score Progression</span>
              </h3>
              <p className="text-xs text-slate-400">Score history across recent tests</p>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} />
                    <YAxis domain={[0, 60]} stroke="#94a3b8" fontSize={10} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#03070d', borderColor: '#38C7C7', borderRadius: '0.75rem', fontSize: '12px', color: '#fff' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#38C7C7"
                      strokeWidth={3}
                      dot={{ fill: '#38C7C7', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Test History List */}
            <div className="lg:col-span-2 bg-black/80 border border-zinc-800 rounded-2xl p-6 shadow-lg space-y-4">
              <h3 className="font-bold text-lg text-white flex items-center space-x-2">
                <History className="w-5 h-5 text-[#38C7C7]" />
                <span>Past Attempt Logs</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs text-slate-400 uppercase bg-zinc-950/80 border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Test Title</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Score</th>
                      <th className="py-3 px-4">Correct / Wrong / Skipped</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-slate-300">
                    {attempts.map((att) => (
                      <tr key={att.id} className="hover:bg-zinc-900/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-white">
                          {att.test?.title || 'Mock Test'}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-400">
                          {new Date(att.startedAt).toLocaleDateString()}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#38C7C7]">
                          {att.score} / {(att.test?.totalQuestions || 10) * (att.test?.marksPerQuestion || 2)}
                        </td>
                        <td className="py-3.5 px-4 text-xs">
                          <span className="text-emerald-400 font-semibold">{att.correctCount} C</span>
                          <span className="mx-1 text-slate-500">•</span>
                          <span className="text-red-400 font-semibold">{att.wrongCount} W</span>
                          <span className="mx-1 text-slate-500">•</span>
                          <span className="text-amber-400 font-semibold">{att.skippedCount} S</span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => router.push(`/test/${att.testId}/result/${att.id}`)}
                            className="text-xs text-[#38C7C7] hover:underline font-semibold flex items-center justify-end space-x-1 ml-auto"
                          >
                            <span>Review</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Instructions Modal */}
      {selectedTest && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#03070d] border border-[#38C7C7]/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedTest(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="px-3 py-1 rounded-full bg-[#38C7C7]/15 border border-[#38C7C7]/40 text-[#38C7C7] text-xs font-semibold">
                {selectedTest.category} Exam Instructions
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-2">
                {selectedTest.title}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Please read all examination rules carefully before starting.
              </p>
            </div>

            {/* Rules Breakdown */}
            <div className="space-y-3 bg-black/80 border border-zinc-800 p-4 rounded-2xl text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#38C7C7] mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-100">Hard Per-Question Countdown:</strong> You have strictly <strong>{selectedTest.timePerQuestion || 60} seconds per question</strong>. If time expires, the question automatically skips and locks in as unattempted.
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-100">Marking Scheme:</strong> <strong>+{(selectedTest.marksPerQuestion || 2)} marks</strong> for every correct answer. No negative marking (0 for wrong/unattempted). Maximum score is {(selectedTest._count?.questions || selectedTest.totalQuestions || 10) * (selectedTest.marksPerQuestion || 2)}.
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-100">No Back Navigation:</strong> Once you lock in an answer or auto-advance, you cannot return to previous questions.
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-100">No Refresh/Exit:</strong> Reloading or closing the tab mid-test will immediately terminate and submit your attempt.
                </div>
              </div>
            </div>

            {/* Agreement Checkbox */}
            <label className="flex items-center space-x-3 cursor-pointer text-xs text-slate-300">
              <input
                type="checkbox"
                checked={agreedRules}
                onChange={(e) => setAgreedRules(e.target.checked)}
                className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-[#38C7C7] focus:ring-[#38C7C7]"
              />
              <span>I have read and understood all exam rules. I am ready to begin.</span>
            </label>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => setSelectedTest(null)}
                className="w-1/3 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleStartTest}
                disabled={!agreedRules || startingTest}
                className={`w-2/3 py-3 rounded-xl font-bold text-xs transition-all shadow-lg flex items-center justify-center space-x-2 ${
                  agreedRules && !startingTest
                    ? 'bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold shadow-[#38C7C7]/25 scale-[1.01]'
                    : 'bg-zinc-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <span>{startingTest ? 'Preparing Exam...' : 'Begin Exam Now'}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
