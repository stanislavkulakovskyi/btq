import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Background } from './molecules';
import { SideMenu } from '../../shared';
import styles from './index.module.scss';
import TopMenu from '../../shared/TopMenu';
import { useLocation } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../../utils/constants/routes';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const previousPathRef = useRef('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  const currentRoute = PUBLIC_ROUTES.find((route) => route.path === location.pathname);
  const previousRoute = PUBLIC_ROUTES.find((route) => route.path === previousPathRef.current);
  const shouldAnimateUp =
    previousRoute && currentRoute && currentRoute.id < previousRoute.id;
  const isTablet = windowWidth <= 1366;

  const animationProps = {
    className: styles.children,
    key: location.key,
    initial: { y: shouldAnimateUp ? -1000 : 1000, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: shouldAnimateUp ? 1000 : -1000, opacity: 0 },
    transition: { duration: 0.3 },
  };

  if (isTablet) {
    animationProps.initial = { x: shouldAnimateUp ? -1500 : 1500 };
    animationProps.animate = { x: 0 };
    animationProps.exit = { x: shouldAnimateUp ? 1500 : -1500 };
  }

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <SideMenu links={PUBLIC_ROUTES} />

        <TopMenu links={PUBLIC_ROUTES} />

        <AnimatePresence
          layout
          initial={false}
          custom={shouldAnimateUp && location.pathname}
          mode="popLayout"
        >
          <motion.div {...animationProps} layout>
            {children}
          </motion.div>
        </AnimatePresence>
      </section>
      <Background />
    </main>
  );
};

export default MainLayout;
