import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { BookOpen, ShieldCheck, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    if (session.user.role === 'ADMIN') {
      redirect('/admin');
    } else {
      redirect('/dashboard');
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Landing Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between w-full border-b border-slate-800/80">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <span className="font-extrabold text-xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Mock Test Portal
          </span>
        </div>

        <Link
          href="/login"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/20 hover:scale-[1.02]"
        >
          Sign In / Portal Access
        </Link>
      </header>

      {/* Hero Content */}
      <main className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center flex-1 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold">
            <Award className="w-4 h-4" />
            <span>Campus Placement & Technical Exam Portal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Master Timed Mock Tests & Elevate Exam Accuracy
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Practice original Technical (OOPs, C++, C#) and Aptitude (Quant, Logical, Verbal) tests with hard per-question timers, instant detailed scorecards, and score progression trends.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white font-bold text-sm transition-all shadow-xl shadow-indigo-500/25 flex items-center justify-center space-x-2 scale-[1.02]"
            >
              <span>Take a Mock Test Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 text-left">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">60s Per Question Timer</h3>
              <p className="text-xs text-slate-400">Strict countdown per question with auto-advancing to build real exam speed.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">+2 Marks Scoring</h3>
              <p className="text-xs text-slate-400">Instant detailed scorecard with question solution review & flag reporting.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Admin Control & CSV</h3>
              <p className="text-xs text-slate-400">Feature-rich Admin Dashboard for test bank CRUD, student directory, & CSV exports.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mock Test Portal. Designed for high-performance student examination.
      </footer>
    </div>
  );
}
