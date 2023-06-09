import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { useRef, useEffect, useState } from 'react';
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isTablet = windowWidth <= 1366;

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    swiper.autoplay.start();
  }, []);

  return (
    <div className={styles.slider_container}>
      <Swiper
        ref={swiperRef}
        slidesPerView={isTablet ? 1 : 1.3}
        centeredSlides={false}
        spaceBetween={50}
        navigation={{
          prevEl: `.${styles.btn_prev}`,
          nextEl: `.${styles.btn_next}`,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className={styles.swiper}
        loop={true}
      >
        {thumbs.map((slide) => (
          <SwiperSlide
            className={styles.swiperslide}
            key={slide.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isImageLoaded && <div className={styles.blur}>
            </div>}
            <img
              src={isImageLoaded ? slide.image : slide.microImage}
              alt="slide"
              className={styles.slide}
              onLoad={() => setIsImageLoaded(true)}
            />

            

            {isHovered && (
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
