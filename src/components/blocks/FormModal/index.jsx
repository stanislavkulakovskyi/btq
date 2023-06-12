import React, { useState } from 'react';
import styles from './index.module.scss';
import close from '../../../assets/icons/close.svg';
import arrow from '../../../assets/icons/arrow.svg';

const FormModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    isOpen && (
      <div className={styles.container}>
        <div className={styles.form_backdrop} onClick={handleBackdropClick}>
          <div className={styles.form_box}>
            <form action="" className={styles.form}>
              <p className={styles.description}>
                If you'd like to request some services from our team, or if you have
                any questions, feel free to write us by filling out the form below.
              </p>
              <label htmlFor="mail" className={styles.label}>
                email to write you back:
              </label>
              <input type="email" name="" id="mail" className={styles.email} />
              <label htmlFor="message" className={styles.label}>
                your message:
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className={styles.message}
              ></textarea>
              <button className={styles.btn} type="submit">
                <img className={styles.arrow} src={arrow} alt="arrow" />
                SEND
              </button>
              <button className={styles.close_btn} onClick={handleClose}>
                <img src={close} alt="close" />
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default FormModal;
