// src/sections/Events.jsx
import { useState } from "react";
import { events, upcomingEvents, pastEvents } from "../data/events";
import Modal from "../components/Modal";

// ────────────────────────────────────────────────────────────────────────────
// Calendar
// ────────────────────────────────────────────────────────────────────────────
function Calendar({ onSelectEvent }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build event-date lookup for this month
  const eventDates = {};
  events.forEach(ev => {
    const d = new Date(ev.date + "T00:00:00");
    if (d.getFullYear() === year && d.getMonth() === month) {
      const day = d.getDate();
      if (!eventDates[day]) eventDates[day] = [];
      eventDates[day].push(ev);
    }
  });

  // Build calendar cells: null = empty leading cell
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const todayDay = today.getFullYear() === year && today.getMonth() === month
    ? today.getDate() : null;

  return (
    <div style={{
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      padding: "32px 28px",
      boxShadow: "var(--shadow-sm)",
    }}>
      {/* Month nav */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", marginBottom: 28,
      }}>
        <button
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
          style={{
            background: "var(--bg)", border: "none", cursor: "pointer",
            width: 38, height: 38, borderRadius: "50%", fontSize: "1.2rem",
            color: "var(--purple-deep)", display: "flex",
            alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "var(--card)"}
          onMouseLeave={e => e.currentTarget.style.background = "var(--bg)"}
        >‹</button>

        <h3 style={{
          fontFamily: "var(--ff-display)",
          color: "var(--purple-deep)",
          fontSize: "1.45rem",
          fontWeight: 700,
        }}>{monthName}</h3>

        <button
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
          style={{
            background: "var(--bg)", border: "none", cursor: "pointer",
            width: 38, height: 38, borderRadius: "50%", fontSize: "1.2rem",
            color: "var(--purple-deep)", display: "flex",
            alignItems: "center", justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "var(--card)"}
          onMouseLeave={e => e.currentTarget.style.background = "var(--bg)"}
        >›</button>
      </div>

      {/* Day headers */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(7, 1fr)",
        textAlign: "center", marginBottom: 8,
      }}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
          <div key={d} style={{
            fontSize: "0.75rem", fontWeight: 600,
            color: "var(--text-soft)", padding: "4px 0",
            letterSpacing: "0.04em",
          }}>{d}</div>
        ))}
      </div>

      {/* Date cells */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
        {cells.map((day, i) => {
          const hasEvent = day && eventDates[day];
          const isToday = day === todayDay;
          return (
            <div
              key={i}
              onClick={() => hasEvent && onSelectEvent(eventDates[day][0])}
              style={{
                aspectRatio: "1",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                borderRadius: 10,
                fontSize: "0.9rem",
                fontWeight: hasEvent ? 700 : isToday ? 600 : 400,
                color: day
                  ? isToday ? "var(--white)" : "var(--purple-deep)"
                  : "transparent",
                background: isToday
                  ? "var(--purple-deep)"
                  : hasEvent ? "var(--bg-soft)" : "transparent",
                cursor: hasEvent ? "pointer" : "default",
                transition: "all 0.15s",
                position: "relative",
              }}
              onMouseEnter={e => {
                if (hasEvent) {
                  e.currentTarget.style.background = "var(--card)";
                  e.currentTarget.style.transform = "scale(1.1)";
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = isToday
                  ? "var(--purple-deep)"
                  : hasEvent ? "var(--bg-soft)" : "transparent";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {day || ""}
              {hasEvent && (
                <span style={{
                  color: "var(--pink)",
                  fontSize: "0.55rem",
                  lineHeight: 1,
                  marginTop: 1,
                }}>♥</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{
        marginTop: 20, paddingTop: 18,
        borderTop: "1px solid var(--bg-soft)",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ color: "var(--pink)", fontSize: "0.9rem" }}>♥</span>
        <span style={{ fontSize: "0.82rem", color: "var(--text-soft)" }}>
          Event marker – Click to view details
        </span>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Upcoming event card  (matches screenshot exactly)
// ────────────────────────────────────────────────────────────────────────────
function UpcomingCard({ event, onClick }) {
  const d = new Date(event.date + "T00:00:00");
  const label = d.toLocaleDateString("en-US", { month: "long", day: "numeric" });

  return (
    <div
      onClick={() => onClick(event)}
      style={{
        background: "var(--card)",
        borderRadius: 18,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: "var(--shadow-sm)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "var(--card-dark)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "var(--card)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: 700,
          color: "var(--purple-deep)",
          fontSize: "1.05rem",
          marginBottom: 5,
        }}>{event.title}</div>
        <div style={{ fontSize: "0.9rem", color: "var(--text-mid)" }}>
          {label} • {event.time}
        </div>
      </div>
      <span style={{
        color: "var(--pink)", fontSize: "1.5rem",
        flexShrink: 0, marginLeft: 16,
      }}>♥</span>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Past event card  (horizontal carousel)
// ────────────────────────────────────────────────────────────────────────────
function PastCard({ event, onClick }) {
  return (
    <div
      onClick={() => onClick(event)}
      style={{
        minWidth: 200, width: 200,
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        background: "var(--white)",
        cursor: "pointer",
        flexShrink: 0,
        transition: "transform 0.2s, box-shadow 0.2s",
        boxShadow: "var(--shadow-sm)",
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
      {/* Image / emoji placeholder */}
      <div style={{
        height: 140,
        background: "linear-gradient(135deg, var(--card), var(--card-dark))",
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "3rem", position: "relative",
      }}>
        {event.emoji}
        <img
          src={event.image}
          alt={event.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => e.target.style.display = "none"}
        />
      </div>
      <div style={{ padding: "14px 16px 18px" }}>
        <div style={{
          fontWeight: 700, color: "var(--purple-deep)",
          fontSize: "0.88rem", marginBottom: 5, lineHeight: 1.4,
        }}>{event.title}</div>
        <div style={{ fontSize: "0.77rem", color: "var(--text-soft)" }}>
          {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Main Events Section
// ────────────────────────────────────────────────────────────────────────────
export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" style={{ padding: "90px 5vw", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <span className="pill">What We Do</span>
        <h2 className="section-title" style={{ marginTop: 12, marginBottom: 6 }}>
          Events <span className="heart">♥</span>
        </h2>
        <p className="section-subtitle">Click any date or card to see full event details</p>

        {/* Calendar + Upcoming Events */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          marginBottom: 64,
          alignItems: "start",
        }}>
          <Calendar onSelectEvent={setSelectedEvent} />

          <div>
            <h3 style={{
              fontFamily: "var(--ff-display)",
              color: "var(--purple-deep)",
              fontSize: "1.6rem",
              marginBottom: 18,
            }}>Upcoming Events</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {upcomingEvents.map(ev => (
                <UpcomingCard key={ev.id} event={ev} onClick={setSelectedEvent} />
              ))}
            </div>
          </div>
        </div>

        {/* Past Events — horizontal carousel */}
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 22 }}>
            <h3 style={{
              fontFamily: "var(--ff-display)",
              color: "var(--purple-deep)",
              fontSize: "1.6rem",
            }}>Past Events</h3>
            <span style={{
              fontFamily: "var(--ff-body)", fontWeight: 300,
              color: "var(--text-soft)", fontSize: "0.92rem",
            }}>— scroll to explore →</span>
          </div>

          <div style={{
            display: "flex",
            gap: 18,
            overflowX: "auto",
            paddingBottom: 16,
            scrollbarWidth: "thin",
            scrollbarColor: "var(--card-dark) var(--bg)",
            cursor: "grab",
          }}>
            {pastEvents.map(ev => (
              <PastCard key={ev.id} event={ev} onClick={setSelectedEvent} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}

      <style>{`
        @media(max-width:768px){
          #events > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
