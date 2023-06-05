import styles from './index.module.scss';
import React from 'react';
import ArtistCard from '../../blocks/ArtistCard';

import cutmylipsPhoto from '../../../assets/images/artists/cutmylips.webp';
import inodiPhoto from '../../../assets/images/artists/inodi.webp';
import coldestPhoto from '../../../assets/images/artists/coldest.webp';
import ayokidPhoto from '../../../assets/images/artists/ayokid.webp';
import palmoxPhoto from '../../../assets/images/artists/palmox.webp';
import pashaOpenPhoto from '../../../assets/images/artists/pashaopen.webp';

import artists from '../../../api/artists';

const photos = [
  cutmylipsPhoto, inodiPhoto, coldestPhoto, ayokidPhoto, palmoxPhoto, pashaOpenPhoto,
]

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
                  key={artist.id}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
