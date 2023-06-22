import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import 'swiper/scss';

import styles from './index.module.scss';
import '../../../styles/extends.scss';
import playButton from '../../../assets/icons/play.svg';
import arrow from '../../../assets/icons/arrow-right.svg';

import thumbs from '../../../api/thumbnails';

SwiperCore.use([Autoplay, Navigation]);

const Slider = ({ openModal }) => {
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const isTablet = useMemo(() => windowWidth <= 1366, [windowWidth]);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    swiper.autoplay.start();
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div className={styles.slider_container}>
      <Swiper
        ref={swiperRef}
        slidesPerView={isTablet ? 1 : 1.3}
        centeredSlides={false}
        spaceBetween={100}
        navigation={{
          prevEl: `.${styles.btn_prev}`,
          nextEl: `.${styles.btn_next}`,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className={styles.swiper}
        loop={true}
      >
        {thumbs.map((slide) => (
          <SwiperSlide
            className={styles.swiperslide}
            key={slide.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={slide.image}
              alt="slide"
              className={styles.slide}
            />

            <p className={styles.roles}>[ {slide.roles} ]</p>

            {(isHovered || isTablet) && (
              <button
                className={styles.playButton}
                onClick={() => openModal(slide.videoUrl)}
              >
                <img src={playButton} alt="play" />
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <button className={styles.btn_prev}>
        <img src={arrow} alt="previous" className={styles.prev_button} />
      </button>

      <button className={styles.btn_next}>
        <img src={arrow} alt="next" className={styles.next_button} />
      </button>
    </div>
  );
};

export default Slider;
