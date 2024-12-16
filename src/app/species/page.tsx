import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <Image src="/icons8.svg" alt="" width={50} height={50}/>
        <h2 className="text-xl font-bold mx-3">Species</h2>
        <Image src="/icons8.svg" alt="" width={50} height={50}/>
      </div>

      <p className="text-lg font-bold my-8">Coming soon...</p>
    </div>
  )
}