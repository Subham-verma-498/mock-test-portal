import { getRandomGradient } from './db';

export interface ExtractedMetadata {
  title: string;
  artist: string;
  album?: string;
  duration: number;
  coverUrl?: string;
  gradientTheme: string;
}

/**
 * Clean up raw filenames like "01 - Artist - Song Title (Official Audio).mp3"
 */
export function parseFilename(filename: string): { title: string; artist: string } {
  // Strip file extension
  let cleanName = filename.replace(/\.[^/.]+$/, '');
  
  // Replace underscores with spaces
  cleanName = cleanName.replace(/_/g, ' ');

  // Split by common delimiters like "-" or "—"
  const parts = cleanName.split(/\s*[-—]\s*/);

  if (parts.length >= 2) {
    if (/^\d+$/.test(parts[0].trim())) {
      return {
        artist: parts[1].trim(),
        title: parts.slice(2).join(' - ').trim() || parts[1].trim(),
      };
    }
    return {
      artist: parts[0].trim(),
      title: parts.slice(1).join(' - ').trim(),
    };
  }

  return {
    title: cleanName.trim(),
    artist: 'Unknown Artist',
  };
}

/**
 * Extracts audio duration using HTML5 Audio element
 */
export function getAudioDuration(file: File): Promise<number> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(0);
      return;
    }
    const audio = new Audio();
    const url = URL.createObjectURL(file);
    audio.src = url;

    audio.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(Math.round(audio.duration) || 0);
    };

    audio.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(0);
    };
  });
}

/**
 * Parse ID3/MP3 tags from Audio File safely on client side
 */
export async function extractMetadata(file: File): Promise<ExtractedMetadata> {
  const { title: fallbackTitle, artist: fallbackArtist } = parseFilename(file.name);
  const duration = await getAudioDuration(file);
  const gradientTheme = getRandomGradient();

  if (typeof window === 'undefined') {
    return {
      title: fallbackTitle,
      artist: fallbackArtist,
      duration,
      gradientTheme,
    };
  }

  try {
    // Dynamic import to prevent SSR Turbopack issues with react-native-fs
    const jsmediatagsModule = await import('jsmediatags');
    const jsmediatags = jsmediatagsModule.default || jsmediatagsModule;

    return new Promise((resolve) => {
      jsmediatags.read(file, {
        onSuccess: (tag: any) => {
          const tags = tag.tags;
          let coverUrl: string | undefined = undefined;

          if (tags.picture) {
            const { data, format } = tags.picture;
            let base64String = '';
            for (let i = 0; i < data.length; i++) {
              base64String += String.fromCharCode(data[i]);
            }
            coverUrl = `data:${format};base64,${btoa(base64String)}`;
          }

          resolve({
            title: tags.title?.trim() || fallbackTitle,
            artist: tags.artist?.trim() || fallbackArtist,
            album: tags.album?.trim(),
            duration,
            coverUrl,
            gradientTheme,
          });
        },
        onError: () => {
          resolve({
            title: fallbackTitle,
            artist: fallbackArtist,
            duration,
            gradientTheme,
          });
        },
      });
    });
  } catch (err) {
    return {
      title: fallbackTitle,
      artist: fallbackArtist,
      duration,
      gradientTheme,
    };
  }
}

/**
 * Formats duration in seconds to M:SS (e.g. 214 => "3:34")
 */
export function formatDuration(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
