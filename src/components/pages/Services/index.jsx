import styles from './index.module.scss';
import Slider from '../../blocks/Slider';
import VideoModal from '../../blocks/VideoModal';
import FormModal from '../../blocks/FormModal';
import { useState, useEffect } from 'react';

const servicesList = [
  'SOUND DESIGN',
  ' / ',
  'MUSIC PRODUCTION',
  ' / ',
  'SCORING',
  ' / ',
  'MIXING',
  ' / ',
  'MASTERING',
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [visibleServices, setVisibleServices] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFormOpened, setIsFormOpened] = useState(false);
  const handleFormOpen = () => {
    setIsFormOpened(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleServices.length < servicesList.length) {
        setVisibleServices((prevServices) => [
          ...prevServices,
          servicesList[prevServices.length],
        ]);
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [visibleServices.length]);

  const openModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl(null);
  };

  const isTablet = windowWidth <= 1366;
  const isMobile = windowWidth <= 600;

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <h2 className={styles.title}>SERVICES</h2>

        <p className={styles.services_list}>
          {visibleServices.map((service, index) => (
            <span key={index} className={styles.service_item}>
              {service}
            </span>
          ))}
        </p>

        <div className={styles.slider_container}>
          <div
            className={styles.slider_box}
            style={{ clipPath: !isMobile ? 'url(#mask)' : null }}
          >
            <Slider openModal={openModal} />
            <svg height="0">
              <clipPath
                id="mask"
                clipPathUnits="objectBoundingBox"
                transform={`scale(${isTablet ? '0.0009' : '0.00074'}, 0.0023)`}
                height="0"
              >
                <path
                  d="M0 399.954V0.0461477C142.933 17.3433 345.358 28.1355 569.809 28.1355C794.461 28.1355 997.046 17.3241 1140 0V400C997.046 382.676 794.461 371.865 569.809 371.865C345.358 371.865 142.933 382.657 0 399.954Z"
                  fill="black"
                  fillOpacity="0.2"
                  height="0"
                />
              </clipPath>
            </svg>
          </div>

          <div className={styles.description_box}>
            <p className={styles.description}>
              Belletriq create and deliver top-notch audio solutions for mixing,
              mastering and production stages.
              <br />
              <br />
              We provide services of sound identity, SFX, scoring, licensing &
              sync.
            </p>

            <button className={styles.link} onClick={handleFormOpen}>
              <div className={styles.svg_icon}></div>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <VideoModal url={selectedVideoUrl} closeModal={closeModal} />
      )}

      {isFormOpened && <FormModal />}
    </div>
  );
};

export default Services;
