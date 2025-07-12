import { FaInstagram, FaYoutube, FaSpotify, FaSoundcloud, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full text-white bg-black/70 text-base sm:text-lg px-8 py-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/20">
      <div className="text-center sm:text-left text-lg sm:text-base font-medium">
        <a href="https://www.instagram.com/te.stdio/" target="_blank" rel="noopener noreferrer" className="hover:underline">
        © {new Date().getFullYear()} TE Studio. All rights reserved. </a>
      </div>
      
      <div className="flex gap-6 text-white text-3xl sm:text-2xl">
        <a href="https://kdmexclusive.com/" target="_blank" rel="noopener noreferrer" aria-label="Website">
          <FaGlobe />
        </a>
        <a href="https://www.instagram.com/corona_gethoven/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@kacketdolemafia" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://open.spotify.com/album/3LETlK3dYIX98jjZVyGXVW" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <FaSpotify />
        </a>
        <a href="https://soundcloud.com/kdmexclusive" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
          <FaSoundcloud />
        </a>
      </div>
    </footer>
  );
}
