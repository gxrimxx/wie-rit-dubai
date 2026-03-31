// src/sections/Newsletter.jsx
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail]   = useState("");
  const [sent, setSent]     = useState(false);
  const [error, setError]   = useState("");

  const isValid = email.includes("@") && email.includes(".");

  const handleSubscribe = () => {
    if (!email) { setError("Please enter your email address."); return; }
    if (!isValid) { setError("Please enter a valid email."); return; }
    console.log("Newsletter signup:", email);
    setSent(true);
    setError("");
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      style={{
        background: "linear-gradient(140deg, var(--purple-deep) 0%, #8b2fc9 60%, #a855f7 100%)",
        padding: "100px 5vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-20%", right: "-5%",
        width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", left: "-5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,87,138,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 620,
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Big heart icon */}
        <div style={{
          width: 72, height: 72,
          background: "rgba(255,255,255,0.15)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "2rem", margin: "0 auto 24px",
          backdropFilter: "blur(8px)",
        }}>♥</div>

        <h2 style={{
          fontFamily: "var(--ff-display)",
          color: "#fff",
          fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
          marginBottom: 16,
          lineHeight: 1.2,
        }}>Stay in the Loop</h2>

        <p style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "1.05rem",
          marginBottom: 44,
          lineHeight: 1.75,
          fontWeight: 300,
        }}>
          Get updates on upcoming WIE events, workshops, speaker talks, and
          opportunities — straight to your inbox.
        </p>

        {!sent ? (
          <>
            <div style={{
              display: "flex", gap: 12,
              maxWidth: 480, margin: "0 auto",
              flexWrap: "wrap", justifyContent: "center",
            }}>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(""); }}
                placeholder="your@email.com"
                onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                style={{
                  flex: 1, minWidth: 220,
                  padding: "14px 22px",
                  borderRadius: 100,
                  border: error ? "2px solid #ff8fab" : "2px solid rgba(255,255,255,0.25)",
                  fontSize: "1rem",
                  outline: "none",
                  background: "rgba(255,255,255,0.14)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                  transition: "border 0.2s",
                }}
                onFocus={e => e.target.style.border = "2px solid rgba(255,255,255,0.7)"}
                onBlur={e => e.target.style.border = error
                  ? "2px solid #ff8fab"
                  : "2px solid rgba(255,255,255,0.25)"}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--pink)",
                  color: "#fff", fontFamily: "var(--ff-body)",
                  fontSize: "0.95rem", fontWeight: 600,
                  padding: "14px 28px", borderRadius: 100,
                  border: "none", cursor: "pointer",
                  transition: "all 0.2s", flexShrink: 0,
                  boxShadow: "0 4px 20px rgba(232,87,138,0.4)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(232,87,138,0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(232,87,138,0.4)";
                }}
              >
                Subscribe ♥
              </button>
            </div>
            {error && (
              <p style={{ color: "#ff8fab", fontSize: "0.85rem", marginTop: 10 }}>{error}</p>
            )}
          </>
        ) : (
          <div style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            borderRadius: "var(--radius-md)",
            padding: "24px 36px",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 500,
            maxWidth: 420,
            margin: "0 auto",
          }}>
            💜 Thank you! Welcome to the WIE community.
          </div>
        )}

        {/* Social nudge */}
        <p style={{
          marginTop: 48,
          color: "rgba(255,255,255,0.45)",
          fontSize: "0.85rem",
        }}>
          You can also follow us on Instagram{" "}
          <a
            href="https://www.instagram.com/wie.ritdubai"
            target="_blank" rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}
          >@wie.ritdubai</a>
        </p>
      </div>
    </section>
  );
}
