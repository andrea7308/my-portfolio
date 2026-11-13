import { useEffect, useState } from 'react';
import './index.scss';

// Swap these for whatever's actually on your turntable.
const tracks = [
  { title: 'Blue in Green', artist: 'Miles Davis' },
  { title: 'Peace Piece', artist: 'Bill Evans' },
  { title: 'Naima', artist: 'John Coltrane' },
  { title: "'Round Midnight", artist: 'Thelonious Monk' },
  { title: 'Lush Life', artist: 'Johnny Hartman' },
];

const NowPlaying = () => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => setIndex((n) => (n + 1) % tracks.length), 9000);
    return () => clearInterval(id);
  }, [playing]);

  const track = tracks[index];

  return (
    <button
      type="button"
      className={`now-playing ${playing ? 'is-playing' : ''}`}
      onClick={() => setPlaying((p) => !p)}
      aria-label={`${playing ? 'Pause' : 'Play'} record: ${track.title} by ${track.artist}`}
    >
      <span className="vinyl" aria-hidden="true">
        <span className="vinyl__label" />
      </span>
      <span className="now-playing__text">
        <span className="now-playing__status">{playing ? 'Now playing' : 'Paused'}</span>
        <span className="now-playing__track" key={index}>
          {track.title} <em>— {track.artist}</em>
        </span>
      </span>
    </button>
  );
};

export default NowPlaying;
