import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface TMDBImage {
  poster: string;
  backdrop: string;
}

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/original';

export const useTMDBData = (tmdbId?: number, tmdbType?: 'movie' | 'tv') => {
  const [images, setImages] = useState<TMDBImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tmdbId || !tmdbType) {
      return;
    }

    const fetchTMDBData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error: functionError } = await supabase.functions.invoke(
          'fetch-tmdb-data',
          {
            body: { type: tmdbType, id: tmdbId }
          }
        );

        if (functionError) {
          console.error('Error fetching TMDB data:', functionError);
          setError(functionError.message);
          return;
        }

        if (data) {
          setImages({
            poster: data.poster_path 
              ? `${TMDB_IMAGE_BASE}${data.poster_path}` 
              : '',
            backdrop: data.backdrop_path 
              ? `${TMDB_IMAGE_BASE}${data.backdrop_path}` 
              : ''
          });
        }
      } catch (err) {
        console.error('Error in useTMDBData:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchTMDBData();
  }, [tmdbId, tmdbType]);

  return { images, loading, error };
};
