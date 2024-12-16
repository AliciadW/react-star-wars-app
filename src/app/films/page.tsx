'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image';
import FilmCard from '@/app/components/FilmCard';
import FilmDetails from '@/app/components/FilmDetails';

import "@/styles/films.css"

export default function Films() {

  const [films, setFilms] = useState(null)
  const [film, setFilm] = useState(null)

  useEffect(() => {
    async function fetchFilms() {
      const filmsData = await fetch('https://swapi.tech/api/films')
      const filmsResponse = await filmsData.json()

      setFilms(filmsResponse.result)
    }

    fetchFilms()
  }, []);

  if(!films) return <div>Loading...</div>

  function displayFilmContent(filmDetails) {
    setFilm(filmDetails)
  }

  return (
    <div
      className="grid grid-rows-[15px_1fr_15px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <Image src="/icons8.svg" alt="" width={50} height={50}/>
          <h2 className="text-xl font-bold mx-3">FILMS</h2>
          <Image src="/icons8.svg" alt="" width={50} height={50}/>
        </div>

        <p className="text-lg font-bold my-8">Select a film to see more details about it.</p>
      </div>


      <div className="flex gap-4 items-center w-full">
        <div className="films-container-left w-2/4">
          <ul className="m-4">
            {films.map((film) => (
              <li key={film.uid}>
                <FilmCard filmData={film.properties} onCardClick={() => displayFilmContent(film.properties)}/>
              </li>
            ))}
          </ul>
        </div>

        <div className="films-container-right w-2/4">
          {film && <FilmDetails film={film}/>}
        </div>
      </div>
    </div>
  )
}