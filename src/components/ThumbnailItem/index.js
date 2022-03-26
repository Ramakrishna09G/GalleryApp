// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachList, isActive, clickImage} = props

  const onClickThumbnail = () => {
    clickImage(eachList.id)
  }
  const activeThumbnailClassName = isActive ? 'active-thumbnail' : ''
  return (
    <li className="list-item">
      <button type="button" onClick={onClickThumbnail} className="button">
        <img
          src={eachList.thumbnailUrl}
          alt={eachList.thumbnailAltText}
          className={`thumbnail ${activeThumbnailClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
