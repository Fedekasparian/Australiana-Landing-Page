"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ initialMinutes = 10 }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none">
      <div 
        className="bg-primary text-primary-foreground px-7 py-5 rounded-2xl shadow-2xl text-center ring-1 ring-black/10"
        aria-live="polite"
      >
        <p className="text-sm opacity-90 tracking-wide">⏳ Tiempo restante</p>
        <p className="text-5xl font-extrabold leading-none mt-1 tabular-nums">
          {minutes.toString().padStart(2, "0")}
          <span className="px-1">:</span>
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
