'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Disc, UploadCloud, Library, ShieldCheck, Download, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export type NavTab = 'dashboard' | 'upload' | 'library' | 'security';

interface SidebarNavProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  openAuthModal: () => void;
  canInstallPWA?: boolean;
  onInstallPWA?: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  activeTab,
  setActiveTab,
  openAuthModal,
  canInstallPWA,
  onInstallPWA,
}) => {
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'dashboard' as NavTab, label: 'My Worlds', icon: Globe },
    { id: 'upload' as NavTab, label: 'Upload Songs', icon: UploadCloud },
    { id: 'library' as NavTab, label: 'All Songs', icon: Library },
    { id: 'security' as NavTab, label: 'Privacy & Sharing', icon: ShieldCheck },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 glass-panel border-r border-white/10 z-30 flex flex-col justify-between p-5 hidden md:flex">
      {/* Brand Header */}
      <div>
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-spin-vinyl">
            <Disc className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 tracking-wide">
              Song World
            </h1>
            <p className="text-[10px] text-purple-300/70 font-medium tracking-widest uppercase">Music Universe</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-pink-600/30 border border-purple-400/40 rounded-xl shadow-lg shadow-purple-900/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-purple-400' : ''}`} />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer & User Section */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        {canInstallPWA && (
          <button
            onClick={onInstallPWA}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-[1.02] shadow-md shadow-cyan-950/40"
          >
            <Download className="w-4 h-4 animate-bounce" />
            Install App (PWA)
          </button>
        )}

        <div className="flex items-center justify-between p-3 rounded-xl glass-panel bg-white/5">
          <div className="flex items-center gap-3 min-w-0">
            {user?.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-9 h-9 rounded-full object-cover border border-purple-400/30 shrink-0"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-purple-600/40 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-purple-300" />
              </div>
            )}
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{user?.name || 'Explorer'}</p>
              <p className="text-[10px] text-slate-400 truncate">{user?.isGuest ? 'Guest World' : user?.email}</p>
            </div>
          </div>

          {user && !user.isGuest ? (
            <button
              onClick={logout}
              title="Sign Out"
              className="text-slate-400 hover:text-rose-400 p-1.5 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={openAuthModal}
              title="Sign In"
              className="text-purple-400 hover:text-purple-300 p-1.5 rounded-lg transition-colors"
            >
              <LogIn className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
