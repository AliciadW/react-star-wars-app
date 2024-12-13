export default function FilmCard({title, director, date}) {
  function displayDate(date) {
    return date?.split('-')[0] || ''
  }

  return (
    <div className="flex flex-col m-3 p-2 cursor-pointer bg-cardBackground rounded-md hover:bg-cardBackgroundHover">
      <h3 className='text-lg font-bold'>{title}</h3>

      <div className="flex justify-between">
        <p>{director}</p>
        <p>{displayDate(date)}</p>
      </div>

    </div>
  )
}