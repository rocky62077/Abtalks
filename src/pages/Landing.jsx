import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <Link to="/" className="landing-logo">
          AB<span>Talks</span>
        </Link>

        <Link to="/dashboard" className="header-link">
          Dashboard
        </Link>
      </header>

      {/* Hero */}
      <section className="landing-hero">
        <p className="landing-eyebrow">THE 60-DAY BUILDING CHALLENGE</p>

        <h1>
          Build every day.
          <br />
          <span>Become visible.</span>
        </h1>

        <p className="landing-description">
          A 60-day coding challenge for students who want to stop just learning
          and start building in public.
        </p>

        <Link to="/dashboard" className="landing-button">
          Start Day 1 →
        </Link>
      </section>

      {/* Stats */}
      <section className="landing-stats">
        <div className="landing-stat">
          <strong>60</strong>
          <span>days</span>
        </div>

        <div className="landing-stat">
          <strong>1</strong>
          <span>build every day</span>
        </div>

        <div className="landing-stat">
          <strong>2</strong>
          <span>proofs of work</span>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <p className="section-label">HOW IT WORKS</p>

        <h2>Show up. Build. Share.</h2>

        <div className="landing-steps">
          {/* Step 1 */}
          <div className="landing-step">
            <span>01</span>

            <div>
              <h3>Pick a track</h3>

              <p>Choose the skill you want to develop over the next 60 days.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="landing-step">
            <span>02</span>

            <div>
              <h3>Build every day</h3>

              <p>Complete one practical challenge and ship something real.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="landing-step">
            <span>03</span>

            <div>
              <h3>Prove your work</h3>

              <p>Share your GitHub commit and LinkedIn post.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ABTalks */}
      <section className="landing-benefits">
        <p className="section-label">WHY ABTALKS</p>

        <h2>
          Learning is good.
          <br />
          <span>Shipping is better.</span>
        </h2>

        <div className="benefit-list">
          <div className="benefit-item">
            <div className="benefit-number">01</div>

            <div>
              <h3>Build a public portfolio</h3>

              <p>
                Every completed day becomes another piece of evidence that you
                can actually build.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">02</div>

            <div>
              <h3>Build consistency</h3>

              <p>
                A daily streak turns scattered learning into a habit you can
                maintain.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-number">03</div>

            <div>
              <h3>Get visible to recruiters</h3>

              <p>
                Your GitHub work and LinkedIn activity show what you can do, not
                just what you know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="landing-final">
        <p>
          60 days from now,
          <br />
          you'll wish you started today.
        </p>

        <Link to="/dashboard" className="landing-button">
          Start the challenge →
        </Link>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <span>ABTalks</span>

        <span>60 days of showing up.</span>
      </footer>
    </main>
  );
}

export default Landing;
