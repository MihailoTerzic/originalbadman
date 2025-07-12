// /app/songs/[slug]/page.js
import CreditsSection from "@/app/components/credits";
import songData from "@/app/lib/songData";

export default function SongPage({ params }) {
  const { slug } = params;
  const song = songData[slug];

  if (!song) {
    return <div className="text-white p-8">Song not found</div>;
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* Background video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        playsInline
      >
        <source src={song.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center px-4 font-serif">
        <h1 className="text-5xl sm:text-6xl md:text-8xl uppercase">
          {song.title}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl mt-2 font-bold ">
          OUT NOW
        </h2>
        <p className="py-4 text-sm sm:text-base">Stream now:</p>

        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
        {Object.entries(song.links)
  .filter(([platform]) => platform.toLowerCase() !== 'embed')
  .map(([platform, url]) => (
    <a
      key={platform}
      href={url}
      className="text-xs sm:text-sm md:text-base border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {platform}
    </a>
))}
        </div>

 {/* YouTube Embed */}
<div className="relative z-10 mt-12 px-4 w-full flex justify-center items-center pb-24">
  <div className="w-full max-w-4xl aspect-video">
    <iframe
      src={song.links.embed}
      title={song.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-full rounded-lg border border-white/20"
    ></iframe>
  </div>
</div>
      </div>

   
      <CreditsSection credits={song.credits} />
    </main>
  );
}
