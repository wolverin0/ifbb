'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Play, Pause, Volume2, Download, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MusicPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  songName?: string
  eventId?: string
}

export function MusicPreviewModal({ isOpen, onClose, songName = "competition_song.mp3", eventId }: MusicPreviewModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState("0:00")
  const [currentTime, setCurrentTime] = useState("0:00")
  const [volume, setVolume] = useState(100)
  const [showUpload, setShowUpload] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Mock waveform bars
  const waveformBars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    height: Math.random() * 100
  }))

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(formatTime(audio.currentTime))
    }

    const updateDuration = () => {
      setDuration(formatTime(audio.duration))
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    link.download = songName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-md shadow-2xl backdrop-blur">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Escuchar Música</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!showUpload ? (
          <>
            {/* Song Info */}
            <div className="mb-6">
              <p className="text-sm text-slate-400 mb-2">Canción actual</p>
              <p className="text-lg font-semibold text-white truncate">{songName}</p>
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              crossOrigin="anonymous"
            />

            {/* Waveform Visualization */}
            <div className="bg-slate-700/30 rounded-lg p-4 mb-6 flex items-center justify-center h-24">
              <div className="flex items-center justify-center gap-1 h-full">
                {waveformBars.map((bar) => (
                  <div
                    key={bar.id}
                    className={`w-1 rounded-full transition-all duration-200 ${
                      isPlaying ? 'bg-gradient-to-t from-gold to-amber-400' : 'bg-slate-600'
                    }`}
                    style={{
                      height: `${isPlaying ? bar.height + 10 : bar.height / 2}%`,
                      minHeight: '4px'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Time Display */}
            <div className="flex justify-between text-xs text-slate-400 mb-4">
              <span>{currentTime}</span>
              <span>{duration}</span>
            </div>

            {/* Play Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-amber-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-current" />
                ) : (
                  <Play className="w-8 h-8 fill-current ml-1" />
                )}
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3 mb-6 bg-slate-700/20 p-4 rounded-lg">
              <Volume2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <span className="text-sm text-slate-400 w-8 text-right">{volume}%</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleDownload}
                className="flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowUpload(true)}
                className="flex-1"
              >
                <Upload className="w-4 h-4 mr-2" />
                Reemplazar
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Upload Section */}
            <div className="mb-6">
              <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center mb-4">
                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-400 text-sm mb-2">Arrastra tu archivo aquí</p>
                <p className="text-slate-500 text-xs mb-4">o</p>
                <label className="cursor-pointer">
                  <span className="text-gold hover:text-amber-400 font-medium text-sm">
                    Seleccionar archivo
                  </span>
                  <input
                    type="file"
                    accept="audio/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setShowUpload(false)
                      }
                    }}
                  />
                </label>
              </div>
              <p className="text-xs text-slate-500 text-center">MP3, WAV, OGG máximo 10MB</p>
            </div>

            {/* Back Button */}
            <Button
              variant="outline"
              onClick={() => setShowUpload(false)}
              className="w-full"
            >
              Volver
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
