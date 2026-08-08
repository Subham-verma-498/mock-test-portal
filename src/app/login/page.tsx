'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookOpen, ShieldCheck, UserCheck, CheckCircle2, Lock } from 'lucide-react';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loadingRole, setLoadingRole] = useState<string | null>(null);

  // Check if demo auth is enabled (passed via public env or fallback)
  const isDemoAuthEnabled = process.env.NEXT_PUBLIC_ENABLE_DEMO_AUTH === 'true' || process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (status === 'authenticated') {
      if (session?.user?.role === 'ADMIN') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    }
  }, [session, status, router]);

  const handleDemoLogin = async (email: string, role: 'STUDENT' | 'ADMIN') => {
    setLoadingRole(role);
    await signIn('demo-login', {
      email,
      role,
      callbackUrl: role === 'ADMIN' ? '/admin' : '/dashboard',
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        {/* Branding Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-xl shadow-indigo-500/25 mb-4">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Mock Test Portal
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Timed exam practice, instant detailed scoring, & progress analytics.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-slate-100 mb-6 text-center">
            Sign in to continue
          </h2>

          {/* Primary Google Login Button */}
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold py-3 px-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] mb-6 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google (Gmail)</span>
          </button>

          {/* Development / Demo Mode Toggle Section */}
          {isDemoAuthEnabled ? (
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
                  Dev Local Preview Login
                </span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono px-2 py-0.5 rounded-full">
                  Dev Mode
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Instant test login bypass active for local development.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleDemoLogin('student@demo.com', 'STUDENT')}
                  disabled={!!loadingRole}
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-semibold transition-all hover:border-indigo-500/50"
                >
                  <UserCheck className="w-4 h-4 text-indigo-400" />
                  <span>{loadingRole === 'STUDENT' ? 'Logging in...' : 'Demo Student'}</span>
                </button>

                <button
                  onClick={() => handleDemoLogin('admin@mocktestportal.com', 'ADMIN')}
                  disabled={!!loadingRole}
                  className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-semibold transition-all hover:border-amber-500/50"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>{loadingRole === 'ADMIN' ? 'Logging in...' : 'Portal Admin'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-6 pt-4 text-center border-t border-slate-800">
              <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-400">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production OAuth Security Enforced</span>
              </div>
            </div>
          )}
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 grid grid-cols-3 gap-2 text-center text-xs text-slate-400">
          <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/50">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <span>30 Qs / Test</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/50">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
            <span>60s / Question</span>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/50">
            <CheckCircle2 className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <span>Instant Results</span>
          </div>
        </div>
      </div>
    </div>
  );
}
