'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, Music, CheckCircle2, Sparkles, FileAudio, Disc, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { extractMetadata, ExtractedMetadata, formatDuration } from '@/lib/metadata';
import { saveSongToDB } from '@/lib/db';
import { Song } from '@/types';
import { useAuth } from '@/context/AuthContext';

interface UploadZoneProps {
  onUploadSuccess: (song: Song) => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const UploadZone: React.FC<UploadZoneProps> = ({ onUploadSuccess, showToast }) => {
  const { user } = useAuth();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [pendingSong, setPendingSong] = useState<{
    file: File;
    metadata: ExtractedMetadata;
    audioUrl: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const audioFile = files.find((f) => f.type.startsWith('audio/') || /\.(mp3|wav|m4a|ogg)$/i.test(f.name));

    if (audioFile) {
      await processFile(audioFile);
    } else {
      showToast('Unsupported File Format', 'Please upload MP3, WAV, or M4A audio files.', 'error');
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const processFile = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(10);

    // Simulate animated upload progress bar
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 85) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 15;
      });
    }, 150);

    try {
      const metadata = await extractMetadata(file);
      const audioUrl = URL.createObjectURL(file);

      setUploadProgress(100);
      clearInterval(progressInterval);

      setTimeout(() => {
        setIsUploading(false);
        setPendingSong({
          file,
          metadata,
          audioUrl,
        });
      }, 400);
    } catch (err) {
      clearInterval(progressInterval);
      setIsUploading(false);
      showToast('Processing Error', 'Failed to read audio file metadata', 'error');
      console.error(err);
    }
  };

  const confirmUpload = async () => {
    if (!pendingSong) return;

    const newSong: Song = {
      id: `song_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      title: pendingSong.metadata.title,
      artist: pendingSong.metadata.artist,
      album: pendingSong.metadata.album,
      duration: pendingSong.metadata.duration,
      fileBlob: pendingSong.file,
      audioUrl: pendingSong.audioUrl,
      coverUrl: pendingSong.metadata.coverUrl,
      gradientTheme: pendingSong.metadata.gradientTheme,
      uploadedAt: new Date().toISOString(),
      userId: user?.id || 'guest',
      sizeBytes: pendingSong.file.size,
      format: pendingSong.file.type || 'audio/mp3',
      isOfflineAvailable: true,
    };

    await saveSongToDB(newSong);

    // Trigger visual celebration confetti
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#06b6d4', '#ec4899', '#f59e0b'],
    });

    onUploadSuccess(newSong);
    showToast('Song Uploaded!', `"${newSong.title}" is now part of your universe`, 'success');
    setPendingSong(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="audio/*,.mp3,.wav,.m4a"
        className="hidden"
      />

      <AnimatePresence mode="wait">
        {!pendingSong ? (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative cursor-pointer p-10 rounded-2xl glass-panel text-center border-2 border-dashed transition-all duration-300 ${
              isDragging
                ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_40px_rgba(6,182,212,0.3)] scale-[1.02]'
                : 'border-purple-500/30 hover:border-purple-400/60 hover:bg-white/5'
            }`}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 p-[2px] shadow-lg shadow-purple-500/30">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <UploadCloud className={`w-8 h-8 text-cyan-300 ${isDragging ? 'animate-bounce' : ''}`} />
              </div>
            </div>

            <h3 className="text-lg font-bold text-white tracking-wide">
              {isDragging ? 'Drop your audio file here!' : 'Upload to Your Universe'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
              Drag & drop MP3, WAV, or M4A files or click to browse. Metadata and artwork will be automatically extracted.
            </p>

            {/* Upload Progress Bar */}
            {isUploading && (
              <div className="mt-6 max-w-md mx-auto">
                <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-mono">
                  <span>Extracting Metadata...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                    initial={{ width: '0%' }}
                    animate={{ width: `${uploadProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="metadata-preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 rounded-2xl glass-panel border border-purple-500/30 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Extracted Song Details</h3>
              </div>
              <button
                onClick={() => setPendingSong(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/20 shadow-xl shrink-0">
                {pendingSong.metadata.coverUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={pendingSong.metadata.coverUrl}
                    alt={pendingSong.metadata.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-tr ${pendingSong.metadata.gradientTheme} flex items-center justify-center`}
                  >
                    <Disc className="w-10 h-10 text-white/80" />
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-3 min-w-0">
                <div>
                  <label className="text-[10px] uppercase font-bold text-purple-300 tracking-wider">Song Title</label>
                  <input
                    type="text"
                    value={pendingSong.metadata.title}
                    onChange={(e) =>
                      setPendingSong({
                        ...pendingSong,
                        metadata: { ...pendingSong.metadata, title: e.target.value },
                      })
                    }
                    className="w-full mt-1 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-purple-300 tracking-wider">Artist</label>
                  <input
                    type="text"
                    value={pendingSong.metadata.artist}
                    onChange={(e) =>
                      setPendingSong({
                        ...pendingSong,
                        metadata: { ...pendingSong.metadata, artist: e.target.value },
                      })
                    }
                    className="w-full mt-1 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <FileAudio className="w-4 h-4 text-purple-400" />
                {(pendingSong.file.size / (1024 * 1024)).toFixed(2)} MB
              </span>
              <span>Duration: {formatDuration(pendingSong.metadata.duration)}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setPendingSong(null)}
                className="flex-1 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmUpload}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Add to Universe
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
