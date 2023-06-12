import styles from './index.module.scss';
import React from 'react';
import ArtistCard from '../../blocks/ArtistCard';
import bgText from '../../../assets/images/bg_illustration.webp';

import cutmylipsPhoto from '../../../assets/images/artists/cutmylips.webp';
import inodiPhoto from '../../../assets/images/artists/inodi.webp';
import coldestPhoto from '../../../assets/images/artists/coldest.webp';
import ayokidPhoto from '../../../assets/images/artists/ayokid.webp';
import palmoxPhoto from '../../../assets/images/artists/palmox.webp';
import pashaOpenPhoto from '../../../assets/images/artists/pashaopen.webp';

import cml_micro from '../../../assets/images/artists/cutmylips_micro.webp';
import ayo_micro from '../../../assets/images/artists/ayokid_micro.webp';
import ino_micro from '../../../assets/images/artists/inodi_micro.webp';
import col_micro from '../../../assets/images/artists/coldest_micro.webp';
import pal_micro from '../../../assets/images/artists/palmox_micro.webp';
import pas_micro from '../../../assets/images/artists/pashaopen_micro.webp';

import artists from '../../../api/artists';

const photos = [
  cutmylipsPhoto,
  inodiPhoto,
  coldestPhoto,
  ayokidPhoto,
  palmoxPhoto,
  pashaOpenPhoto,
];

const microPhotos = [
  cml_micro,
  ino_micro,
  col_micro,
  ayo_micro,
  pal_micro,
  pas_micro,
];

const Artists = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.page}>
          <h2 className={styles.title}>BTQ ARTISTS</h2>
          <div className={styles.list}>
            {artists.map((artist, i) => {
              return (
                <ArtistCard
                  name={artist.name}
                  photo={photos[i]}
                  link={artist.linktree}
                  spotify={artist.spotify}
                  soundcloud={artist.soundcloud}
                  instagram={artist.instagram}
                  microPhoto={microPhotos[i]}
                  key={artist.id}
                />
              );
            })}
          </div>
        </div>

        <img src={bgText} alt="belletriq" className={styles.bgIllustration} />
      </div>
    </>
  );
};

export default Artists;
