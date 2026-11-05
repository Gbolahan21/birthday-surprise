import { X, Heart, Sparkles } from 'lucide-react';

function BirthdayLetter({ friendName, onClose }) {
  return (
    <div className="letter-overlay" onClick={onClose}>
      <div
        className="letter-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="close-letter"
          onClick={onClose}
          aria-label="Close birthday letter"
        >
          <X size={22} />
        </button>

        <div className="letter-top-icon">
          <span>💌</span>
        </div>

        <p className="letter-eyebrow">
          A LITTLE MESSAGE FOR YOU
        </p>

        <h2>Dear {friendName},</h2>

        <div className="letter-divider">
          <span>✦</span>
          <Heart size={15} fill="currentColor" />
          <span>✦</span>
        </div>

        <div className="letter-message">
          <p>
            Happy Birthday to one of the most amazing people
            in my life!
          </p>

          <p>
            I just want you to know how much your friendship
            means to me. Thank you for the laughs, the memories,
            the random conversations, and all the moments that
            have made our friendship special.
          </p>

          <p>
            As you celebrate another year, I pray that life
            brings you endless happiness, good health, success,
            peace, and opportunities to achieve everything
            you dream of.
          </p>

          <p>
            Keep being the incredible person you are.
            Never stop smiling, growing, and chasing your dreams.
            You deserve nothing but the best.
          </p>

          <p className="letter-highlight">
            Here's to more memories, more laughter, and many
            more years of friendship!
          </p>
        </div>

        <div className="letter-signature">
          <span>With lots of love,</span>
          <strong>Your Best Friend ❤️</strong>
        </div>

        <div className="letter-bottom">
          <Sparkles size={16} />
          <span>Have the best birthday ever!</span>
          <Sparkles size={16} />
        </div>
      </div>
    </div>
  );
}

export default BirthdayLetter;