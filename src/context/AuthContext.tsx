'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '@/types';
import { getUserProfile, saveUserProfile, clearUserProfile } from '@/lib/db';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  login: (email: string, name?: string) => Promise<void>;
  signup: (email: string, name: string) => Promise<void>;
  loginAsGuest: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const GUEST_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const savedUser = await getUserProfile();
        if (savedUser) {
          setUser(savedUser);
        } else {
          // Auto create default guest session if none exists
          const defaultGuest: UserProfile = {
            id: 'user_star_explorer',
            email: 'explorer@songworld.io',
            name: 'Star Explorer',
            avatarUrl: GUEST_AVATARS[0],
            isGuest: true,
          };
          await saveUserProfile(defaultGuest);
          setUser(defaultGuest);
        }
      } catch (err) {
        console.error('Failed to load user profile', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  const login = async (email: string, name?: string) => {
    const userId = `user_${email.replace(/[^a-zA-Z0-9]/g, '_')}`;
    const newUser: UserProfile = {
      id: userId,
      email,
      name: name || email.split('@')[0] || 'Cosmic Traveler',
      avatarUrl: GUEST_AVATARS[Math.floor(Math.random() * GUEST_AVATARS.length)],
      isGuest: false,
    };
    await saveUserProfile(newUser);
    setUser(newUser);
  };

  const signup = async (email: string, name: string) => {
    await login(email, name);
  };

  const loginAsGuest = async () => {
    const guestUser: UserProfile = {
      id: `guest_${Date.now()}`,
      email: 'guest@songworld.io',
      name: 'Guest Voyager',
      avatarUrl: GUEST_AVATARS[1],
      isGuest: true,
    };
    await saveUserProfile(guestUser);
    setUser(guestUser);
  };

  const logout = async () => {
    await clearUserProfile();
    setUser(null);
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    await saveUserProfile(updated);
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, loginAsGuest, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
