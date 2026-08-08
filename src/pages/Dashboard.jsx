import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { challengeData } from "../data/challengeData";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [completedDays, setCompletedDays] = useState(0);

  const [streak, setStreak] = useState(0);

  const [currentDay, setCurrentDay] = useState(1);

  const [loading, setLoading] = useState(true);

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.removeItem("abtalksToken");
    localStorage.removeItem("abtalksUser");

    navigate("/login", { replace: true });
  };

  // ==========================================
  // FETCH USER + PROGRESS
  // ==========================================

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("abtalksToken");

      // No token
      if (!token) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        // --------------------------------------
        // GET CURRENT USER
        // --------------------------------------

        const userResponse = await fetch(
          "http://localhost:5001/api/v1/auth/me",
          {
            method: "GET",

            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        const userResult = await userResponse.json();

        if (!userResponse.ok) {
          throw new Error(userResult.message || "Authentication failed.");
        }

        console.log("Current user:", userResult);

        setUser(userResult.data);

        // Keep user data updated
        localStorage.setItem("abtalksUser", JSON.stringify(userResult.data));

        // --------------------------------------
        // GET CURRENT USER PROGRESS
        // --------------------------------------

        const progressResponse = await fetch(
          "http://localhost:5001/api/v1/progress",
          {
            method: "GET",

            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        const progressResult = await progressResponse.json();

        if (!progressResponse.ok) {
          throw new Error(
            progressResult.message || "Could not fetch progress.",
          );
        }

        console.log("Current progress:", progressResult);

        const progress = progressResult.data;

        setCompletedDays(progress.completedDays ?? 0);

        setStreak(progress.streak ?? 0);

        setCurrentDay(progress.currentDay ?? 1);
      } catch (error) {
        console.error("Dashboard fetch error:", error);

        localStorage.removeItem("abtalksToken");
        localStorage.removeItem("abtalksUser");

        navigate("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return <div>Loading your dashboard...</div>;
  }

  // ==========================================
  // USER NOT AVAILABLE
  // ==========================================

  if (!user) {
    return null;
  }

  // ==========================================
  // DASHBOARD DATA
  // ==========================================

  const totalDays = challengeData.totalDays;

  // Find mission using MongoDB currentDay
  const todayChallenge = challengeData.challenges.find(
    (challenge) => challenge.day === currentDay,
  );

  const progressPercentage = Math.round((completedDays / totalDays) * 100);

  const remainingDays = totalDays - completedDays;

  const displayName = user.fullName || "Builder";

  const firstLetter = displayName.charAt(0).toUpperCase();

  // ==========================================
  // UI
  // ==========================================

  return (
    <main>
      {/* Header */}

      <header className="dashboard-header">
        <Link to="/" className="dashboard-logo">
          ABTalks
        </Link>

        <div className="dashboard-header-actions">
          <button
            type="button"
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>

          <div className="profile-circle">{firstLetter}</div>
        </div>
      </header>

      {/* Greeting */}

      <section className="dashboard-intro">
        <p className="dashboard-eyebrow">
          DAY {currentDay} OF {totalDays}
        </p>

        <h1>
          Good evening,
          <br />
          {displayName}.
        </h1>

        <p className="dashboard-subtitle">
          Keep the streak alive. Your next build is waiting.
        </p>
      </section>

      {/* Streak */}

      <section className="streak-card">
        <div className="streak-top">
          <span className="streak-label">CURRENT STREAK</span>

          <span className="streak-fire">🔥</span>
        </div>

        <div className="streak-number">{streak}</div>

        <p>days in a row</p>

        <div className="streak-message">
          You're building momentum. Don't break it.
        </div>
      </section>

      {/* Challenge Progress */}

      <section className="progress-section">
        <div className="section-heading">
          <div>
            <span>CHALLENGE PROGRESS</span>

            <strong>
              {completedDays} / {totalDays} days
            </strong>
          </div>

          <strong>{progressPercentage}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>

        <p className="progress-caption">{remainingDays} days remaining</p>
      </section>

      {/* Today's Mission */}

      <section className="mission-card">
        <div className="mission-top">
          <span className="mission-label">TODAY'S MISSION</span>

          <span className="mission-day">
            DAY {todayChallenge?.day || currentDay}
          </span>
        </div>

        {todayChallenge ? (
          <>
            <h2>{todayChallenge.title}</h2>

            <p>{todayChallenge.description}</p>

            <div className="mission-meta">
              <span>◷ {todayChallenge.duration}</span>

              <span>◆ {todayChallenge.difficulty}</span>
            </div>

            <Link
              to={`/day/${todayChallenge.day}`}
              className="dashboard-button"
            >
              Continue challenge →
            </Link>
          </>
        ) : (
          <>
            <h2>Challenge coming soon</h2>

            <p>The mission for Day {currentDay} has not been added yet.</p>
          </>
        )}
      </section>

      {/* Momentum */}

      <section className="momentum-card">
        <div className="momentum-header">
          <div>
            <span className="section-label">YOUR MOMENTUM</span>

            <h2>You're on track.</h2>
          </div>

          <div className="momentum-score">92</div>
        </div>

        <p>
          Your consistency is stronger than 82% of active builders this week.
        </p>

        <div className="momentum-details">
          <div>
            <strong>{streak}</strong>
            <span>day streak</span>
          </div>

          <div>
            <strong>{completedDays}</strong>
            <span>projects shipped</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>this week</span>
          </div>
        </div>
      </section>

      {/* Achievements */}

      <section className="achievements">
        <div className="section-heading-simple">
          <span>ACHIEVEMENTS</span>

          <span>{challengeData.achievements.length} unlocked</span>
        </div>

        <div className="achievement-list">
          {challengeData.achievements.map((achievement, index) => (
            <div className="achievement" key={index}>
              <div className="achievement-icon">{achievement.icon}</div>

              <div>
                <strong>{achievement.title}</strong>

                <span>{achievement.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}

      <footer className="dashboard-footer">
        <p>Keep showing up. One day at a time.</p>
      </footer>
    </main>
  );
}

export default Dashboard;
