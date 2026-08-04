export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: number; // in seconds
  fileBlob?: Blob;
  audioUrl: string;
  coverUrl?: string;
  gradientTheme: string;
  uploadedAt: string;
  userId: string;
  sizeBytes: number;
  format: string;
  isOfflineAvailable?: boolean;
}

export interface World {
  id: string;
  name: string;
  description?: string;
  coverImage?: string;
  gradientTheme: string; // e.g. "from-purple-600 via-pink-500 to-amber-500"
  planetIcon: string; // planet style index/name
  createdAt: string;
  userId: string;
  songIds: string[];
  isPublic?: boolean;
  shareCode?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
  isGuest?: boolean;
}

export type RepeatMode = 'off' | 'one' | 'all';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
}
