import { useEffect, useState } from "react";
import cateringVideo from "../assets/catering-hero.mp4";

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const duration = 3200;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const value = Math.min(
        Math.round((elapsed / duration) * 100),
        100
      );

      setProgress(value);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setLeaving(true);

          setTimeout(() => {
            onComplete();
          }, 1100);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div
      className={`catering-loader ${
        leaving ? "catering-loader--exit" : ""
      }`}
    >
      {/* Catering video */}
      <video
        className="catering-loader__video"
        src={cateringVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Cinematic overlays */}
      <div className="catering-loader__dark" />
      <div className="catering-loader__vignette" />

      {/* Warm light */}
      <div className="catering-loader__light" />

      {/* Animated steam */}
      <div className="steam steam-1" />
      <div className="steam steam-2" />
      <div className="steam steam-3" />

      {/* Content */}
      <div className="catering-loader__content">

        {/* Top label */}
        <div className="catering-loader__top">
          <span />
          <p>PREMIUM CATERING · BENGALURU</p>
          <span />
        </div>

        {/* Main text */}
        <div className="catering-loader__message">
          <p className="message-small">
            FRESHLY PREPARED
          </p>

          <h1>
            Made with
            <em> passion.</em>
          </h1>

          <div className="message-line">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className="message-small message-bottom">
            BEAUTIFULLY SERVED
          </p>
        </div>

        {/* Brand */}
        <div className="catering-loader__brand">
          <span>AURELIA</span>
          <small>CATERING & EVENTS</small>
        </div>

        {/* Progress */}
        <div className="catering-loader__loading">

          <div className="loading-top">
            <span>
              {progress < 30
                ? "PREPARING THE EXPERIENCE"
                : progress < 60
                  ? "CRAFTING YOUR MENU"
                  : progress < 90
                    ? "SETTING THE TABLE"
                    : "READY TO SERVE"}
            </span>

            <strong>
              {String(progress).padStart(2, "0")}%
            </strong>
          </div>

          <div className="loading-bar">
            <div
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="catering-loader__bottom">
        <span>CRAFTED FLAVOURS</span>
        <b>✦</b>
        <span>CHERISHED CELEBRATIONS</span>
      </div>

      {/* Exit curtains */}
      <div className="loader-curtain loader-curtain-left" />
      <div className="loader-curtain loader-curtain-right" />
    </div>
  );
}

export default Preloader;