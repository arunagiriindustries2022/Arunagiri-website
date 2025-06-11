"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="min-h-screen bg-gray-900">{children}</div>
  }

  return <>{children}</>
}
