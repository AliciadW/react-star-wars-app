export default function FilmCard({ filmData, onCardClick }) {
  function displayDate(date) {
    return date?.split('-')[0] || ''
  }

  return (
    <div className="flex flex-col m-3 p-2 cursor-pointer bg-cardBackground rounded-md hover:bg-cardBackgroundHover" onClick={onCardClick}>
      <h3 className="text-lg font-bold">{filmData.title}</h3>

      <div className="flex justify-between">
        <p>{filmData.director}</p>
        <p>{displayDate(filmData.release_date)}</p>
      </div>
    </div>
  )
}