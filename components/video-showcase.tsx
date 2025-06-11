"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, ExternalLink } from "lucide-react"

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current && !videoFailed) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    } else if (videoFailed) {
      // Open the instructions page if video failed
      window.open('/videos/create-video.html', '_blank')
    }
  }

  const toggleMute = () => {
    if (videoRef.current && !videoFailed) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current && !videoFailed) {
      const time = (Number.parseFloat(e.target.value) / 100) * duration
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVideoError = () => {
    setVideoFailed(true)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6">See our manufacturing in action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the precision and quality of our manufacturing processes through this showcase of our
            capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            {!videoFailed ? (
              <video
                ref={videoRef}
                className="w-full h-auto"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                onError={handleVideoError}
                poster="/images/cnc-press-brake.png"
              >
                <source src="/videos/manufacturing-showcase.mp4" type="video/mp4" />
                {/* Will trigger onError if video fails to load */}
              </video>
            ) : (
              <div className="relative">
                <img 
                  src="/images/cnc-press-brake.png" 
                  alt="Manufacturing showcase" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 right-4 bg-white/80 text-black p-3 rounded-md shadow-md text-sm max-w-xs">
                  Video file is missing. Click play to see instructions.
                </div>
              </div>
            )}

            {/* Control bar */}
            <div className={`${videoFailed ? 'bg-black' : 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent'} p-4`}>
              {/* Progress Bar */}
              <div className="mb-4">
                {!videoFailed ? (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={duration ? (currentTime / duration) * 100 : 0}
                    onChange={handleSeek}
                    className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                ) : (
                  <div className="w-full h-1 bg-gray-600 rounded-lg">
                    <div className="h-full w-0 bg-blue-500 rounded-lg"></div>
                  </div>
                )}
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    {videoFailed ? (
                      <ExternalLink className="w-5 h-5 text-white" />
                    ) : isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                  </button>

                  {!videoFailed && (
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                    </button>
                  )}

                  <span className="text-white text-sm">
                    {videoFailed ? "0:00 / 0:00" : `${formatTime(currentTime)} / ${formatTime(duration)}`}
                  </span>
                </div>

                {!videoFailed && (
                  <button
                    onClick={() => videoRef.current?.requestFullscreen()}
                    className="w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <Maximize className="w-4 h-4 text-white" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-black mb-4">Precision Manufacturing Excellence</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              This video showcases our state-of-the-art manufacturing facility, featuring advanced CNC machinery, laser
              cutting systems, and precision fabrication processes that deliver exceptional quality results for our
              clients across various industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
