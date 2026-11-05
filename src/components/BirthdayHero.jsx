import { Gift, Heart, Sparkles } from 'lucide-react';

function BirthdayHero({ friendName, onOpenLetter, isPlaying, onToggleMusic }) {
  return (
    <section className="birthday-hero">
      <div className="hero-decoration decoration-one">✦</div>
      <div className="hero-decoration decoration-two">♡</div>
      <div className="hero-decoration decoration-three">✧</div>

      <div className="hero-content">
        <div className="top-label">
          <Sparkles size={15} />
          <span>A SPECIAL DAY FOR SOMEONE SPECIAL</span>
          <Sparkles size={15} />
        </div>

        <p className="hero-intro">To my amazing best friend,</p>

        <h1>
          Happy Birthday,
          <span>{friendName}!</span>
        </h1>

        <p className="hero-description">
          Today is all about celebrating you, your kindness,
          your laughter, and the wonderful person you are.
          You deserve all the happiness in the world.
        </p>

        <div className="hero-buttons">
          <button className="surprise-button" onClick={onOpenLetter}>
            <Gift size={19} />
            Open Your Surprise
          </button>

          <button
            className={`music-button ${isPlaying ? 'playing' : ''}`}
            onClick={onToggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
          >
            <span className="music-icon">♫</span>
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </button>
        </div>

        <div className="hero-footer">
          <Heart size={15} fill="currentColor" />
          <span>Made with love, just for you</span>
          <Heart size={15} fill="currentColor" />
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <div className="photo-glow"></div>

        <div className="photo-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/friend.jpg`}
            alt={`A special photo of ${friendName}`}
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />

          <div className="photo-placeholder">
            <span>🎂</span>
            <p>Your favourite photo goes here</p>
          </div>
        </div>

        <div className="photo-caption">
          <span>✦</span>
          A friend like no other
          <span>✦</span>
        </div>

        <div className="floating-heart heart-one">♥</div>
        <div className="floating-heart heart-two">♡</div>
        <div className="floating-star star-one">✦</div>
        <div className="floating-star star-two">✧</div>
      </div>
    </section>
  );
}

export default BirthdayHero;