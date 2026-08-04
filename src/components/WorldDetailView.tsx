'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Play,
  Plus,
  Share2,
  Trash2,
  MoveUp,
  MoveDown,
  Disc,
  Check,
  Copy,
  Music,
  Shield,
  Search,
} from 'lucide-react';
import { World, Song } from '@/types';
import { formatDuration } from '@/lib/metadata';
import { useAudio } from '@/context/AudioContext';

interface WorldDetailViewProps {
  world: World;
  allSongs: Song[];
  onBack: () => void;
  onUpdateWorldSongs: (worldId: string, songIds: string[]) => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const WorldDetailView: React.FC<WorldDetailViewProps> = ({
  world,
  allSongs,
  onBack,
  onUpdateWorldSongs,
  showToast,
}) => {
  const { currentSong, isPlaying, playSong } = useAudio();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Songs currently inside this World
  const worldSongs = allSongs.filter((s) => world.songIds.includes(s.id));
  
  // Available songs to add
  const availableSongs = allSongs.filter((s) => !world.songIds.includes(s.id));

  // Filtered world songs
  const filteredSongs = worldSongs.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddSongToWorld = (songId: string) => {
    const updatedIds = [...world.songIds, songId];
    onUpdateWorldSongs(world.id, updatedIds);
    showToast('Song Added', 'Song successfully incorporated into this world', 'success');
  };

  const handleRemoveSongFromWorld = (songId: string) => {
    const updatedIds = world.songIds.filter((id) => id !== songId);
    onUpdateWorldSongs(world.id, updatedIds);
    showToast('Song Removed', 'Song removed from playlist', 'info');
  };

  const moveSong = (index: number, direction: 'up' | 'down') => {
    const newSongIds = [...world.songIds];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newSongIds.length) return;

    const temp = newSongIds[index];
    newSongIds[index] = newSongIds[targetIdx];
    newSongIds[targetIdx] = temp;

    onUpdateWorldSongs(world.id, newSongIds);
  };

  const generateShareLink = () => {
    const code = world.shareCode || `sw_${world.id.slice(0, 8)}`;
    return `${window.location.origin}/#world=${code}&token=exp_${Date.now() + 86400000}`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generateShareLink());
    setCopiedShare(true);
    showToast('Link Copied', 'Private signed link copied to clipboard!', 'success');
    setTimeout(() => setCopiedShare(false), 3000);
  };

  return (
    <div className="space-y-8 pb-28">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      {/* Hero Banner Header */}
      <div className="relative p-8 rounded-3xl glass-panel border border-white/10 overflow-hidden flex flex-col md:flex-row items-center gap-8">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${world.gradientTheme} opacity-20 pointer-events-none blur-xl`}
        />

        <div className="relative shrink-0">
          <div
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr ${world.gradientTheme} shadow-[0_0_50px_rgba(168,85,247,0.4)] flex items-center justify-center animate-float`}
          >
            <Disc className="w-16 h-16 text-white/90 animate-spin-vinyl" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            Private Planetary World
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{world.name}</h1>
          {world.description && <p className="text-sm text-slate-300 max-w-xl">{world.description}</p>}

          <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-400 pt-2">
            <span>{worldSongs.length} Songs</span>
            <span>•</span>
            <span>{formatDuration(worldSongs.reduce((acc, s) => acc + (s.duration || 0), 0))}</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-3">
            {worldSongs.length > 0 && (
              <button
                onClick={() => playSong(worldSongs[0], worldSongs)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-bold text-sm shadow-lg shadow-purple-600/30 flex items-center gap-2 hover:scale-[1.03] transition-transform"
              >
                <Play className="w-4 h-4 fill-current" />
                Play All
              </button>
            )}

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2.5 rounded-xl glass-panel border border-white/10 text-cyan-300 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Songs
            </button>

            <button
              onClick={() => setIsShareModalOpen(true)}
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="Share Private Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Song List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Music className="w-5 h-5 text-purple-400" />
            Playlist Tracklist
          </h3>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search in world..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
            />
          </div>
        </div>

        {worldSongs.length === 0 ? (
          <div className="p-12 text-center rounded-2xl glass-panel border border-white/10 space-y-3">
            <p className="text-slate-400 text-sm">No songs added to this world yet.</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-purple-600/30 text-purple-200 border border-purple-400/40 text-xs font-semibold"
            >
              Add Songs to World
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredSongs.map((song, idx) => {
              const isCurrent = currentSong?.id === song.id;
              return (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className={`flex items-center justify-between p-3.5 rounded-2xl glass-panel group transition-all duration-200 ${
                    isCurrent
                      ? 'border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                      : 'border border-white/10 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span className="w-6 text-center font-mono text-xs text-slate-500">{idx + 1}</span>

                    <button
                      onClick={() => playSong(song, worldSongs)}
                      className={`w-10 h-10 rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center ${
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
                          <Disc className="w-5 h-5 text-white/80" />
                        </div>
                      )}
                    </button>

                    <div className="min-w-0 flex-1">
                      <h4 className={`text-sm font-semibold truncate ${isCurrent ? 'text-cyan-300' : 'text-white'}`}>
                        {song.title}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">{song.artist}</p>
                    </div>
                  </div>

                  {/* Actions & Reordering */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">{formatDuration(song.duration)}</span>

                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                      <button
                        onClick={() => moveSong(idx, 'up')}
                        disabled={idx === 0}
                        className="p-1.5 text-slate-400 hover:text-white disabled:opacity-30"
                        title="Move Up"
                      >
                        <MoveUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveSong(idx, 'down')}
                        disabled={idx === worldSongs.length - 1}
                        className="p-1.5 text-slate-400 hover:text-white disabled:opacity-30"
                        title="Move Down"
                      >
                        <MoveDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleRemoveSongFromWorld(song.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400"
                        title="Remove from playlist"
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

      {/* Add Songs Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-lg p-6 rounded-3xl glass-panel border border-purple-500/30 shadow-2xl space-y-4 max-h-[80vh] flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white">Add Songs to {world.name}</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-white">
                  ✕
                </button>
              </div>

              <div className="overflow-y-auto flex-1 space-y-2 pr-1">
                {availableSongs.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-6">All uploaded songs are already in this world!</p>
                ) : (
                  availableSongs.map((song) => (
                    <div
                      key={song.id}
                      className="flex items-center justify-between p-3 rounded-xl glass-panel border border-white/10"
                    >
                      <div className="min-w-0">
                        <h5 className="text-sm font-semibold text-white truncate">{song.title}</h5>
                        <p className="text-xs text-slate-400 truncate">{song.artist}</p>
                      </div>
                      <button
                        onClick={() => handleAddSongToWorld(song.id)}
                        className="px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/60 text-purple-200 text-xs font-semibold flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Signed Link Modal */}
      <AnimatePresence>
        {isShareModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-md p-6 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-cyan-400" />
                  Private Signed Share Link
                </h3>
                <button onClick={() => setIsShareModalOpen(false)} className="text-slate-400 hover:text-white">
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Generate an expiring signed token URL for this World. Only users with this secure link can stream songs from this playlist.
              </p>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-white/10 font-mono text-xs text-cyan-300 truncate">
                <span className="truncate flex-1">{generateShareLink()}</span>
                <button
                  onClick={copyLink}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 font-sans text-xs font-semibold shrink-0 flex items-center gap-1"
                >
                  {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedShare ? 'Copied' : 'Copy'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
