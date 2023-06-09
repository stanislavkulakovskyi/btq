import styles from './index.module.scss';
import FormModal from '../../blocks/FormModal';
import { useState } from 'react';


const About = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const handleFormOpen = () => {
    setIsFormOpened(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>belletriq</h2>
        <p className={styles.description}>
          We are the Ukrainian based artistic community which unites likeminded
          people from all over the world. Belletriq produce, release music and
          high-quality sound FX.
        </p>
      </div>

      <button className={styles.btn} onClick={handleFormOpen}>
        contact us
      </button>

      {isFormOpened &&
        <FormModal />
      }

      
    </div>
  );
};

export default About;
