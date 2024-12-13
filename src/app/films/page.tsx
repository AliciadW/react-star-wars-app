export default async function Films() {
  const filmsData = await fetch('https://swapi.dev/api/films')
  const filmsResponse = await filmsData.json()
  const films = filmsResponse.results

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>FILMS</h1>

      <ul className="m-4">
        {films.map((film) => (
          <li key={film.episode_id}>
            {film.title}
          </li>
        ))}
      </ul>
    </div>
  )
}