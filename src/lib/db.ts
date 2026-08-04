import { get, set, del, keys } from 'idb-keyval';
import { Song, World, UserProfile } from '@/types';

const SONGS_KEY_PREFIX = 'song_world_song_';
const WORLDS_KEY_PREFIX = 'song_world_world_';
const USER_KEY = 'song_world_user_profile';

// Preset planet gradient themes
export const PLANET_GRADIENTS = [
  { name: 'Nebula Purple', gradient: 'from-purple-600 via-indigo-600 to-pink-500', glow: 'rgba(168, 85, 247, 0.4)' },
  { name: 'Cosmic Cyan', gradient: 'from-cyan-500 via-teal-500 to-blue-600', glow: 'rgba(6, 182, 212, 0.4)' },
  { name: 'Solar Flare', gradient: 'from-amber-500 via-orange-500 to-rose-600', glow: 'rgba(245, 158, 11, 0.4)' },
  { name: 'Emerald Galaxy', gradient: 'from-emerald-500 via-teal-600 to-cyan-700', glow: 'rgba(16, 185, 129, 0.4)' },
  { name: 'Starlight Magenta', gradient: 'from-fuchsia-600 via-purple-600 to-violet-700', glow: 'rgba(217, 70, 239, 0.4)' },
  { name: 'Supernova Gold', gradient: 'from-yellow-400 via-amber-500 to-red-600', glow: 'rgba(234, 179, 8, 0.4)' },
];

export const getRandomGradient = () => {
  const index = Math.floor(Math.random() * PLANET_GRADIENTS.length);
  return PLANET_GRADIENTS[index].gradient;
};

// Storage operations
export async function saveSongToDB(song: Song): Promise<void> {
  await set(`${SONGS_KEY_PREFIX}${song.id}`, song);
}

export async function getSongFromDB(id: string): Promise<Song | undefined> {
  return await get<Song>(`${SONGS_KEY_PREFIX}${id}`);
}

export async function getAllSongsFromDB(userId?: string): Promise<Song[]> {
  const allKeys = await keys();
  const songKeys = allKeys.filter((k) => typeof k === 'string' && k.startsWith(SONGS_KEY_PREFIX));
  const songs: Song[] = [];

  for (const k of songKeys) {
    const song = await get<Song>(k);
    if (song) {
      // Re-create object URL if fileBlob is stored
      if (song.fileBlob && (!song.audioUrl || song.audioUrl.startsWith('blob:'))) {
        song.audioUrl = URL.createObjectURL(song.fileBlob);
      }
      if (!userId || song.userId === userId || song.userId === 'guest') {
        songs.push(song);
      }
    }
  }

  return songs.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());
}

export async function deleteSongFromDB(id: string): Promise<void> {
  await del(`${SONGS_KEY_PREFIX}${id}`);
  
  // Remove song from all worlds
  const worlds = await getAllWorldsFromDB();
  for (const world of worlds) {
    if (world.songIds.includes(id)) {
      world.songIds = world.songIds.filter((sId) => sId !== id);
      await saveWorldToDB(world);
    }
  }
}

export async function saveWorldToDB(world: World): Promise<void> {
  await set(`${WORLDS_KEY_PREFIX}${world.id}`, world);
}

export async function getAllWorldsFromDB(userId?: string): Promise<World[]> {
  const allKeys = await keys();
  const worldKeys = allKeys.filter((k) => typeof k === 'string' && k.startsWith(WORLDS_KEY_PREFIX));
  const worlds: World[] = [];

  for (const k of worldKeys) {
    const world = await get<World>(k);
    if (world) {
      if (!userId || world.userId === userId || world.userId === 'guest') {
        worlds.push(world);
      }
    }
  }

  return worlds.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getWorldFromDB(id: string): Promise<World | undefined> {
  return await get<World>(`${WORLDS_KEY_PREFIX}${id}`);
}

export async function deleteWorldFromDB(id: string): Promise<void> {
  await del(`${WORLDS_KEY_PREFIX}${id}`);
}

export async function saveUserProfile(user: UserProfile): Promise<void> {
  await set(USER_KEY, user);
}

export async function getUserProfile(): Promise<UserProfile | undefined> {
  return await get<UserProfile>(USER_KEY);
}

export async function clearUserProfile(): Promise<void> {
  await del(USER_KEY);
}
