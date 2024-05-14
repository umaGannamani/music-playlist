import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {musicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = musicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li>
      <div className="music-list-item">
        <div className="track-info-container">
          <img className="music-track-image" src={imageUrl} alt="track" />
          <div className="name-genre-container">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="duration-delete-container">
          <p className="duration">{duration}</p>
          <button
            className="delete-button"
            type="button"
            data-testid="delete"
            onClick={onDeleteTrack}
          >
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItem
