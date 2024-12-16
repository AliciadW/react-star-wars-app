'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

import Image from 'next/image';
import CharacterCard from '@/app/components/CharacterCard';

export default function Characters() {
  const params = useSearchParams()
  const filmId = params.get('film')
  const characterIds = []
  const [film, setFilm] = useState(null)

  useEffect(() => {
    async function fetchFilm() {
      const filmData = await fetch(`https://swapi.tech/api/films/${filmId}`)
      const filmResponse = await filmData.json()

      setFilm(filmResponse.result)
    }

    fetchFilm()
  }, []);


  if (!film) return <div>Loading...</div>

  if (film.properties.characters) {
    const filmCharacters = film.properties.characters

    // loop through character urls, get ids for all
    filmCharacters.forEach((characterUrl: string) => {
      characterIds.push(characterUrl.split('/')[5])
    })
  }

  // TODO: paginate; for now only get first 5

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <Image src="/icons8.svg" alt="" width={50} height={50}/>
        <h2 className="text-xl font-bold mx-3">Characters {film && `in ${film.properties.title}`}</h2>
        <Image src="/icons8.svg" alt="" width={50} height={50}/>
      </div>

      <ul className="m-4">
        {characterIds.slice(0, 5).map((characterId, index) => (
          <li key={index}>
            <CharacterCard characterId={characterId}/>
          </li>
        ))}
      </ul>
    </div>
  )
}