import Image from 'next/image';
import FilmCard from '@/app/components/FilmCard';

export default async function Films() {
  const filmsData = await fetch('https://swapi.dev/api/films')
  const filmsResponse = await filmsData.json()
  const films = filmsResponse.results

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center">
        <Image src='/icons8.svg' alt='' width={50} height={50} />
        <h2 className='text-xl font-bold mx-3'>FILMS</h2>
        <Image src='/icons8.svg' alt='' width={50} height={50} />
      </div>

      <ul className="m-4">
        {films.map((film) => (
          <li key={film.episode_id}>
            <FilmCard title={film.title} director={film.director} date={film.release_date} />
          </li>
        ))}
      </ul>
    </div>
  )
}