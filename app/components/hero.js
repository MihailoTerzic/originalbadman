import React from 'react'

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-white px-4 font-serif text-center">
      <h1 className="text-5xl sm:text-6xl md:text-8xl leading-none">
        ORIGINAL BADMAN
      </h1>
      <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl mt-2">
        OUT NOW
      </h2>
      <p className="py-4 text-sm sm:text-base">Stream now:</p>

      {/* Streaming Links */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
        
            <a
            
            href="https://www.youtube.com/watch?v=U_kWSnL7YYw&list=PL082ucfIPvBTt-S6YE61UH8uuZSK8a64e&ab_channel=KDMExclusive"
            className="text-xs sm:text-sm md:text-base border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
          >
            Youtube
          </a>
          <a
            
            href="https://open.spotify.com/album/3LETlK3dYIX98jjZVyGXVW"
            className="text-xs sm:text-sm md:text-base border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
          >
            Spotify
          </a>
          <a
            
            href="https://www.deezer.com/en/album/780795941"
            className="text-xs sm:text-sm md:text-base border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
          >
            Deezer
          </a>
       
      </div>
    </div>
  )
}
