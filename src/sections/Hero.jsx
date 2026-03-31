// src/sections/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      paddingTop: 68,
      background: "linear-gradient(160deg, #f4effe 0%, #e8daf5 50%, #f0e6ff 100%)",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,87,138,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "-8%",
        width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", left: "35%",
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(185,145,232,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "60px 5vw",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 60, alignItems: "center", width: "100%",
      }}>
        {/* Left text */}
        <div className="fade-up">
          <span className="pill" style={{ marginBottom: 20, display: "inline-block" }}>
            RIT Dubai ♥ 2024–2025
          </span>
          <h1 style={{
            fontFamily: "var(--ff-display)",
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            color: "var(--purple-deep)",
            lineHeight: 1.12,
            marginBottom: 24,
          }}>
            Women in<br />
            <span style={{ color: "var(--pink)" }}>Engineering</span>
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "var(--text-mid)",
            lineHeight: 1.8,
            maxWidth: 460,
            marginBottom: 40,
            fontWeight: 300,
          }}>
            Empowering female students at RIT Dubai through hands-on learning,
            mentorship, industry connections, and a community that lifts each other up.{" "}
            <span style={{ color: "var(--pink)" }}>♥</span>
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#events" className="btn-primary">
              Explore Events ♥
            </a>
            <a href="#about" className="btn-outline">
              Learn More →
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: 36, marginTop: 52,
            paddingTop: 36, borderTop: "1px solid var(--card)",
          }}>
            {[["10+", "Events Hosted"], ["50+", "Active Members"], ["5+", "Industry Partners"]].map(([num, lab]) => (
              <div key={lab}>
                <div style={{
                  fontFamily: "var(--ff-display)",
                  fontSize: "2rem", color: "var(--purple-deep)", fontWeight: 800,
                }}>{num}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-soft)", fontWeight: 500, letterSpacing: "0.03em" }}>{lab}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image card */}
        <div style={{ display: "flex", justifyContent: "center" }} className="fade-up">
          <div style={{
            width: "100%", maxWidth: 400, aspectRatio: "4/5",
            borderRadius: "var(--radius-lg)",
            background: "linear-gradient(145deg, var(--card) 0%, var(--card-dark) 100%)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden", position: "relative",
          }}>
            <img
              src="/assets/hero-bg.jpg"
              alt="WIE RIT Dubai"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={e => {
                e.target.style.display = "none";
                e.target.parentNode.querySelector(".hero-emoji").style.display = "flex";
              }}
            />
            {/* Fallback */}
            <div className="hero-emoji" style={{
              display: "none", position: "absolute", inset: 0,
              alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: 16,
            }}>
              <div style={{ fontSize: "6rem" }}>👩‍💻</div>
              <div style={{ fontSize: "4rem" }}>⚙️</div>
              <div style={{ fontSize: "3rem" }}>✨</div>
            </div>

            {/* Caption card */}
            <div style={{
              position: "absolute", bottom: 24, left: 20, right: 20,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(10px)",
              borderRadius: "var(--radius-md)",
              padding: "16px 20px",
            }}>
              <div style={{ fontWeight: 700, color: "var(--purple-deep)", fontSize: "0.95rem" }}>
                WIE at RIT Dubai
              </div>
              <div style={{ color: "var(--text-soft)", fontSize: "0.82rem", marginTop: 2 }}>
                Empowering Women in STEM ♥
              </div>
            </div>

            {/* Floating hearts */}
            {["♥", "♥", "♥"].map((h, i) => (
              <div key={i} style={{
                position: "absolute",
                top: [20, 40, 15][i] + "%",
                left: [10, 75, 55][i] + "%",
                color: "var(--pink)",
                fontSize: ["1.2rem", "0.9rem", "1.5rem"][i],
                opacity: 0.5,
                animation: `float${i} ${[3, 4, 3.5][i]}s ease-in-out infinite`,
              }}>{h}</div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float0 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @media(max-width:768px){
          #hero > div { grid-template-columns: 1fr !important; }
          #hero > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
