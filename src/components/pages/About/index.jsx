import styles from './index.module.scss';

const About = () => {


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
    </div>
  );
};

export default About;
