'use client';
import { useState, useEffect } from 'react';

export function useFramePreloader(frameCount) {
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = new Array(frameCount);

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Ensure the correct padding (e.g. frame_0001.webp)
      const formattedIndex = String(i).padStart(4, '0');
      img.src = `/sequence/frame_${formattedIndex}.webp`;

      img.onload = () => {
        loadedImages[i - 1] = img;
        loadedCount++;
        setProgress(Math.round((loadedCount / frameCount) * 100));

        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        console.error(`Failed to load frame ${formattedIndex}`);
        loadedCount++; // Increment anyway to not block forever
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
    }
  }, [frameCount]);

  return { images, progress, isLoaded };
}
