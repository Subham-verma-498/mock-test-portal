'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Shield, BookOpen, LogOut, LayoutDashboard } from 'lucide-react';
import { Role } from '@prisma/client';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-[#03070d]/90 backdrop-blur-md border-b border-[#38C7C7]/20 text-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/dashboard" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#38C7C7] p-0.5 shadow-lg shadow-[#38C7C7]/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#38C7C7]" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-lg bg-gradient-to-r from-white via-cyan-100 to-[#38C7C7] bg-clip-text text-transparent">
              Mock Test Portal
            </span>
            <span className="block text-[10px] text-[#38C7C7] tracking-wider font-semibold uppercase">
              Exam Prep Suite
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        {session?.user && (
          <div className="flex items-center space-x-6">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-sm font-medium text-slate-300 hover:text-[#38C7C7] transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-[#38C7C7]" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/courses"
              className="flex items-center space-x-2 text-sm font-medium text-slate-300 hover:text-[#38C7C7] transition-colors"
            >
              <BookOpen className="w-4 h-4 text-[#38C7C7]" />
              <span>Courses & Series</span>
            </Link>

            {session.user.role === Role.ADMIN && (
              <Link
                href="/admin"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#38C7C7]/15 border border-[#38C7C7]/40 text-[#38C7C7] text-xs font-semibold hover:bg-[#38C7C7]/25 transition-all shadow-sm shadow-[#38C7C7]/10"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Dashboard</span>
              </Link>
            )}

            {/* Profile Dropdown / User Badge */}
            <div className="flex items-center space-x-3 pl-4 border-l border-zinc-800">
              <div className="flex items-center space-x-2.5">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    className="w-8 h-8 rounded-full ring-2 ring-[#38C7C7]/40"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#38C7C7] text-black flex items-center justify-center text-xs font-black">
                    {session.user.name?.[0] || 'U'}
                  </div>
                )}
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-semibold text-slate-200">
                    {session.user.name || session.user.email}
                  </div>
                  <div className="text-[10px] text-[#38C7C7]">
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

