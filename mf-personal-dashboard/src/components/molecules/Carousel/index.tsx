import React, {ReactNode, useState} from 'react';

import styles from './index.module.css';
interface CarouselProps {
  items: ReactNode[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(
      (prevState) =>
        prevState === items.length - 1 ? 0 : prevState + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevState) =>
        prevState === 0 ? items.length - 1 : prevState - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}>
        &lt;
      </button>
      <div className={styles.carouselItem}>
        {items[activeIndex]}
      </div>
      <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.carouselButtonNext}`}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
