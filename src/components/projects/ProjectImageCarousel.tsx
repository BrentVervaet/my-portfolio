'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

interface ProjectImageCarouselProps {
  images: string[];
  projectTitle?: string;
  size?: 'default' | 'large';
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = React.memo(
  ({ images, projectTitle = 'Project', size = 'default' }) => {
    const containerClasses = size === 'large' ? 'h-80 w-full max-w-2xl' : 'h-64 w-full max-w-md';

    return (
      <div className="relative" role="region" aria-label={`${projectTitle} screenshots`}>
        <Carousel className="w-full">
          <CarouselContent>
            {images.length > 0 ? (
              images.map((src, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <div className={`relative overflow-hidden rounded-xl bg-white/5 dark:bg-black/5 ${containerClasses}`}>
                    <Image
                      className="rounded-xl object-contain"
                      alt={`${projectTitle} screenshot ${idx + 1} of ${images.length}`}
                      src={src}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority={idx === 0}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <CarouselItem className="flex justify-center">
                <div className={`relative overflow-hidden rounded-xl bg-white/5 dark:bg-black/5 ${containerClasses}`}>
                  <Image
                    className="rounded-xl object-contain"
                    alt={`${projectTitle} placeholder screenshot`}
                    src="https://placehold.co/1000x1000/transparent/fff?text=Comming+Soon"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-xl hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
                aria-label="Previous image"
              />
              <CarouselNext
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-xl hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
                aria-label="Next image"
              />
            </>
          )}
        </Carousel>
      </div>
    );
  }
);

ProjectImageCarousel.displayName = 'ProjectImageCarousel';

export default ProjectImageCarousel;
