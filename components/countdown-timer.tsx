"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100)

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const progress = (timeLeft / 600) * 100

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative bg-background border-2 border-border rounded-xl shadow-lg p-4 min-w-[240px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <div>
            <p className="text-xs font-medium text-foreground">Tiempo restante</p>
          </div>
        </div>

        <div className="relative mb-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="text-center">
              <div className="text-3xl font-bold leading-none tabular-nums text-foreground">
                {String(minutes).padStart(2, "0")}
              </div>
            </div>
            <div className="text-2xl font-bold text-muted-foreground">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold leading-none tabular-nums text-foreground">
                {String(seconds).padStart(2, "0")}
              </div>
            </div>
          </div>

          <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {timeLeft <= 60 && timeLeft > 0 && (
          <div className="bg-muted rounded-md px-3 py-1.5">
            <p className="text-xs font-medium text-center text-foreground">Tu tiempo está por vencer</p>
          </div>
        )}

        {timeLeft === 0 && (
          <div className="bg-muted rounded-md px-3 py-1.5">
            <p className="text-xs font-medium text-center text-destructive">Tiempo agotado</p>
          </div>
        )}
      </div>
    </div>
  )
}
