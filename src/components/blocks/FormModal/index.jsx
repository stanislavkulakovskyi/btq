// import React from 'react';
// import styles from './index.module.scss';
// import close from '../../../assets/icons/close.svg';
// import arrow from '../../../assets/icons/arrow.svg';

// const FormModal = ({ onClose }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <div className={styles.container}>
//       <div>
//         <div className={styles.form_box}>
//           <div className={styles.form_backdrop} onClick={onClose}></div>
//           <form
//             action=""
//             method="post"
//             className={styles.form}
//             onSubmit={handleSubmit}
//           >
//             <p className={styles.description}>
//               If you'd like to request some services from our team, or if you
//               have any questions, feel free to write us by filling out the form
//               below.
//             </p>
//             <label htmlFor="mail" className={styles.label}>
//               email to write you back:
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="mail"
//               className={styles.email}
//             />
//             <label htmlFor="message" className={styles.label}>
//               your message:
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               cols="30"
//               rows="10"
//               className={styles.message}
//             ></textarea>
//             <button className={styles.btn} type="submit">
//               <img className={styles.arrow} src={arrow} alt="arrow" />
//               SEND
//             </button>
//             <button className={styles.close_btn} onClick={onClose}>
//               <img src={close} alt="close" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormModal;

// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';

// import styles from './index.module.scss';
// import close from '../../../assets/icons/close.svg';
// import arrow from '../../../assets/icons/arrow.svg';

// const FormModal = ({ onClose }) => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const form = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_eje8f6a', 'template_epc5myn', form.current, 'igUREw9V0b_JLHZgH')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div className={styles.container}>
//       <div>
//         <div className={styles.form_box}>
//           <div className={styles.form_backdrop} onClick={onClose}></div>
//           <form className={styles.form} onSubmit={handleSubmit} ref={form}>
//             <p className={styles.description}>
//               If you'd like to request some services from our team, or if you
//               have any questions, feel free to write us by filling out the form
//               below.
//             </p>
//             <label htmlFor="mail" className={styles.label}>
//               email to write you back:
//             </label>
//             <input
//               type="email"
//               name="from_email"
//               id="mail"
//               className={styles.email}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label htmlFor="message" className={styles.label}>
//               your message:
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               cols="30"
//               rows="10"
//               className={styles.message}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//             <button className={styles.btn} type="submit">
//               <img className={styles.arrow} src={arrow} alt="arrow" />
//               SEND
//             </button>
//             <button className={styles.close_btn} onClick={onClose}>
//               <img src={close} alt="close" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormModal;

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

import styles from './index.module.scss';
import close from '../../../assets/icons/close.svg';
import arrow from '../../../assets/icons/arrow.svg';

const FormModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSucces, setIsSuccess] = useState(false);
  const form = useRef();

  const validateEmail = () => {
    if (!email) {
      setEmailError('email is required');
      return false;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setEmailError('please enter a valid email address');
      return false;
    }

    setEmailError('');
    return true;
  };

  const validateMessage = () => {
    if (!message) {
      setMessageError(`message can't be empty`);
      return false;
    }

    setMessageError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail() || !validateMessage()) {
      return;
    }

    setIsSuccess(true);
    setEmail('');
    setMessage('');

    setTimeout(() => {
      onClose();
    }, 3000)

    // try {
    //   await emailjs.sendForm('service_eje8f6a', 'template_epc5myn', form.current, 'igUREw9V0b_JLHZgH');

    //   // Лист успішно надісланий
    //   // Виконайте необхідні дії, наприклад, відобразіть повідомлення про успіх
    // } catch (error) {

    //   // Виникла помилка при надсиланні листа
    //   // Виконайте необхідні дії, наприклад, відобразіть повідомлення про помилку
    // }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.form_box}>
          <div className={styles.form_backdrop} onClick={onClose}></div>
          <form className={styles.form} onSubmit={handleSubmit} ref={form}>
            <p className={styles.description}>
              If you'd like to request some services from our team, or if you
              have any questions, feel free to write us by filling out the form
              below.
            </p>
            <label
              htmlFor="mail"
              className={`${styles.label} ${emailError && styles.error_label}`}
            >
              {!emailError ? 'email to write you back:' : emailError}
            </label>
            <input
              type="email"
              name="from_email"
              id="mail"
              className={`${styles.email} ${emailError && styles.error_input}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="message"
              className={`${styles.label} ${
                messageError && styles.error_label
              }`}
            >
              {!messageError ? 'your message:' : messageError}
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className={`${styles.message} ${
                messageError && styles.error_input
              }`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className={styles.btn} type="submit">
              <img className={styles.arrow} src={arrow} alt="arrow" />
              SEND
            </button>
            <button className={styles.close_btn} onClick={onClose}>
              <img src={close} alt="close" />
            </button>
          </form>

          {isSucces && (
            <div className={styles.success_message}>
              <p>thanks for your message! we'll get back to you as soon as possible!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
