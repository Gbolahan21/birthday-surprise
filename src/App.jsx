
import { useState } from 'react';
import {
  Heart,
  Sparkles,
  ArrowRight,
  Gift,
} from 'lucide-react';

import BirthdayHero from './components/BirthdayHero';
import BirthdayLetter from './components/BirthdayLetter';
import Confetti from './components/Confetti';

import './App.css';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [friendName, setFriendName] = useState('');
  const [showBirthday, setShowBirthday] = useState(false);

  const [showLetter, setShowLetter] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNameSubmit = (event) => {
    event.preventDefault();

    const enteredName = nameInput.trim();

    if (!enteredName) return;

    setFriendName(enteredName);
    setShowBirthday(true);
  };

  const openBirthdaySurprise = () => {
    setShowLetter(true);
    setShowConfetti(true);

    window.setTimeout(() => {
      setShowConfetti(false);
    }, 7000);
  };

  return (
    <main className="app">
      <div className="background-decoration background-circle-one" />
      <div className="background-decoration background-circle-two" />

      {!showBirthday ? (
        <section className="welcome-screen">
          <div className="welcome-card">
            <div className="welcome-decoration welcome-decoration-one">
              ✦
            </div>

            <div className="welcome-decoration welcome-decoration-two">
              ♡
            </div>

            <div className="welcome-icon">
              <Gift size={35} />
            </div>

            <div className="welcome-label">
              <Sparkles size={14} />
              A LITTLE BIRTHDAY SURPRISE
              <Sparkles size={14} />
            </div>

            <h1>
              Before we begin...
              <span>Who are we celebrating?</span>
            </h1>

            <p className="welcome-description">
              Someone special has a birthday surprise waiting.
            </p>

            <form onSubmit={handleNameSubmit} className="name-form">
              <label htmlFor="friend-name">
                Enter your name
              </label>

              <input
                id="friend-name"
                type="text"
                placeholder="What's your name?"
                value={nameInput}
                onChange={(event) => setNameInput(event.target.value)}
                maxLength={40}
                autoComplete="given-name"
                autoFocus
                required
              />

              <button type="submit" className="continue-button">
                Continue
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="welcome-footer">
              <Heart size={14} fill="currentColor" />
              Made with love, just for you
              <Heart size={14} fill="currentColor" />
            </div>
          </div>
        </section>
      ) : (
        <>
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
          />

          <section className="birthday-message-section">
            <div className="section-icon">
              <Sparkles size={22} />
            </div>

            <p className="section-label">
              A CELEBRATION OF YOU
            </p>

            <h2>
              Another year, another reason to smile, {friendName}.
            </h2>

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
              Made with <Heart size={13} fill="currentColor" /> for{' '}
              {friendName}
            </p>
            <span>Happy Birthday! 🎂</span>
          </footer>
        </>
      )}

      {showConfetti && <Confetti />}

      {showLetter && (
        <BirthdayLetter
          friendName={friendName}
          onClose={() => setShowLetter(false)}
        />
      )}
    </main>
  );
}

export default App;
