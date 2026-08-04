'use client';

import React, { useState, useEffect } from 'react';
import { SidebarNav, NavTab } from '@/components/SidebarNav';
import { StarfieldCanvas } from '@/components/StarfieldCanvas';
import { PlayerBar } from '@/components/PlayerBar';
import { DashboardView } from '@/components/DashboardView';
import { WorldDetailView } from '@/components/WorldDetailView';
import { UploadZone } from '@/components/UploadZone';
import { LibraryView } from '@/components/LibraryView';
import { SecurityView } from '@/components/SecurityView';
import { AuthModal } from '@/components/AuthModal';
import { ToastContainer } from '@/components/Toast';
import { PWAInstallBanner } from '@/components/PWAInstallBanner';
import { Song, World, ToastMessage } from '@/types';
import {
  getAllSongsFromDB,
  getAllWorldsFromDB,
  saveWorldToDB,
  deleteWorldFromDB,
  deleteSongFromDB,
  saveSongToDB,
  PLANET_GRADIENTS,
} from '@/lib/db';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [selectedWorld, setSelectedWorld] = useState<World | null>(null);

  const [songs, setSongs] = useState<Song[]>([]);
  const [worlds, setWorlds] = useState<World[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Toast System State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // PWA State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPWABanner, setShowPWABanner] = useState(false);

  // Add toast helper
  const showToast = (title: string, message?: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Load songs & worlds from IndexedDB
  const loadData = async () => {
    setIsLoading(true);
    try {
      const fetchedSongs = await getAllSongsFromDB(user?.id);
      let fetchedWorlds = await getAllWorldsFromDB(user?.id);

      // Create default starter worlds if user has none
      if (fetchedWorlds.length === 0) {
        const starterWorlds: World[] = [
          {
            id: 'world_nebula_pulse',
            name: 'Nebula Pulse',
            description: 'Ambient cosmic synthesizer tracks & relaxing nocturnal beats.',
            gradientTheme: PLANET_GRADIENTS[0].gradient,
            planetIcon: '0',
            createdAt: new Date().toISOString(),
            userId: user?.id || 'guest',
            songIds: [],
          },
          {
            id: 'world_starlight_synth',
            name: 'Starlight Synth',
            description: 'Vibrant futuristic rhythms and energetic galaxy tunes.',
            gradientTheme: PLANET_GRADIENTS[1].gradient,
            planetIcon: '1',
            createdAt: new Date().toISOString(),
            userId: user?.id || 'guest',
            songIds: [],
          },
          {
            id: 'world_solar_drift',
            name: 'Solar Drift',
            description: 'Warm golden acoustic melodies floating across solar systems.',
            gradientTheme: PLANET_GRADIENTS[2].gradient,
            planetIcon: '2',
            createdAt: new Date().toISOString(),
            userId: user?.id || 'guest',
            songIds: [],
          },
        ];

        for (const w of starterWorlds) {
          await saveWorldToDB(w);
        }
        fetchedWorlds = starterWorlds;
      }

      setSongs(fetchedSongs);
      setWorlds(fetchedWorlds);
    } catch (err) {
      console.error('Failed to load DB state', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [user]);

  // Listen for PWA beforeinstallprompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPWABanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          showToast('PWA Installed', 'Song World is now installed on your device!', 'success');
        }
        setDeferredPrompt(null);
        setShowPWABanner(false);
      });
    }
  };

  // World Handlers
  const handleCreateWorld = async (name: string, description: string, gradientTheme: string) => {
    const newWorld: World = {
      id: `world_${Date.now()}`,
      name,
      description,
      gradientTheme,
      planetIcon: Math.floor(Math.random() * 5).toString(),
      createdAt: new Date().toISOString(),
      userId: user?.id || 'guest',
      songIds: [],
    };
    await saveWorldToDB(newWorld);
    setWorlds((prev) => [newWorld, ...prev]);
    showToast('World Created', `Planetary World "${name}" is now online`, 'success');
  };

  const handleDeleteWorld = async (worldId: string) => {
    await deleteWorldFromDB(worldId);
    setWorlds((prev) => prev.filter((w) => w.id !== worldId));
    if (selectedWorld?.id === worldId) {
      setSelectedWorld(null);
    }
    showToast('World Deleted', 'Playlist removed from your universe', 'info');
  };

  const handleUpdateWorldSongs = async (worldId: string, songIds: string[]) => {
    const targetWorld = worlds.find((w) => w.id === worldId);
    if (!targetWorld) return;
    const updated = { ...targetWorld, songIds };
    await saveWorldToDB(updated);
    setWorlds((prev) => prev.map((w) => (w.id === worldId ? updated : w)));
    if (selectedWorld?.id === worldId) {
      setSelectedWorld(updated);
    }
  };

  // Song Handlers
  const handleUploadSuccess = (newSong: Song) => {
    setSongs((prev) => [newSong, ...prev]);
    setActiveTab('library');
  };

  const handleDeleteSong = async (songId: string) => {
    await deleteSongFromDB(songId);
    setSongs((prev) => prev.filter((s) => s.id !== songId));

    // Update local worlds state
    setWorlds((prev) =>
      prev.map((w) => ({
        ...w,
        songIds: w.songIds.filter((id) => id !== songId),
      }))
    );

    showToast('Song Deleted', 'Track removed from library and worlds', 'info');
  };

  const handleAddSongToWorld = async (worldId: string, songId: string) => {
    const world = worlds.find((w) => w.id === worldId);
    if (world && !world.songIds.includes(songId)) {
      const updatedIds = [...world.songIds, songId];
      await handleUpdateWorldSongs(worldId, updatedIds);
      showToast('Added to World', `Song added to ${world.name}`, 'success');
    }
  };

  const handleClearAllData = async () => {
    for (const song of songs) {
      await deleteSongFromDB(song.id);
    }
    for (const world of worlds) {
      await deleteWorldFromDB(world.id);
    }
    setSongs([]);
    setWorlds([]);
    setSelectedWorld(null);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-purple-500 selection:text-white">
      {/* Dynamic Starfield Ambient Canvas Background */}
      <StarfieldCanvas />

      {/* Toast Notifications Overlay */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* PWA Slide-up Install Banner */}
      <PWAInstallBanner
        isOpen={showPWABanner}
        onInstall={handleInstallPWA}
        onDismiss={() => setShowPWABanner(false)}
      />

      {/* Main Sidebar Navigation */}
      <SidebarNav
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedWorld(null);
        }}
        openAuthModal={() => setIsAuthModalOpen(true)}
        canInstallPWA={!!deferredPrompt}
        onInstallPWA={handleInstallPWA}
      />

      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 glass-panel border-b border-white/10 sticky top-0 z-30">
        <h1 className="font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
          Song World
        </h1>
        <div className="flex items-center gap-3 text-xs">
          <button onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
            Worlds
          </button>
          <button onClick={() => setActiveTab('upload')} className={activeTab === 'upload' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
            Upload
          </button>
          <button onClick={() => setActiveTab('library')} className={activeTab === 'library' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
            Songs
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div className="md:ml-64 p-4 md:p-8 relative z-10 max-w-7xl mx-auto min-h-screen">
        {selectedWorld ? (
          <WorldDetailView
            world={selectedWorld}
            allSongs={songs}
            onBack={() => setSelectedWorld(null)}
            onUpdateWorldSongs={handleUpdateWorldSongs}
            showToast={showToast}
          />
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <DashboardView
                worlds={worlds}
                songs={songs}
                isLoading={isLoading}
                onCreateWorld={handleCreateWorld}
                onSelectWorld={(world) => setSelectedWorld(world)}
                onDeleteWorld={handleDeleteWorld}
                onNavigateUpload={() => setActiveTab('upload')}
              />
            )}

            {activeTab === 'upload' && (
              <div className="space-y-8 pb-28 pt-4">
                <div className="text-center space-y-2 max-w-lg mx-auto">
                  <h2 className="text-3xl font-extrabold text-white">Song Universe Upload</h2>
                  <p className="text-xs text-slate-400">
                    Upload MP3, WAV, or M4A audio files into your private browser database with auto-extracted metadata.
                  </p>
                </div>

                <UploadZone onUploadSuccess={handleUploadSuccess} showToast={showToast} />
              </div>
            )}

            {activeTab === 'library' && (
              <LibraryView
                songs={songs}
                worlds={worlds}
                onDeleteSong={handleDeleteSong}
                onAddSongToWorld={handleAddSongToWorld}
                onNavigateUpload={() => setActiveTab('upload')}
              />
            )}

            {activeTab === 'security' && (
              <SecurityView
                songCount={songs.length}
                worldCount={worlds.length}
                onClearData={handleClearAllData}
                showToast={showToast}
              />
            )}
          </>
        )}
      </div>

      {/* Sticky Bottom Music Player */}
      <PlayerBar />

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} showToast={showToast} />
    </main>
  );
}
