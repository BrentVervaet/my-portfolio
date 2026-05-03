'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { memo, useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageCarouselProps {
  images: string[];
  projectTitle?: string;
}

const ProjectImageCarousel = memo(function ProjectImageCarousel({
  images,
  projectTitle = 'Project',
}: ProjectImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 0) {
    return (
      <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
        <Image
          className="object-contain"
          alt={`${projectTitle} placeholder`}
          src="https://placehold.co/1000x1000/transparent/fff?text=Coming+Soon"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-48 w-full sm:h-56 md:h-64 lg:h-72">
                <Image
                  className="object-contain"
                  alt={`${projectTitle} screenshot ${index + 1}`}
                  src={image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute top-1/2 left-1 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-xl transition-all hover:bg-white/20 disabled:opacity-30 sm:left-2 sm:p-2 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-xl transition-all hover:bg-white/20 disabled:opacity-30 sm:right-2 sm:p-2 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </>
      )}

      {/* Dot Navigation */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5 sm:mt-4 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 w-1.5 rounded-full transition-all sm:h-2 sm:w-2 ${
                index === selectedIndex
                  ? 'w-6 bg-orange-500 sm:w-8 dark:bg-blue-500'
                  : 'bg-white/30 hover:bg-white/50 dark:bg-white/20 dark:hover:bg-white/40'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default ProjectImageCarousel;
