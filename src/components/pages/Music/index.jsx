import styles from './index.module.scss';
import playerAnimation from '../../../assets/images/Player vidget.gif';
import spotifyIcon from '../../../assets/icons/spotify.svg';

const Music = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>DISCOGRAPHY</h2>

        <div className={styles.animation_container}>
          <img
            src={playerAnimation}
            alt="player animation"
            className={styles.animation}
          />
          <a
            className={styles.spotify}
            href="https://open.spotify.com/playlist/2HpG3oafC84QrGQ01O47Aq?si=27bcce1af720482d"
            target="_blank"
            rel="noreferrer"
          >
            <img src={spotifyIcon} alt="spotify" />
          </a>
        </div>
        <iframe
          className={styles.player}
          width="100%"
          height="450"
          frameborder="no"
          title="soundcloud player"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1461259138&color=%23f0612c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
        ></iframe>
        <div
          style={{
            fontSize: '12px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily:
              'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
            fontWeight: 700,
          }}
        >
          <a
            href="https://soundcloud.com/belletriq"
            title="belletriq"
            target="_blank"
            style={{ color: '#16171a', textDecoration: 'none' }}
            rel="noreferrer"
          >
            belletriq
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/belletriq/sets/belletriq-releases"
            title="belletriq releases"
            target="_blank"
            style={{ color: '#16171a', textDecoration: 'none' }}
            rel="noreferrer"
          >
            belletriq releases
          </a>
        </div>
      </div>

      <div className={styles.line}></div>
    </div>
  );
};

export default Music;
