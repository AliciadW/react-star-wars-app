export default function FilmDetails({film}) {
  return (
    <div>
      <p>Episode {film.episode_id}</p>
      <p className="mt-2">{film.opening_crawl}</p>
      <p className="mt-2">View {film.characters.length} characters</p>
      <p className="mt-2">View {film.planets.length} planets</p>
      <p className="mt-2">View {film.species.length} species</p>
      <p className="mt-2">View {film.starships.length} starships</p>
      <p className="mt-2">View {film.vehicles.length} vehicles</p>
    </div>
  )
}