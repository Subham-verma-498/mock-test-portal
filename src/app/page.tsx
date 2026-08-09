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
    <div className="min-h-screen bg-[#03070d] text-slate-100 flex flex-col justify-between selection:bg-[#38C7C7] selection:text-black">
      {/* Landing Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between w-full border-b border-[#38C7C7]/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#38C7C7] p-0.5 shadow-lg shadow-[#38C7C7]/20">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#38C7C7]" />
            </div>
          </div>
          <span className="font-extrabold text-xl bg-gradient-to-r from-white via-cyan-100 to-[#38C7C7] bg-clip-text text-transparent">
            Mock Test Portal
          </span>
        </div>

        <Link
          href="/login"
          className="px-5 py-2.5 rounded-xl bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-extrabold text-xs transition-all shadow-lg shadow-[#38C7C7]/20 hover:scale-[1.02]"
        >
          Sign In / Portal Access
        </Link>
      </header>

      {/* Hero Content */}
      <main className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center flex-1 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38C7C7]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#38C7C7]/10 border border-[#38C7C7]/30 text-[#38C7C7] text-xs font-bold shadow-[0_0_15px_rgba(56,199,199,0.15)]">
            <Award className="w-4 h-4 text-[#38C7C7]" />
            <span>Campus Placement & Technical Exam Portal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight bg-gradient-to-b from-white via-slate-100 to-[#38C7C7] bg-clip-text text-transparent">
            Master Timed Mock Tests & Elevate Exam Accuracy
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practice original Technical (OOPs, C++, C#) and Aptitude (Quant, Logical, Verbal) tests with hard per-question timers, instant detailed scorecards, and score progression trends.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#38C7C7] hover:bg-[#2db3b3] text-black font-black text-sm transition-all shadow-xl shadow-[#38C7C7]/25 flex items-center justify-center space-x-2 scale-[1.02]"
            >
              <span>Take a Mock Test Now</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 text-left">
            <div className="p-5 rounded-2xl bg-black/80 border border-[#38C7C7]/20 space-y-2 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-[#38C7C7]/10 border border-[#38C7C7]/30 text-[#38C7C7] flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">60s Per Question Timer</h3>
              <p className="text-xs text-slate-400">Strict countdown per question with auto-advancing to build real exam speed.</p>
            </div>

            <div className="p-5 rounded-2xl bg-black/80 border border-[#38C7C7]/20 space-y-2 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">+2 Marks Scoring</h3>
              <p className="text-xs text-slate-400">Instant detailed scorecard with question solution review & flag reporting.</p>
            </div>

            <div className="p-5 rounded-2xl bg-black/80 border border-[#38C7C7]/20 space-y-2 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-[#38C7C7]/10 border border-[#38C7C7]/30 text-[#38C7C7] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Admin Control & CSV</h3>
              <p className="text-xs text-slate-400">Feature-rich Admin Dashboard for test bank CRUD, student directory, & CSV exports.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#38C7C7]/20 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mock Test Portal. Designed for high-performance student examination.
      </footer>
    </div>
  );
}

