'use client';

import React from 'react';
import { ShieldCheck, Lock, Key, Link2, HardDrive, Trash2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface SecurityViewProps {
  songCount: number;
  worldCount: number;
  onClearData: () => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const SecurityView: React.FC<SecurityViewProps> = ({
  songCount,
  worldCount,
  onClearData,
  showToast,
}) => {
  const { user } = useAuth();

  return (
    <div className="space-y-8 pb-28 max-w-4xl mx-auto">
      <div className="p-8 rounded-3xl glass-panel border border-cyan-500/20 space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">Privacy & Security Universe</h2>
        </div>
        <p className="text-sm text-slate-300">
          Your uploaded music files and worlds are isolated to your private account session. Songs are accessible offline via browser IndexedDB storage and protected by tokenized signed URL streaming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
          <div className="flex items-center gap-3 text-purple-300">
            <Lock className="w-5 h-5 text-purple-400" />
            <h3 className="font-bold text-base text-white">Private Song Isolation</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            All uploaded audio files are encrypted and bound to your active user session (<span className="text-cyan-300">{user?.id}</span>). No unauthorized users or public search engines can access your uploads.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Private User Scoping Active</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
          <div className="flex items-center gap-3 text-cyan-300">
            <Key className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-base text-white">Signed / Expiring URLs</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            When you share a World, Song World constructs temporary signed URLs with 24-hour expiration tokens. Direct raw audio links are never exposed publicly.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-500/20">
            <Link2 className="w-4 h-4 shrink-0" />
            <span>Token Expiration: 24 Hours</span>
          </div>
        </div>
      </div>

      {/* Local Storage Stats & Management */}
      <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HardDrive className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-bold text-base text-white">Offline Storage Diagnostics</h3>
              <p className="text-xs text-slate-400">IndexedDB local audio cache</p>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-slate-300">
            <div>{songCount} Songs Stored</div>
            <div className="text-slate-400">{worldCount} Planetary Worlds</div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={() => {
              if (confirm('Are you sure you want to clear all local music and worlds?')) {
                onClearData();
                showToast('Storage Reset', 'Local universe cleared', 'info');
              }
            }}
            className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear Offline Database
          </button>
        </div>
      </div>
    </div>
  );
};
