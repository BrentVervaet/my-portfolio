'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProjectImageGalleryProps {
  images: string[];
  projectTitle?: string;
}

export default function ProjectImageGallery({ images, projectTitle = 'Project' }: Readonly<ProjectImageGalleryProps>) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (images.length === 0) {
    return (
      <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5">
        <Image
          className="object-contain"
          alt={`${projectTitle} placeholder`}
          src="https://placehold.co/1000x1000/transparent/fff?text=Coming+Soon"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  // Single image - display it directly
  if (images.length === 1) {
    return (
      <div className="group relative h-64 w-full cursor-pointer overflow-hidden" onClick={() => openLightbox(0)}>
        <Image
          className="project-image object-contain"
          alt={`${projectTitle} screenshot`}
          src={images[0]}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    );
  }

  // Multiple images - show grid with first image prominent
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {/* Main image - spans 4 columns */}
        <div className="group relative col-span-4 h-64 cursor-pointer overflow-hidden" onClick={() => openLightbox(0)}>
          <Image
            className="project-image object-contain"
            alt={`${projectTitle} screenshot 1`}
            src={images[0]}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Thumbnail grid */}
        {images.slice(1, 5).map((image, idx) => (
          <div
            key={idx}
            className="group relative h-20 cursor-pointer overflow-hidden"
            onClick={() => openLightbox(idx + 1)}
          >
            <Image
              className="project-image object-cover"
              alt={`${projectTitle} screenshot ${idx + 2}`}
              src={image}
              fill
              sizes="(max-width: 768px) 25vw, 12vw"
            />
            {/* Show "+X more" overlay on last thumbnail if there are more images */}
            {idx === 3 && images.length > 5 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <span className="font-mono text-lg font-bold text-white">+{images.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-xl transition-all hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={e => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-xl transition-all hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div className="relative h-[80vh] w-[90vw] max-w-6xl" onClick={e => e.stopPropagation()}>
            <Image
              src={images[selectedIndex]}
              alt={`${projectTitle} screenshot ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={e => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-xl transition-all hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-sm text-white backdrop-blur-xl">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
