import styles from './index.module.scss';
import Slider from '../../blocks/Slider';
import VideoModal from '../../blocks/VideoModal';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesList = ['SOUND DESIGN', ' / ', 'MUSIC PRODUCTION', ' / ', 'SCORING', ' / ', 'MIXING', ' / ', 'MASTERING'];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleServices.length < servicesList.length) {
        setVisibleServices((prevServices) => [...prevServices, servicesList[prevServices.length]]);
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

  return (
    <motion.div className={styles.container}>
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
          <Slider openModal={openModal} />

          <div className={styles.description_box}>
            <p className={styles.description}>
              Belletriq create and deliver top-notch audio solutions for mixing, mastering and production stages. We provide services of sound identity, SFX, scoring, licensing & sync.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && 
        <AnimatePresence
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <VideoModal url={selectedVideoUrl} closeModal={closeModal} />
        </AnimatePresence>
      }
    </motion.div>
  );
};

export default Services;
