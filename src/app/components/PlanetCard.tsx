'use client'

import { useState, useEffect } from 'react'

// TODO: add in proper types
/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface DefaultType {
  [key: string]: any;
}

export default function PlanetCard({planetId}: {planetId: string}) {
  const [planet, setPlanet] = useState<DefaultType | null>(null)

  useEffect(() => {
    async function fetchPlanet() {
      const planetData = await fetch(`https://swapi.tech/planets/${planetId}`)
      const planetResponse = await planetData.json()

      setPlanet(planetResponse.result)
    }

    fetchPlanet()
  }, []);

  if (!planet) return <div>Loading...</div>

  return (
    <div className="flex flex-col border border-cardBackground rounded-md p-2 m-2">
      <p>Name: {planet.properties.name}</p>
      <p>Population: {planet.properties.population}</p>
      <p>Terrain: {planet.properties.terrain}</p>
      <p>Climate: {planet.properties.climate}</p>
    </div>
  )
}