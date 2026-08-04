'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Disc, Trash2, Search, Download, Plus, Check } from 'lucide-react';
import { Song, World } from '@/types';
import { formatDuration } from '@/lib/metadata';
import { useAudio } from '@/context/AudioContext';

interface LibraryViewProps {
  songs: Song[];
  worlds: World[];
  onDeleteSong: (songId: string) => void;
  onAddSongToWorld: (worldId: string, songId: string) => void;
  onNavigateUpload: () => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  songs,
  worlds,
  onDeleteSong,
  onAddSongToWorld,
  onNavigateUpload,
}) => {
  const { currentSong, isPlaying, playSong } = useAudio();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeWorldMenu, setActiveWorldMenu] = useState<string | null>(null);

  const filteredSongs = songs.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.album && s.album.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-28">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2">
            <Music className="w-6 h-6 text-purple-400" />
            All Audio Songs ({songs.length})
          </h2>
          <p className="text-xs text-slate-400 mt-1">Your entire uploaded private audio collection</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search title, artist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <button
            onClick={onNavigateUpload}
            className="px-4 py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-400/40 text-xs font-semibold shrink-0"
          >
            Upload More
          </button>
        </div>
      </div>

      {/* Song Grid */}
      {filteredSongs.length === 0 ? (
        <div className="p-12 text-center rounded-2xl glass-panel border border-white/10 space-y-3">
          <p className="text-slate-400 text-sm">No matching audio songs found in your library.</p>
          <button
            onClick={onNavigateUpload}
            className="px-4 py-2 rounded-xl bg-purple-600/30 text-purple-200 border border-purple-400/40 text-xs font-semibold"
          >
            Upload First Song
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSongs.map((song, idx) => {
            const isCurrent = currentSong?.id === song.id;
            return (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className={`relative p-4 rounded-2xl glass-panel group flex flex-col justify-between space-y-4 transition-all duration-300 ${
                  isCurrent
                    ? 'border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(6,182,212,0.3)]'
                    : 'border border-white/10 hover:border-purple-400/40 hover:bg-white/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Album Cover / Colorful Placeholder */}
                  <div
                    onClick={() => playSong(song, songs)}
                    className={`w-16 h-16 rounded-xl overflow-hidden shrink-0 cursor-pointer relative shadow-lg ${
                      isCurrent && isPlaying ? 'animate-spin-vinyl' : ''
                    }`}
                  >
                    {song.coverUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-tr ${song.gradientTheme} flex items-center justify-center`}
                      >
                        <Disc className="w-8 h-8 text-white/80" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                      <Play className="w-6 h-6 text-white drop-shadow-md" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 space-y-1">
                    <h4 className={`text-base font-bold truncate ${isCurrent ? 'text-cyan-300' : 'text-white'}`}>
                      {song.title}
                    </h4>
                    <p className="text-xs text-slate-400 truncate">{song.artist}</p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        <Download className="w-3 h-3" />
                        Available Offline
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Duration & Add to World */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">{formatDuration(song.duration)}</span>

                  <div className="flex items-center gap-2">
                    {/* Add to World Dropdown Trigger */}
                    <div className="relative">
                      <button
                        onClick={() => setActiveWorldMenu(activeWorldMenu === song.id ? null : song.id)}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-semibold flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> World
                      </button>

                      {/* Dropdown Menu */}
                      {activeWorldMenu === song.id && (
                        <div className="absolute right-0 bottom-8 z-30 w-48 p-2 rounded-xl glass-panel bg-slate-900 border border-purple-500/30 shadow-2xl space-y-1">
                          <p className="text-[10px] font-bold uppercase text-purple-300 px-2 py-1">Add to World</p>
                          {worlds.length === 0 ? (
                            <p className="text-[11px] text-slate-400 px-2">No worlds created yet</p>
                          ) : (
                            worlds.map((w) => {
                              const inWorld = w.songIds.includes(song.id);
                              return (
                                <button
                                  key={w.id}
                                  onClick={() => {
                                    onAddSongToWorld(w.id, song.id);
                                    setActiveWorldMenu(null);
                                  }}
                                  className="w-full text-left px-2 py-1.5 rounded-lg text-xs hover:bg-white/10 flex items-center justify-between text-slate-200"
                                >
                                  <span className="truncate">{w.name}</span>
                                  {inWorld && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                                </button>
                              );
                            })
                          )}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => onDeleteSong(song.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Delete song"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
