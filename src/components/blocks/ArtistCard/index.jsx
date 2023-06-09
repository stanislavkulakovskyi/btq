// import styles from './index.module.scss';
// import spotifyIcon from '../../../assets/icons/spotify.svg';
// import soundcloudIcon from '../../../assets/icons/soundcloud.svg';
// import instagramIcon from '../../../assets/icons/instagram.svg';

// import { useState } from 'react';

// export const ArtistCard = ({ name, photo, microPhoto, link, spotify, soundcloud, instagram }) => {
//   return (
//     <div
//       className={styles.card}
//     >
//       <div className={styles.photo_container}>
//         <img src={microPhoto} alt="micro" className={styles.blur} />
//         <img src={photo} alt="artist" className={styles.photo} />
//       </div>
//       <h3 className={styles.name}>{name}</h3>
//       <a
//         className={styles.link}
//         href={link}
//         target="_blank"
//         rel="noreferrer"
//       >
//         <div className={styles.svg_icon}></div>
//       </a>
//       <div className={styles.links_container}>
//         <div className={styles.link_icons}>
//           { spotify ?
//             <a href={spotify} target="_blank" rel="noreferrer">
//               <img
//                 className={styles.link_icon}
//                 src={spotifyIcon}
//                 alt="spotify"
//               />
//             </a>
//             :
//             <span></span>
//           }

//           { soundcloud ?
//             <a href={soundcloud} target="_blank" rel="noreferrer">
//               <img
//                 className={styles.link_icon}
//                 src={soundcloudIcon}
//                 alt="soundcloud"
//               />
//             </a>
//             :
//             <span></span>
//           }

//           <a href={instagram} target="_blank" rel="noreferrer">
//             <img
//               className={styles.link_icon}
//               src={instagramIcon}
//               alt="instagram"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistCard;


// import styles from './index.module.scss';
// import spotifyIcon from '../../../assets/icons/spotify.svg';
// import soundcloudIcon from '../../../assets/icons/soundcloud.svg';
// import instagramIcon from '../../../assets/icons/instagram.svg';

// import { useState } from 'react';

// export const ArtistCard = ({ name, photo, microPhoto, link, spotify, soundcloud, instagram }) => {
//   const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

//   const handlePhotoLoad = () => {
//     setIsPhotoLoaded(true);
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.photo_container}>
//         <img
//           src={!isPhotoLoaded ? microPhoto : photo}
//           alt="artist"
//           className={`${styles.photo} ${isPhotoLoaded ? styles.loaded : ''}`}
//           onLoad={handlePhotoLoad}
//         />
//       </div>
//       <h3 className={styles.name}>{name}</h3>
//       <a className={styles.link} href={link} target="_blank" rel="noreferrer">
//         <div className={styles.svg_icon}></div>
//       </a>
//       <div className={styles.links_container}>
//         <div className={styles.link_icons}>
//           {spotify ? (
//             <a href={spotify} target="_blank" rel="noreferrer">
//               <img
//                 className={styles.link_icon}
//                 src={spotifyIcon}
//                 alt="spotify"
//               />
//             </a>
//           ) : (
//             <span></span>
//           )}

//           {soundcloud ? (
//             <a href={soundcloud} target="_blank" rel="noreferrer">
//               <img
//                 className={styles.link_icon}
//                 src={soundcloudIcon}
//                 alt="soundcloud"
//               />
//             </a>
//           ) : (
//             <span></span>
//           )}

//           <a href={instagram} target="_blank" rel="noreferrer">
//             <img
//               className={styles.link_icon}
//               src={instagramIcon}
//               alt="instagram"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtistCard;



import styles from './index.module.scss';
import spotifyIcon from '../../../assets/icons/spotify.svg';
import soundcloudIcon from '../../../assets/icons/soundcloud.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';

import { useState } from 'react';

export const ArtistCard = ({ name, photo, microPhoto, link, spotify, soundcloud, instagram }) => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  const handlePhotoLoad = () => {
    setIsPhotoLoaded(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.photo_container}>
          <img
            src={isPhotoLoaded ? photo : microPhoto}
            alt="artist"
            className={styles.photo}
            onLoad={handlePhotoLoad}
          />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        <div className={styles.svg_icon}></div>
      </a>
      <div className={styles.links_container}>
        <div className={styles.link_icons}>
          {spotify ? (
            <a href={spotify} target="_blank" rel="noreferrer">
              <img
                className={styles.link_icon}
                src={spotifyIcon}
                alt="spotify"
              />
            </a>
          ) : (
            <span></span>
          )}

          {soundcloud ? (
            <a href={soundcloud} target="_blank" rel="noreferrer">
              <img
                className={styles.link_icon}
                src={soundcloudIcon}
                alt="soundcloud"
              />
            </a>
          ) : (
            <span></span>
          )}

          <a href={instagram} target="_blank" rel="noreferrer">
            <img
              className={styles.link_icon}
              src={instagramIcon}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
