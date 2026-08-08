'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Shield, BookOpen, LogOut, User, Award, LayoutDashboard } from 'lucide-react';
import { Role } from '@prisma/client';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/dashboard" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Mock Test Portal
            </span>
            <span className="block text-[10px] text-indigo-400 tracking-wider font-semibold uppercase">
              Exam Prep Suite
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        {session?.user && (
          <div className="flex items-center space-x-6">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-indigo-400" />
              <span>Dashboard</span>
            </Link>

            {session.user.role === Role.ADMIN && (
              <Link
                href="/admin"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-all shadow-sm shadow-amber-500/10"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Dashboard</span>
              </Link>
            )}

            {/* Profile Dropdown / User Badge */}
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-800">
              <div className="flex items-center space-x-2.5">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    className="w-8 h-8 rounded-full ring-2 ring-indigo-500/30"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold">
                    {session.user.name?.[0] || 'U'}
                  </div>
                )}
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-semibold text-slate-200">
                    {session.user.name || session.user.email}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {session.user.role === Role.ADMIN ? 'Administrator' : 'Student Candidate'}
                  </div>
                </div>
              </div>

              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
