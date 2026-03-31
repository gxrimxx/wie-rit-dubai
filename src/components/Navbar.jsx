// src/components/Navbar.jsx
import { useState, useEffect } from "react";
const logoPath = "/assets/logo_wie.png"; 

const links = [
  { label: "Home",       href: "#hero" },
  { label: "About",      href: "#about" },
  { label: "Events",     href: "#events" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Team",       href: "#team" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
      background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.7)",
      backdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid var(--card)" : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "0 5vw",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        {/* Logo Section */}
        <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          
          {/* */}
          <img 
            src={logoPath} 
            alt="WIE Logo" 
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              border: scrolled ? "1px solid #eee" : "1px solid transparent",
              transition: "border 0.3s ease"
            }}
          />

          <span style={{
            fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "1.1rem",
            color: "var(--purple-deep)", letterSpacing: "0.01em",
          }}>
            WIE <span style={{ color: "var(--pink)" }}>♥</span> RIT Dubai
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{
          display: "flex", gap: 4, listStyle: "none", alignItems: "center",
          margin: 0,
        }} className="nav-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{
                textDecoration: "none",
                color: "var(--text-mid)",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "8px 14px",
                borderRadius: 100,
                transition: "all 0.2s",
                display: "block",
              }}
              onMouseEnter={e => { e.target.style.background = "var(--card)"; e.target.style.color = "var(--purple-deep)"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "var(--text-mid)"; }}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" style={{ padding: "9px 22px", fontSize: "0.88rem", textDecoration: "none" }}>
              Join Us ♥
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: 5, padding: 6,
          }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 24, height: 2,
              background: "var(--purple-deep)", borderRadius: 2,
              transition: "all 0.3s",
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(255,255,255,0.98)", padding: "12px 0 20px",
          borderTop: "1px solid var(--card)",
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "12px 5vw",
                color: "var(--text-dark)", textDecoration: "none",
                fontWeight: 500, fontSize: "1rem",
                borderBottom: "1px solid var(--bg-soft)",
              }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>    
    </nav>
  );
}