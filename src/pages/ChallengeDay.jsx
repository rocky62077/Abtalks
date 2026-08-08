import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { challengeData } from "../data/challengeData";

function ChallengeDay() {
  const navigate = useNavigate();
  const { day } = useParams();

  // Day from URL: /day/17 → 17
  const challengeDay = Number(day);

  // Find challenge from local challenge data
  const today = challengeData.challenges.find(
    (challenge) => challenge.day === challengeDay,
  );

  // ==========================================
  // STATE
  // ==========================================

  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [currentDay, setCurrentDay] = useState(1);

  // ==========================================
  // GET CURRENT PROGRESS
  // ==========================================

  useEffect(() => {
    const checkProgress = async () => {
      const token = localStorage.getItem("abtalksToken");

      // No token
      if (!token) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        const response = await fetch("http://localhost:5001/api/v1/progress", {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to load progress.");
        }

        console.log("Challenge progress:", result);

        const progress = result.data;

        // Current day stored in MongoDB
        const userCurrentDay = progress.currentDay ?? 1;

        setCurrentDay(userCurrentDay);

        // ==========================================
        // INVALID DAY
        // ==========================================

        if (
          !Number.isInteger(challengeDay) ||
          challengeDay < 1 ||
          challengeDay > challengeData.totalDays
        ) {
          navigate("/dashboard", { replace: true });
          return;
        }

        // ==========================================
        // FUTURE DAY PROTECTION
        // ==========================================

        if (challengeDay > userCurrentDay) {
          alert(`You must complete Day ${userCurrentDay} first.`);

          navigate(`/day/${userCurrentDay}`, {
            replace: true,
          });

          return;
        }

        // ==========================================
        // ALREADY COMPLETED DAY
        // ==========================================

        if (challengeDay <= progress.completedDays) {
          setSubmitted(true);
        }
      } catch (error) {
        console.error("Progress fetch error:", error);

        localStorage.removeItem("abtalksToken");
        localStorage.removeItem("abtalksUser");

        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    checkProgress();
  }, [navigate, challengeDay]);

  // ==========================================
  // SUBMIT PROOF
  // ==========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate URLs
    if (!githubUrl.trim() || !linkedinUrl.trim()) {
      alert("Please submit both GitHub and LinkedIn links.");
      return;
    }

    const token = localStorage.getItem("abtalksToken");

    if (!token) {
      alert("You are not logged in.");

      navigate("/login", {
        replace: true,
      });

      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("http://localhost:5001/api/v1/proofs", {
        method: "POST",

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          // IMPORTANT:
          // Submit the day from the URL
          day: challengeDay,

          githubUrl: githubUrl.trim(),

          linkedinUrl: linkedinUrl.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit proof.");
      }

      console.log("Proof submitted:", result);

      // Proof successfully submitted
      setSubmitted(true);

      // Update local current day from backend response
      if (result.data?.progress?.currentDay) {
        setCurrentDay(result.data.progress.currentDay);
      }
    } catch (error) {
      console.error("Proof submission error:", error);

      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <main className="challenge-page">
        <section className="challenge-content">
          <p>Loading challenge...</p>
        </section>
      </main>
    );
  }

  // ==========================================
  // CHALLENGE NOT FOUND
  // ==========================================

  if (!today) {
    return (
      <main className="challenge-page">
        <section className="challenge-content">
          <p className="challenge-eyebrow">
            DAY {challengeDay} OF {challengeData.totalDays}
          </p>

          <h1>Challenge coming soon</h1>

          <p className="challenge-description">
            The challenge for Day {challengeDay} has not been added yet.
          </p>

          <Link to="/dashboard" className="dashboard-button">
            ← Back to dashboard
          </Link>
        </section>
      </main>
    );
  }

  // ==========================================
  // UI
  // ==========================================

  return (
    <main className="challenge-page">
      {/* ========================================
          HEADER
      ======================================== */}

      <header className="challenge-header">
        <Link to="/dashboard" className="back-button">
          ←
        </Link>

        <Link to="/" className="challenge-logo">
          AB<span>Talks</span>
        </Link>

        <div className="day-indicator">DAY {challengeDay}</div>
      </header>

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <section className="challenge-content">
        {/* Day label */}

        <p className="challenge-eyebrow">
          DAY {challengeDay} OF {challengeData.totalDays}
        </p>

        {/* Title */}

        <h1>{today.title}</h1>

        {/* Description */}

        <p className="challenge-description">{today.description}</p>

        {/* Meta */}

        <div className="challenge-meta">
          <span>◷ {today.duration}</span>

          <span>◆ {today.difficulty}</span>
        </div>

        {/* ======================================
            TASK
        ====================================== */}

        <section className="task-card">
          <p className="section-label">TODAY'S TASK</p>

          <h2>What you need to build</h2>

          <p>
            {today.task?.description ||
              "Complete today's challenge and build the required project."}
          </p>

          {/* Requirements */}

          {today.task?.requirements?.length > 0 && (
            <div className="task-requirements">
              {today.task.requirements.map((requirement, index) => (
                <div className="requirement" key={index}>
                  <span className="requirement-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <strong>{requirement.title}</strong>

                    <p>{requirement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ======================================
            PROOF OF WORK
        ====================================== */}

        <section className="proof-section">
          <div className="proof-heading">
            <p className="section-label">PROOF OF WORK</p>

            <h2>Show that you built it.</h2>

            <p>Submit both links to complete today's challenge.</p>
          </div>

          {/* ====================================
              ALREADY SUBMITTED
          ==================================== */}

          {submitted ? (
            <div className="success-card">
              <div className="success-icon">✓</div>

              <h3>Proof submitted!</h3>

              <p>Day {challengeDay} has been submitted successfully.</p>

              <Link to="/dashboard" className="dashboard-button">
                Back to dashboard →
              </Link>
            </div>
          ) : (
            /* ==================================
               SUBMISSION FORM
            ================================== */

            <form className="proof-form" onSubmit={handleSubmit}>
              {/* GitHub */}

              <div className="form-group">
                <label htmlFor="github">GitHub repository / commit</label>

                <input
                  id="github"
                  type="url"
                  placeholder="https://github.com/username/project"
                  value={githubUrl}
                  onChange={(event) => setGithubUrl(event.target.value)}
                  required
                />

                <span>
                  Add the repository or commit where today's work is available.
                </span>
              </div>

              {/* LinkedIn */}

              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn post</label>

                <input
                  id="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/posts/..."
                  value={linkedinUrl}
                  onChange={(event) => setLinkedinUrl(event.target.value)}
                  required
                />

                <span>
                  Add the LinkedIn post where you shared your progress.
                </span>
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="submit-proof-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit today's proof →"}
              </button>
            </form>
          )}
        </section>

        {/* ======================================
            BOTTOM NAVIGATION
        ====================================== */}

        <div className="challenge-navigation">
          <Link to="/dashboard">← Back to dashboard</Link>
        </div>
      </section>
    </main>
  );
}

export default ChallengeDay;
