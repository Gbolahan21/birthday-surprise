import { useRef, useState } from 'react';
import { Heart, Music2, Sparkles } from 'lucide-react';

import BirthdayHero from './components/BirthdayHero';
import BirthdayLetter from './components/BirthdayLetter';
import Confetti from './components/Confetti';

import './App.css';

function App() {
  // CUSTOMIZE YOUR FRIEND'S NAME HERE
  const friendName = 'Your Bestie';

  const [showLetter, setShowLetter] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const openBirthdaySurprise = () => {
    setShowLetter(true);
    setShowConfetti(true);

    window.setTimeout(() => {
      setShowConfetti(false);
    }, 7000);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Unable to play birthday music:', error);
      setIsPlaying(false);
    }
  };

  return (
    <main className="app">
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/birthday-song.mp3`}
        loop
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div className="background-decoration background-circle-one"></div>
      <div className="background-decoration background-circle-two"></div>

      <header className="site-header">
        <a href="#" className="brand">
          <Heart size={19} fill="currentColor" />
          <span>Birthday Wishes</span>
        </a>

        <span className="header-date">
          A day made extra special ✨
        </span>
      </header>

      <BirthdayHero
        friendName={friendName}
        onOpenLetter={openBirthdaySurprise}
        isPlaying={isPlaying}
        onToggleMusic={toggleMusic}
      />

      <section className="birthday-message-section">
        <div className="section-icon">
          <Sparkles size={22} />
        </div>

        <p className="section-label">A CELEBRATION OF YOU</p>

        <h2>Another year, another reason to smile.</h2>

        <p className="section-description">
          May this new chapter be filled with beautiful moments,
          unforgettable adventures, great achievements, and
          everything your heart wishes for.
        </p>

        <div className="birthday-wishes">
          <div className="wish-item">
            <span>🎁</span>
            <strong>Endless Blessings</strong>
            <p>May good things find their way to you.</p>
          </div>

          <div className="wish-item">
            <span>🌟</span>
            <strong>Big Dreams</strong>
            <p>May you achieve everything you work for.</p>
          </div>

          <div className="wish-item">
            <span>❤️</span>
            <strong>True Happiness</strong>
            <p>May your days always be full of joy.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>
          Made with <Heart size={13} fill="currentColor" /> for
          {' '}{friendName}
        </p>
        <span>Happy Birthday! 🎂</span>
      </footer>

      {showConfetti && <Confetti />}

      {showLetter && (
        <BirthdayLetter
          friendName={friendName}
          onClose={() => setShowLetter(false)}
        />
      )}

      <div className="music-status" aria-live="polite">
        <Music2 size={14} />
        <span>{isPlaying ? 'Music is playing' : 'Your special day'}</span>
      </div>
    </main>
  );
}

export default App;