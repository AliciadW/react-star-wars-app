import { useRouter } from 'next/navigation';

export default function FilmDetails({film}) {
  const router =  useRouter()

  return (
    <div>
      <p className="font-bold">Episode {film.episode_id}</p>
      <p className="mt-2">{film.opening_crawl}</p>
      <div className="flex flex-col">
        <button className="mt-2" onClick={() => router.push('/characters')}>View {film.characters.length} characters</button>
        <button className="mt-2" onClick={() => router.push('/planets')}>View {film.planets.length} planets</button>
        <button className="mt-2" onClick={() => router.push('/species')}>View {film.species.length} species</button>
        <button className="mt-2" onClick={() => router.push('/starships')}>View {film.starships.length} starships</button>
        <button className="mt-2" onClick={() => router.push('/vehicles')}>View {film.vehicles.length} vehicles</button>
      </div>
    </div>
  )
}