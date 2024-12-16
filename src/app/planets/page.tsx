import Image from 'next/image';

export default function Planets() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center">
        <Image src="/icons8.svg" alt="" width={50} height={50}/>
        <h2 className="text-xl font-bold mx-3">PLANETS</h2>
        <Image src="/icons8.svg" alt="" width={50} height={50}/>
      </div>

      <div className="flex gap-4 items-center w-full">
        <p>Planet list</p>
      </div>
    </div>
  )
}