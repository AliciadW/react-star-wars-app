'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router =  useRouter()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="/star-wars.svg"
          alt="Star Wars logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex items-center flex-col">
          <div className="flex gap-4 items-center">
            <button type="button" className="text-lg font-bold" onClick={() => router.push('/films')} >Films</button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Built with SWAPI</p>
      </footer>
    </div>
  );
}
