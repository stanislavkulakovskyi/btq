import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Background } from './molecules';
import { SideMenu } from '../../shared';
import styles from './index.module.scss';
import TopMenu from '../../shared/TopMenu';
import { useLocation } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../../utils/constants/routes';

const MainLayout = ({ children }) => {
  const location = useLocation();

  const animationProps = {
    className: styles.children,
    key: location.key,
    initial: { opacity: 0, filter: 'blur(50px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(50px)' },
    transition: { duration: 0.5 },
  };

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <SideMenu links={PUBLIC_ROUTES} />

        <TopMenu links={PUBLIC_ROUTES} />

        <AnimatePresence
          layout
          initial={false}
          custom={location.pathname}
          mode="popLayout"
        >
          <motion.div {...animationProps} layout>
            {children}
          </motion.div>
        </AnimatePresence>
      </section>
      <Background />

      <div className={styles.line1}></div>
      <div className={styles.line2}></div>
    </main>
  );
};

export default MainLayout;
