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
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
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
      {/* <Background /> */}
    </main>
  );
};

export default MainLayout;
