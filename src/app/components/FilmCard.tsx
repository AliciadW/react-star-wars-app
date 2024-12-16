/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function FilmCard({ filmData, onCardClick, selected }: {filmData: any, onCardClick: any, selected: boolean}) {
  const isSelected = selected ? 'bg-cardBackgroundSelected' : 'bg-cardBackground'

  function displayDate(date: string) {
    return date?.split('-')[0] || ''
  }

  return (
    <div className={`flex flex-col m-3 p-2 cursor-pointer rounded-md hover:bg-cardBackgroundHover ${isSelected}`} onClick={onCardClick}>
      <h3 className="text-lg font-bold">{filmData.title}</h3>

      <div className="flex justify-between">
        <p>{filmData.director}</p>
        <p>{displayDate(filmData.release_date)}</p>
      </div>
    </div>
  )
}