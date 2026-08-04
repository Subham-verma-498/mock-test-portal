'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Disc, X } from 'lucide-react';

interface PWAInstallBannerProps {
  isOpen: boolean;
  onInstall: () => void;
  onDismiss: () => void;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({ isOpen, onInstall, onDismiss }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-20 left-4 right-4 md:left-auto md:right-8 md:bottom-24 z-50 max-w-sm glass-panel p-4 rounded-2xl border border-cyan-400/40 shadow-2xl backdrop-blur-2xl"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 flex items-center justify-center shrink-0 shadow-md animate-spin-vinyl">
              <Disc className="w-6 h-6 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-white">Install Song World PWA</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                Enjoy offline audio streaming, instant launcher access, and planet universe playlists.
              </p>

              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={onInstall}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform"
                >
                  <Download className="w-3.5 h-3.5" />
                  Install App
                </button>
                <button
                  onClick={onDismiss}
                  className="px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs"
                >
                  Later
                </button>
              </div>
            </div>

            <button onClick={onDismiss} className="text-slate-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
