import { useTMDBData } from "@/hooks/useTMDBData";

interface TMDBImageProps {
  tmdbId?: number;
  tmdbType?: 'movie' | 'tv';
  fallbackImage: string;
  alt: string;
  className?: string;
  type?: 'poster' | 'backdrop';
}

export const TMDBImage = ({ 
  tmdbId, 
  tmdbType, 
  fallbackImage, 
  alt, 
  className,
  type = 'poster'
}: TMDBImageProps) => {
  const { images, loading } = useTMDBData(tmdbId, tmdbType);
  
  const imageSrc = images 
    ? (type === 'poster' ? images.poster : images.backdrop) || fallbackImage
    : fallbackImage;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={loading ? { opacity: 0.7 } : undefined}
    />
  );
};
