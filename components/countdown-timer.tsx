"use client"

import { useEffect, useState } from "react"
import { Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CountdownTimerProps {
  onClose: () => void
}

export function CountdownTimer({ onClose }: CountdownTimerProps) {
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

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground rounded-2xl shadow-2xl p-5 min-w-[280px] border-2 border-white/20 backdrop-blur-sm">
        {/* Close button */}
        <Button
          onClick={handleClose}
          variant="ghost"
          size="icon"
          className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-background text-foreground hover:bg-background/90 shadow-lg"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold opacity-90">Tiempo restante</p>
            <p className="text-[10px] opacity-75">para completar tu compra</p>
          </div>
        </div>

        {/* Timer display */}
        <div className="relative mb-4">
          <div className="flex items-center justify-center gap-1 mb-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] text-center">
              <div className="text-4xl font-black leading-none tabular-nums">{String(minutes).padStart(2, "0")}</div>
              <div className="text-[10px] font-semibold mt-1 opacity-75">MIN</div>
            </div>
            <div className="text-3xl font-black opacity-75 animate-pulse">:</div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] text-center">
              <div className="text-4xl font-black leading-none tabular-nums">{String(seconds).padStart(2, "0")}</div>
              <div className="text-[10px] font-semibold mt-1 opacity-75">SEG</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Warning message */}
        {timeLeft <= 60 && timeLeft > 0 && (
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 animate-pulse">
            <p className="text-xs font-bold text-center">¡Apurate! Tu tiempo está por vencer</p>
          </div>
        )}

        {timeLeft === 0 && (
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <p className="text-xs font-bold text-center">Tiempo agotado</p>
          </div>
        )}
      </div>
    </div>
  )
}
