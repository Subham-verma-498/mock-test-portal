'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Plus, Play, Music, Sparkles, Disc, Trash2, ArrowRight, Check, ListPlus } from 'lucide-react';
import { World, Song } from '@/types';
import { PLANET_GRADIENTS } from '@/lib/db';
import { formatDuration } from '@/lib/metadata';
import { useAudio } from '@/context/AudioContext';

interface DashboardViewProps {
  worlds: World[];
  songs: Song[];
  isLoading: boolean;
  onCreateWorld: (name: string, description: string, gradientTheme: string) => void;
  onSelectWorld: (world: World) => void;
  onDeleteWorld: (worldId: string) => void;
  onAddSongToWorld: (worldId: string, songId: string) => void;
  onNavigateUpload: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  worlds,
  songs,
  isLoading,
  onCreateWorld,
  onSelectWorld,
  onDeleteWorld,
  onAddSongToWorld,
  onNavigateUpload,
}) => {
  const { currentSong, isPlaying, playSong } = useAudio();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [worldName, setWorldName] = useState('');
  const [worldDesc, setWorldDesc] = useState('');
  const [selectedGradient, setSelectedGradient] = useState(PLANET_GRADIENTS[0].gradient);
  const [activeSongDropdown, setActiveSongDropdown] = useState<string | null>(null);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!worldName.trim()) return;
    onCreateWorld(worldName.trim(), worldDesc.trim(), selectedGradient);
    setWorldName('');
    setWorldDesc('');
    setIsModalOpen(false);
  };

  const getSongsForWorld = (songIds: string[]) => {
    return songs.filter((s) => songIds.includes(s.id));
  };

  const calculateWorldDuration = (songIds: string[]) => {
    const worldSongs = getSongsForWorld(songIds);
    const totalSecs = worldSongs.reduce((sum, s) => sum + (s.duration || 0), 0);
    return formatDuration(totalSecs);
  };

  return (
    <div className="space-y-10 pb-28">
      {/* Spotify-style Hero Cosmic Banner */}
      <div className="relative p-8 rounded-3xl glass-panel border border-purple-500/20 overflow-hidden shadow-2xl">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-cyan-400/30 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-cyan-300">Cosmic Universe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              My Music Universe
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-lg">
              Organize, stream, and listen offline to your custom audio collection in planet-themed playlists.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onNavigateUpload}
              className="px-4 py-3 rounded-2xl glass-panel border border-white/15 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
            >
              Upload Songs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all shrink-0"
            >
              <Plus className="w-5 h-5" />
              Create a World
            </motion.button>
          </div>
        </div>
      </div>

      {/* Planetary Worlds Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-400" />
            Active Worlds ({worlds.length})
          </h3>
        </div>

        {isLoading ? (
          /* Skeleton Shimmer Loading */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-2xl glass-panel animate-pulse p-6 flex flex-col justify-between">
                <div className="w-16 h-16 rounded-full bg-slate-800" />
                <div className="space-y-2">
                  <div className="w-3/4 h-5 bg-slate-800 rounded" />
                  <div className="w-1/2 h-4 bg-slate-800 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : worlds.length === 0 ? (
          /* Empty State */
          <div className="p-12 text-center rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/30">
              <Globe className="w-10 h-10 text-purple-400 animate-pulse" />
            </div>
            <h4 className="text-lg font-bold text-white">Your world is empty — upload your first song to begin</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Start by uploading your favorite audio files or create your first planetary world playlist.
            </p>
            <button
              onClick={onNavigateUpload}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-400/40 text-xs font-semibold transition-all"
            >
              Go to Upload
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Planet Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {worlds.map((world, idx) => {
              const worldSongs = getSongsForWorld(world.songIds);
              return (
                <motion.div
                  key={world.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative cursor-pointer p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden border border-white/10"
                  onClick={() => onSelectWorld(world)}
                >
                  {/* Glowing Planet Orbit Graphic */}
                  <div className="flex items-start justify-between">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-tr ${world.gradientTheme} shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-500 flex items-center justify-center animate-float`}
                      >
                        <Disc className="w-8 h-8 text-white/90 animate-spin-vinyl" />
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/20 pointer-events-none group-hover:border-cyan-400/50 transition-colors" />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteWorld(world.id);
                      }}
                      title="Delete World"
                      className="text-slate-500 hover:text-rose-400 p-2 rounded-lg hover:bg-rose-500/10 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* World Information */}
                  <div className="mt-6 space-y-1">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {world.name}
                    </h4>
                    {world.description && (
                      <p className="text-xs text-slate-400 line-clamp-2">{world.description}</p>
                    )}
                  </div>

                  {/* Planet Stats & Play Action */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Music className="w-3.5 h-3.5 text-purple-400" />
                        {world.songIds.length} Songs
                      </span>
                      <span>•</span>
                      <span>{calculateWorldDuration(world.songIds)}</span>
                    </div>

                    {worldSongs.length > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playSong(worldSongs[0], worldSongs);
                        }}
                        title="Play World"
                        className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-600/40 hover:scale-110 transition-transform"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Spotify-style Home Page Song List with Quick Add to World */}
      {songs.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Music className="w-5 h-5 text-cyan-400" />
              All Audio Tracks ({songs.length})
            </h3>
            <span className="text-xs text-slate-400">Click track to play • Use + to add to playlist</span>
          </div>

          <div className="space-y-2">
            {songs.map((song, idx) => {
              const isCurrent = currentSong?.id === song.id;
              return (
                <div
                  key={song.id}
                  className={`flex items-center justify-between p-3 rounded-2xl glass-panel group transition-all duration-200 ${
                    isCurrent
                      ? 'border-2 border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                      : 'hover:bg-white/5 border border-white/10'
                  }`}
                >
                  <div
                    onClick={() => playSong(song, songs)}
                    className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer"
                  >
                    <span className="w-6 text-center font-mono text-xs text-slate-500">{idx + 1}</span>

                    <div
                      className={`w-11 h-11 rounded-xl overflow-hidden shrink-0 flex items-center justify-center ${
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
                    </div>

                    <div className="min-w-0 flex-1">
                      <h5 className={`text-sm font-semibold truncate ${isCurrent ? 'text-cyan-300' : 'text-white'}`}>
                        {song.title}
                      </h5>
                      <p className="text-xs text-slate-400 truncate">{song.artist}</p>
                    </div>
                  </div>

                  {/* Actions: Add to World & Duration */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">{formatDuration(song.duration)}</span>

                    {/* Quick Add to Playlist Dropdown */}
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSongDropdown(activeSongDropdown === song.id ? null : song.id);
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/10"
                        title="Add to World Playlist"
                      >
                        <ListPlus className="w-4 h-4" />
                        <span className="hidden sm:inline">Add to World</span>
                      </button>

                      {/* Dropdown Menu */}
                      {activeSongDropdown === song.id && (
                        <div className="absolute right-0 top-10 z-40 w-52 p-2 rounded-2xl glass-panel bg-slate-900 border border-purple-500/40 shadow-2xl space-y-1">
                          <p className="text-[10px] font-bold uppercase text-purple-300 px-2 py-1">Add to Playlist</p>
                          {worlds.length === 0 ? (
                            <p className="text-[11px] text-slate-400 px-2 py-1">No worlds created yet</p>
                          ) : (
                            worlds.map((w) => {
                              const inWorld = w.songIds.includes(song.id);
                              return (
                                <button
                                  key={w.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onAddSongToWorld(w.id, song.id);
                                    setActiveSongDropdown(null);
                                  }}
                                  className="w-full text-left px-2.5 py-1.5 rounded-xl text-xs hover:bg-white/10 flex items-center justify-between text-slate-200 transition-colors"
                                >
                                  <span className="truncate">{w.name}</span>
                                  {inWorld ? (
                                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                  ) : (
                                    <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  )}
                                </button>
                              );
                            })
                          )}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => playSong(song, songs)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center ${
                        isCurrent && isPlaying
                          ? 'bg-cyan-400 text-slate-950'
                          : 'bg-purple-600/30 text-purple-200 hover:bg-purple-600/60'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Create World Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md p-6 rounded-3xl glass-panel border border-purple-500/30 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Create a New World
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-purple-300">World Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Neon Andromeda"
                    value={worldName}
                    onChange={(e) => setWorldName(e.target.value)}
                    className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-purple-300">Description (Optional)</label>
                  <textarea
                    placeholder="Atmospheric synthwave & nocturnal grooves..."
                    value={worldDesc}
                    onChange={(e) => setWorldDesc(e.target.value)}
                    rows={2}
                    className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                {/* Color Gradient Theme Picker */}
                <div>
                  <label className="text-xs font-semibold text-purple-300">Planet Color Atmosphere</label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {PLANET_GRADIENTS.map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setSelectedGradient(p.gradient)}
                        className={`p-2 rounded-xl text-[11px] font-medium border text-center transition-all flex flex-col items-center gap-1.5 ${
                          selectedGradient === p.gradient
                            ? 'border-cyan-400 bg-white/10 shadow-lg'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${p.gradient} shadow-md`} />
                        <span className="text-slate-300 truncate w-full">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-bold text-sm shadow-lg shadow-purple-600/40"
                  >
                    Create World
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
