'use client'

import { useState, useEffect } from 'react'

// TODO: add in proper types
/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface DefaultType {
  [key: string]: any;
}

export default function CharacterCard({ characterId }: {characterId: string}) {
  const [character, setCharacter] = useState<DefaultType | null>(null)

  useEffect(() => {
    async function fetchCharacter() {
      const characterData = await fetch(`https://swapi.tech/api/people/${characterId}`)
      const characterResponse = await characterData.json()

      setCharacter(characterResponse.result)
    }

    fetchCharacter()
  }, []);

  if (!character) return <div>Loading...</div>

  return (
    <div className="flex flex-col border border-cardBackground rounded-md p-2 m-2">
      <p>Name: {character.properties.name}</p>
      <p>Gender: {character.properties.gender}</p>
      <p>Birth year: {character.properties.birth_year}</p>
    </div>
  )
}