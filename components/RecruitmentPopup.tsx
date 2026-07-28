"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------------------
   Board recruitment popup.

   Edit RECRUITMENT_TIMELINE / APPLICATION_WINDOW below to change what shows.
   The popup hides itself automatically once RECRUITMENT_ENDS_AT has passed,
   so it does not need to be manually removed after applications close.
--------------------------------------------------------------------------- */

// Applications close August 28, 2026 at 11:59 PM Eastern (UTC-4 in August).
const RECRUITMENT_ENDS_AT = new Date("2026-08-28T23:59:00-04:00");

// Bump this string to re-show the popup to people who already dismissed it.
const DISMISS_KEY = "icgt-recruitment-popup-2026";

const APPLICATION_WINDOW = {
  opens: "August 16, 12:00 PM EST",
  closes: "August 28, 11:59 PM EST",
};

type TimelineEvent = {
  month: string;
  day: string;
  name: string;
  time: string;
  location?: string;
};

const RECRUITMENT_TIMELINE: TimelineEvent[] = [
  {
    month: "Aug",
    day: "2",
    name: "Virtual Summer Meetup",
    time: "12:00 PM EST",
    location: "Online",
  },
  {
    month: "Aug",
    day: "20",
    name: "WoW Samosa Social",
    time: "2:15 – 4:45 PM",
    location: "Klaus 1456",
  },
  {
    month: "Aug",
    day: "24",
    name: "Chai and Clay with The Chai Box",
    time: "Time TBD",
    location: "Location TBD",
  },
  {
    month: "Aug",
    day: "27",
    name: "ICGT Networking Mixer",
    time: "4:15 – 5:30 PM EST",
    location: "Cypress Theater, Student Center",
  },
];

export default function RecruitmentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsVisible(false);
    // Let the fade-out finish before unmounting.
    window.setTimeout(() => setIsOpen(false), 200);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Private browsing / storage disabled — the popup simply shows again.
    }
  }, []);

  // Show once per browser session, and only while recruiting is still open.
  useEffect(() => {
    if (Date.now() > RECRUITMENT_ENDS_AT.getTime()) return;

    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // Storage unavailable — fall through and show it.
    }

    // Mount on the next frame, then fade in on the frame after, so the
    // transition has a starting state to animate from.
    let fadeFrame = 0;
    const mountFrame = requestAnimationFrame(() => {
      setIsOpen(true);
      fadeFrame = requestAnimationFrame(() => setIsVisible(true));
    });

    return () => {
      cancelAnimationFrame(mountFrame);
      cancelAnimationFrame(fadeFrame);
    };
  }, []);

  // While open: lock background scroll, close on Escape, focus the close button.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruitment-popup-title"
      onClick={close}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-[2px] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-[#faf6f0] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-200 ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close recruitment announcement"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-2xl leading-none text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
        >
          ×
        </button>

        {/* --- Header --- */}
        <div className="rounded-t-2xl bg-[#001f3f] px-6 pt-6 pb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8c7d9]">
            India Club @ Georgia Tech
          </p>
          <h2
            id="recruitment-popup-title"
            className="mt-2 text-3xl font-bold text-white"
          >
            We&rsquo;re recruiting for our board.
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Come meet us this August — then apply.
          </p>
        </div>

        {/* --- Application window --- */}
        <div className="border-b border-black/5 bg-gradient-to-r from-green-700 to-orange-500 px-6 py-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
            Applications
          </p>
          <p className="mt-1 text-sm font-semibold">
            {APPLICATION_WINDOW.opens} &rarr; {APPLICATION_WINDOW.closes}
          </p>
        </div>

        {/* --- Event timeline --- */}
        <div className="px-6 pt-5 pb-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
            Recruitment Events
          </p>

          <ol className="relative space-y-5 border-l-2 border-[#001f3f]/15 pl-6">
            {RECRUITMENT_TIMELINE.map((event) => (
              <li key={`${event.day}-${event.name}`} className="relative">
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#faf6f0] bg-[#001f3f]"
                />
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold uppercase tracking-wide text-orange-600">
                    {event.month} {event.day}
                  </span>
                  <span className="text-xs text-gray-500">{event.time}</span>
                </div>
                <h3 className="mt-0.5 text-lg font-semibold text-green-800">
                  {event.name}
                </h3>
                {event.location && (
                  <p className="mt-0.5 text-sm text-gray-600">{event.location}</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
