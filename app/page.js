import CreditsSection from "./components/credits";
import Hero from "./components/hero";
import TrackGrid from "./components/tracklist";



export default function Home() {
  return (
    <main className="relative">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0" />

      {/* Content Over Video */}
      <div className="relative z-10">
        <Hero />
        
      </div>
    </main>
  )
}
