// src/components/Modal.jsx
import { useEffect } from "react";

export default function Modal({ event, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!event) return null;

  const dateObj = new Date(event.date + "T00:00:00");
  const formatted = dateObj.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box fade-up">
        {/* Image / Placeholder */}
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="modal-img"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className="modal-img-placeholder"
          style={{ display: event.image ? "none" : "flex" }}
        >
          {event.emoji || "📅"}
        </div>

        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-body">
          {/* Badge */}
          <span className="pill" style={{ marginBottom: 12, display: "inline-block" }}>
            {event.isPast ? "Past Event" : "Upcoming"}
          </span>

          <h2 style={{
            fontFamily: "var(--ff-display)", fontSize: "1.55rem",
            color: "var(--purple-deep)", margin: "8px 0 16px", lineHeight: 1.3,
          }}>
            {event.title}
          </h2>

          <p style={{ color: "var(--text-mid)", marginBottom: 20, lineHeight: 1.7 }}>
            {event.description}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: "📅", label: "Date",  value: formatted },
              { icon: "🕐", label: "Time",  value: event.time },
              { icon: "📍", label: "Venue", value: event.venue },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                background: "var(--bg)", borderRadius: "var(--radius-sm)",
                padding: "12px 16px",
              }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-soft)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {label}
                  </div>
                  <div style={{ color: "var(--text-dark)", fontWeight: 500 }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
