import { useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { profile } from '@/content/profile'
import type { IntroVideo } from '@/types/content'

export function VideoIntro({ src, poster, captions }: IntroVideo) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) void video.play()
    else video.pause()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-medium text-primary">
            {profile.initials}
          </div>
          <div>
            <p className="text-sm font-medium">My Intro</p>
            <p className="text-xs text-muted-foreground">{profile.name}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleMute}
          className="text-muted-foreground hover:text-foreground"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </button>
      </div>

      <div className="group relative aspect-video bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          className="size-full object-cover"
          // Driven by the element's events so the button can't disagree with the video.
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onTimeUpdate={(event) => {
            const target = event.currentTarget
            setProgress(target.duration ? (target.currentTime / target.duration) * 100 : 0)
          }}
        >
          {captions && <track kind="captions" src={captions} srcLang="en" label="English" default />}
        </video>
        <button
          type="button"
          onClick={togglePlay}
          // Stays visible while paused; hover-only would hide it entirely on touch.
          className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity focus-visible:opacity-100 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-black">
            {isPlaying ? <Pause className="size-6" /> : <Play className="size-6 pl-0.5" />}
          </span>
        </button>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
          <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
