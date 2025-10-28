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
    <div className="fixed top-5 right-5 z-50 pointer-events-none">
      <div className="bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg text-center">
        <p className="text-xs opacity-80">⏳ Tiempo restante</p>
        <p className="text-2xl font-bold">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
