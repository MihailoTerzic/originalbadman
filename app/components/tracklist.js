import Link from "next/link"
import Image from "next/image"

const tracks = [
  { title: "101 Suza", slug: "101-suza", image: "/images/101suza.jpg" },
  { title: "Pronto", slug: "pronto", image: "/images/pronto.jpg" },
  { title: "Bonjour", slug: "bonjour", image: "/images/bonjour.jpg" },
  { title: "Amorova Strela", slug: "amorova-strela", image: "/images/amorova-strela.jpg" },
  { title: "Knock Knock", slug: "knock-knock", image: "/images/knock-knock.jpg" },
  { title: "Mane", slug: "mane", image: "/images/mane.jpg" },
  { title: "Delinquente", slug: "delinquente", image: "/images/delinquente.jpg" },
  { title: "Original Badman", slug: "original-badman", image: "/images/original-badman.jpg" },
]

export default function TrackGrid() {
  return (
    <section id="tracklist" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-white font-serif">
        Tracklist
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tracks.map((track) => (
          <Link key={track.slug} href={`/songs/${track.slug}`} className="group relative block aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image
              src={track.image}
              alt={track.title}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-sm sm:text-base font-semibold px-2">
                {track.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
