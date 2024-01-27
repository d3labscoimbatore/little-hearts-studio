"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="container">
      <div className="animation-confetti">
        <lottie-player
          id="confetti"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/93be8bdf-becc-438d-92ba-8e9b8c69a5b8/IPIp0BvvJB.json"
        ></lottie-player>
      </div>
      <div className="title">
        <p className="ViewTitle">
          little hearts studio <span className="lineBreak">coming soon</span>
        </p>
      </div>
      <div className="animation-logo">
        <lottie-player
          id="animation-logo"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/9950988c-e8af-4e07-95f1-d73279e2ed91/DoC4UgzS4a.json"
        ></lottie-player>
      </div>
    </div>
  );
}
