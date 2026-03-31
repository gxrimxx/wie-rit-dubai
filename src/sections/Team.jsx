// src/sections/Team.jsx
import { faculty, executive, eventsTeam, mediaTeam, webTeam } from "../data/team";

function MemberCard({ member }) {
  return (
    <div
      style={{
        background: "var(--white)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        transition: "transform 0.2s, box-shadow 0.2s",
        textAlign: "center",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      {/* Photo / emoji */}
      <div style={{
        height: 140,
        background: "linear-gradient(135deg, var(--card), var(--card-dark))",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "3.2rem", position: "relative",
      }}>
        {member.emoji}
        <img
          src={member.image}
          alt={member.name}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
          }}
          onError={e => e.target.style.display = "none"}
        />
      </div>

      <div style={{ padding: "16px 14px 20px" }}>
        <div style={{
          fontWeight: 700, color: "var(--purple-deep)",
          fontSize: "0.92rem", marginBottom: 5, lineHeight: 1.3,
        }}>{member.name}</div>
        <div style={{
          fontSize: "0.8rem", color: "var(--pink)",
          fontWeight: 600, marginBottom: 4,
        }}>{member.role}</div>
        <div style={{
          fontSize: "0.76rem", color: "var(--text-soft)",
          lineHeight: 1.4,
        }}>{member.department}</div>
      </div>
    </div>
  );
}

function TeamGroup({ label, badgeColor, members }) {
  return (
    <div style={{ marginBottom: 52 }}>
      {/* Group header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
        <div style={{
          height: 3, width: 32,
          background: badgeColor || "var(--purple-mid)",
          borderRadius: 2,
        }} />
        <h3 style={{
          fontFamily: "var(--ff-display)",
          color: "var(--purple-deep)",
          fontSize: "1.35rem",
          fontWeight: 700,
        }}>{label}</h3>
        <span style={{
          background: badgeColor || "var(--card)",
          color: "#fff", fontSize: "0.72rem",
          fontWeight: 700, padding: "3px 10px",
          borderRadius: 100, opacity: 0.85,
        }}>{members.length}</span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
        gap: 18,
      }}>
        {members.map(m => <MemberCard key={m.id} member={m} />)}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" style={{ background: "var(--bg-soft)", padding: "90px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <span className="pill">The People</span>
        <h2 className="section-title" style={{ marginTop: 12, marginBottom: 6 }}>
          Meet Our Team <span className="heart">♥</span>
        </h2>
        <p className="section-subtitle">
          The incredible people who make WIE happen every single day
        </p>

        <TeamGroup
          label="Faculty Advisor"
          badgeColor="var(--purple-deep)"
          members={faculty}
        />
        <TeamGroup
          label="Executive Team"
          badgeColor="var(--purple)"
          members={executive}
        />
        <TeamGroup
          label="Events Team"
          badgeColor="var(--pink)"
          members={eventsTeam}
        />
        <TeamGroup
          label="Media Team"
          badgeColor="var(--purple-mid)"
          members={mediaTeam}
        />
        <TeamGroup
          label="Web Team"
          badgeColor="var(--purple-dark)"
          members={webTeam}
        />        

        {/* Join CTA */}
        <div style={{
          marginTop: 32,
          background: "linear-gradient(135deg, var(--card) 0%, var(--bg-soft) 100%)",
          borderRadius: "var(--radius-lg)",
          padding: "48px 40px",
          textAlign: "center",
          boxShadow: "var(--shadow-sm)",
        }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>💜</div>
          <h3 style={{
            fontFamily: "var(--ff-display)",
            color: "var(--purple-deep)",
            fontSize: "1.7rem",
            marginBottom: 12,
          }}>Want to Join WIE?</h3>
          <p style={{
            color: "var(--text-mid)", fontSize: "1rem",
            maxWidth: 440, margin: "0 auto 28px",
            lineHeight: 1.7, fontWeight: 300,
          }}>
            We welcome all RIT Dubai students who are passionate about empowering
            women in STEM. Come to our next event or reach out on Instagram!
          </p>
          <a
            href="https://www.instagram.com/wie.ritdubai"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow Us @wie.ritdubai ♥
          </a>
        </div>
      </div>
    </section>
  );
}
