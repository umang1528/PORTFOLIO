import React, { useState, useCallback, useEffect } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemClassName?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}

const Carousel = <T,>({ items, renderItem, itemClassName = '', autoplay = true, autoplayInterval = 5000 }: CarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoplay || items.length <= 1) return;
    const intervalId = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(intervalId);
  }, [goToNext, autoplay, autoplayInterval, items.length]);
  
  if (!items || items.length === 0) {
    return <div className="text-center py-10 text-brand-foreground-muted">No items to display.</div>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className={`min-w-full ${itemClassName}`}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            data-cursor-interactive="true"
            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-brand-card/50 hover:bg-brand-primary text-brand-button-text p-2 rounded-full shadow-md transition-all duration-200 focus:outline-none z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            data-cursor-interactive="true"
            className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-brand-card/50 hover:bg-brand-primary text-brand-button-text p-2 rounded-full shadow-md transition-all duration-200 focus:outline-none z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {items.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                data-cursor-interactive="true"
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200
                            ${currentIndex === slideIndex ? 'bg-brand-primary scale-125' : 'bg-brand-foreground-muted/50 hover:bg-brand-primary/70'}`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;