"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="container"> 
      <div className="confetti">
        <lottie-player
          id="confetti"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/f1932573-3e21-4569-abfa-8a485fef6ea0/gxz17L4GPV.json"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          className="confettiContainer"
        ></lottie-player>
      </div>
      <div className="title">
        <p>little hearts studio coming soon.</p>
      </div>
      <div className="littleHeartStudio">
        <lottie-player
          id="littleHeartStudio"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/9950988c-e8af-4e07-95f1-d73279e2ed91/DoC4UgzS4a.json"
          className="animation"
        ></lottie-player>
      </div>
    </div>
  );
}