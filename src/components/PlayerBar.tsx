'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  Volume2,
  VolumeX,
  Disc,
  Maximize2,
  Minimize2,
  Music,
} from 'lucide-react';
import { useAudio } from '@/context/AudioContext';
import { formatDuration } from '@/lib/metadata';

export const PlayerBar: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    repeatMode,
    isShuffle,
    analyserData,
    togglePlay,
    nextSong,
    previousSong,
    seek,
    setVolume,
    toggleMute,
    toggleRepeat,
    toggleShuffle,
  } = useAudio();

  const [isExpanded, setIsExpanded] = useState(false);

  if (!currentSong) return null;

  // Calculate live visualizer heights based on Web Audio API frequency data or fallback pulses
  const getBarHeight = (index: number) => {
    if (!isPlaying) return '4px';
    if (analyserData && analyserData.length > index * 3) {
      const val = analyserData[index * 3];
      return `${Math.max(4, (val / 255) * 24)}px`;
    }
    // Fallback pulse
    return `${Math.floor(Math.random() * 18 + 6)}px`;
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-40 glass-player px-4 py-3 border-t border-white/10 md:ml-64"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Song Info & Vinyl Cover Art */}
          <div className="flex items-center gap-3 w-1/4 min-w-[180px]">
            <div className="relative group shrink-0">
              <div
                className={`w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-md shadow-purple-950/50 flex items-center justify-center bg-slate-900 ${
                  isPlaying ? 'animate-spin-vinyl' : 'animate-spin-vinyl animate-spin-paused'
                }`}
              >
                {currentSong.coverUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={currentSong.coverUrl} alt={currentSong.title} className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-tr ${currentSong.gradientTheme} flex items-center justify-center`}>
                    <Disc className="w-6 h-6 text-white opacity-80" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 rounded-full border border-cyan-400/40 pointer-events-none group-hover:border-cyan-300 transition-colors" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-white truncate max-w-[160px]">{currentSong.title}</h4>
                {/* Mini Equalizer Bars */}
                <div className="flex items-end gap-[2px] h-5 px-1 shrink-0">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      style={{ height: getBarHeight(i) }}
                      className="w-[3px] bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full transition-all duration-75"
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 truncate max-w-[160px]">{currentSong.artist}</p>
            </div>
          </div>

          {/* Player Center Controls & Seekbar */}
          <div className="flex-1 max-w-xl flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleShuffle}
                title="Shuffle"
                className={`p-1.5 rounded-lg transition-colors ${
                  isShuffle ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shuffle className="w-4 h-4" />
              </button>

              <button
                onClick={previousSong}
                title="Previous"
                className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              {/* Morphing Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/40 text-white"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </motion.button>

              <button
                onClick={nextSong}
                title="Next"
                className="text-slate-300 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
              >
                <SkipForward className="w-5 h-5" />
              </button>

              <button
                onClick={toggleRepeat}
                title={`Repeat: ${repeatMode}`}
                className={`p-1.5 rounded-lg transition-colors ${
                  repeatMode !== 'off' ? 'text-purple-400 bg-purple-500/10' : 'text-slate-400 hover:text-white'
                }`}
              >
                {repeatMode === 'one' ? <Repeat1 className="w-4 h-4" /> : <Repeat className="w-4 h-4" />}
              </button>
            </div>

            {/* Seek Bar */}
            <div className="w-full flex items-center gap-2 text-xs text-slate-400">
              <span className="w-10 text-right font-mono text-[11px]">{formatDuration(currentTime)}</span>
              <div className="relative flex-1 flex items-center group cursor-pointer">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={(e) => seek(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none"
                />
              </div>
              <span className="w-10 font-mono text-[11px]">{formatDuration(duration)}</span>
            </div>
          </div>

          {/* Volume Control & Fullscreen Toggle */}
          <div className="flex items-center justify-end gap-3 w-1/4 min-w-[150px]">
            <div className="flex items-center gap-2 group">
              <button onClick={toggleMute} className="text-slate-400 hover:text-white transition-colors">
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-20 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title="Expand Visualizer"
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Expanded Planet Visualizer Overlay Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-widest">Cosmic Visualizer</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Giant Orbiting Planet Center Visualizer */}
            <div className="flex flex-col items-center justify-center my-auto relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                {/* Glowing Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-ping opacity-30" />
                <div className="absolute -inset-8 rounded-full border border-cyan-500/20 animate-spin-vinyl" />

                {/* Spinning Planet Album Art */}
                <div
                  className={`w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-400/40 shadow-[0_0_60px_rgba(168,85,247,0.4)] ${
                    isPlaying ? 'animate-spin-vinyl' : 'animate-spin-vinyl animate-spin-paused'
                  }`}
                >
                  {currentSong.coverUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={currentSong.coverUrl} alt={currentSong.title} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-tr ${currentSong.gradientTheme} flex items-center justify-center`}
                    >
                      <Disc className="w-24 h-24 text-white/80" />
                    </div>
                  )}
                </div>
              </div>

              {/* Large Title & Artist */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 text-center">{currentSong.title}</h2>
              <p className="text-base text-purple-300 mt-1">{currentSong.artist}</p>

              {/* Expanded Equalizer Visualizer Bars */}
              <div className="flex items-end gap-1.5 h-16 mt-6 px-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying
                        ? analyserData && analyserData[i * 2]
                          ? `${(analyserData[i * 2] / 255) * 60 + 8}px`
                          : `${Math.random() * 50 + 10}px`
                        : '8px',
                    }}
                    transition={{ duration: 0.1 }}
                    className="w-2 bg-gradient-to-t from-purple-600 via-pink-500 to-cyan-400 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Bottom Controls in Fullscreen */}
            <div className="max-w-xl mx-auto w-full flex flex-col items-center gap-4">
              <div className="w-full flex items-center gap-3 text-xs text-slate-400">
                <span>{formatDuration(currentTime)}</span>
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={(e) => seek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                />
                <span>{formatDuration(duration)}</span>
              </div>

              <div className="flex items-center gap-6">
                <button onClick={previousSong} className="p-3 text-slate-300 hover:text-white rounded-full bg-white/5">
                  <SkipBack className="w-6 h-6" />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 flex items-center justify-center text-white shadow-xl shadow-purple-500/40"
                >
                  {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                </button>
                <button onClick={nextSong} className="p-3 text-slate-300 hover:text-white rounded-full bg-white/5">
                  <SkipForward className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
