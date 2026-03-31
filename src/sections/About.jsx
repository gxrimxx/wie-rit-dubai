// src/sections/About.jsx
export default function About() {
  const goals = [
    { emoji: "🚀", title: "Empower Women in STEM",      text: "Resources, mentorship & training to help students succeed in engineering and STEM fields." },
    { emoji: "🤝", title: "Promote Industry Connections", text: "Collaborate with industry partners for meaningful real-world experiences." },
    { emoji: "🔧", title: "Hands-On Learning",           text: "Practical workshops — Arduino, CAD, 3D printing, and soft-skills sessions." },
    { emoji: "💜", title: "Foster a Supportive Community", text: "An inclusive space where students share experiences and grow together." },
  ];

  const initiatives = [
    {
      title: "WIE Mentorship Program",
      emoji: "🎓",
      text: "We connect high school girls interested in STEM with current university students — offering guidance, shared experience, and an honest look at life in engineering.",
    },
    {
      title: "WIE Passport",
      emoji: "📓",
      text: "Members receive a handmade passport and earn a custom sticker for every event they attend. A personal keepsake that maps their WIE journey milestone by milestone.",
    },
  ];

  return (
    <section id="about" style={{ background: "var(--white)", padding: "90px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <span className="pill">Our Story</span>
        <h2 className="section-title" style={{ marginTop: 12, marginBottom: 6 }}>
          About <span className="heart">♥</span> WIE
        </h2>
        <p className="section-subtitle">Women in Engineering at RIT Dubai</p>

        {/* Main 2-col layout */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "center", marginBottom: 80,
        }}>
          {/* Left: text + goal cards */}
          <div>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: 20 }}>
              Women in Engineering (WIE) at RIT Dubai is committed to empowering female students
              by providing opportunities for growth, skill development, and leadership within the
              engineering field.
            </p>
            <p style={{ color: "var(--text-mid)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: 36 }}>
              Through workshops, mentoring programs, industry collaborations, and extracurricular
              activities, WIE creates a supportive and inclusive community that encourages women
              to pursue and excel in STEM careers.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {goals.map(({ emoji, title, text }) => (
                <div
                  key={title}
                  style={{
                    background: "var(--bg)",
                    borderRadius: "var(--radius-sm)",
                    padding: "18px 18px",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{emoji}</div>
                  <div style={{ fontWeight: 700, color: "var(--purple-deep)", marginBottom: 5, fontSize: "0.9rem" }}>{title}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-soft)", lineHeight: 1.5 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "320px 280px",
            gap: 20,
          }}>
            {[
              { src: "/assets/about1.jpg", emoji: "👩‍💻", span: true },
              { src: "/assets/about2.jpg", emoji: "⚙️",   span: false },
              { src: "/assets/about3.jpg", emoji: "🌟",   span: false },
            ].map(({ src, emoji, span }, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "var(--radius-md)",
                  background: "linear-gradient(135deg, var(--card), var(--card-dark))",
                  overflow: "hidden",
                  gridColumn: span ? "1 / span 2" : "auto",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "3.5rem", position: "relative",
                  transition: "transform 0.3s ease",
                  transform: i % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                {emoji}
                <img
                  src={src}
                  alt={`About WIE ${i + 1}`}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  onError={e => e.target.style.display = "none"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Initiatives */}
        <div>
          <h3 style={{
            fontFamily: "var(--ff-display)",
            fontSize: "1.9rem", color: "var(--purple-deep)",
            marginBottom: 28,
          }}>
            Our Initiatives <span className="heart">♥</span>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {initiatives.map(({ title, emoji, text }) => (
              <div
                key={title}
                style={{
                  background: "linear-gradient(135deg, var(--card) 0%, var(--bg-soft) 100%)",
                  borderRadius: "var(--radius-md)",
                  padding: "32px 30px",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{emoji}</div>
                <h4 style={{
                  fontFamily: "var(--ff-display)",
                  color: "var(--purple-deep)",
                  fontSize: "1.25rem",
                  marginBottom: 12,
                }}>{title}</h4>
                <p style={{ color: "var(--text-mid)", lineHeight: 1.75, fontSize: "0.97rem" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #about > div > div:first-of-type { grid-template-columns: 1fr !important; }
          #about > div > div:first-of-type > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
