// src/sections/Contact.jsx
export default function Contact() {
  const socials = [
    {
      platform: "Instagram",
      handle: "@wie.ritdubai",
      description: "Daily content — Motivational Mondays, Trivia Tuesdays, Women's Wednesdays, Tech Thursdays & Unfiltered Fridays!",
      icon: "📸",
      url: "https://www.instagram.com/wie.ritdubai",
      color: "linear-gradient(135deg, #e8578a, #c13584)",
    },
    {
      platform: "LinkedIn",
      handle: "Women in Engineering RIT Dubai",
      description: "Stay updated with our professional achievements, upcoming events, and opportunities in STEM.",
      icon: "💼",
      url: "https://www.linkedin.com/company/wieritdubai/posts/?feedView=all",
      color: "linear-gradient(135deg, #7c3aed, #5b1d8a)",
    },
  ];

  return (
    <section id="contact" style={{ background: "var(--white)", padding: "90px 5vw" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="pill">Say Hello</span>
          <h2 className="section-title" style={{ marginTop: 12, marginBottom: 12 }}>
            Connect with Us <span className="heart">♥</span>
          </h2>
          <p style={{
            color: "var(--text-mid)",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            fontWeight: 300,
            maxWidth: 520,
            margin: "0 auto",
          }}>
            Follow us to stay in the loop on events, workshops, and all the exciting
            things happening at WIE RIT Dubai.
          </p>
        </div>

        {/* Social cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 56 }}>
          {socials.map(({ platform, handle, description, icon, url, color }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: "var(--bg)",
                borderRadius: "var(--radius-md)",
                padding: "26px 30px",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "var(--shadow-sm)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              {/* Icon */}
              <div style={{
                width: 60, height: 60,
                borderRadius: "var(--radius-sm)",
                background: color,
                display: "flex", alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                flexShrink: 0,
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}>{icon}</div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "var(--purple-deep)", fontSize: "1rem", marginBottom: 4 }}>
                  {platform}
                </div>
                <div style={{ color: "var(--pink)", fontWeight: 600, fontSize: "0.9rem", marginBottom: 5 }}>
                  {handle}
                </div>
                <div style={{ color: "var(--text-soft)", fontSize: "0.83rem", lineHeight: 1.5 }}>
                  {description}
                </div>
              </div>

              {/* Arrow */}
              <div style={{
                color: "var(--text-soft)", fontSize: "1.3rem",
                flexShrink: 0, marginLeft: 8,
                transition: "transform 0.2s",
              }}>→</div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--card)", paddingTop: 36, textAlign: "center" }}>
          {/* Weekly content types */}
          <h3 style={{
            fontFamily: "var(--ff-display)",
            color: "var(--purple-deep)",
            fontSize: "1.3rem",
            marginBottom: 20,
          }}>Our Weekly Content</h3>
          <div style={{
            display: "flex", flexWrap: "wrap",
            gap: 10, justifyContent: "center",
            marginBottom: 40,
          }}>
            {[
              { day: "Mondays",    content: "Motivational Mondays",                   emoji: "✨" },
              { day: "Tuesdays",   content: "Trivia Tuesdays",                         emoji: "🧠" },
              { day: "Wednesdays", content: "Women's Wednesdays",                      emoji: "👩‍🔬" },
              { day: "Thursdays",  content: "Tech Thursdays",                          emoji: "💻" },
              { day: "Fridays",    content: "Unfiltered Fridays",                      emoji: "🎬" },
            ].map(({ day, content, emoji }) => (
              <div key={day} style={{
                background: "var(--bg)",
                borderRadius: 100,
                padding: "9px 18px",
                fontSize: "0.85rem",
                color: "var(--text-mid)",
                fontWeight: 500,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span>{emoji}</span>
                <span style={{ color: "var(--purple-deep)", fontWeight: 700 }}>{day}:</span>
                <span>{content}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p style={{ color: "var(--text-soft)", fontSize: "0.88rem", lineHeight: 1.7 }}>
            © 2026 Women in Engineering – RIT Dubai.
            Made with <span style={{ color: "var(--pink)" }}>♥</span> by the WIE team.
          </p>
        </div>
      </div>
    </section>
  );
}
