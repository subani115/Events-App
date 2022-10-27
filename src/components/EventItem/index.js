// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, setActiveEventId} = props
  const {id, name, imageUrl, location} = eventItem

  const onClickDisplayStatus = () => {
    setActiveEventId(id)
    console.log(id)
  }

  return (
    <li className="event-list-item">
      <button
        type="button"
        onClick={onClickDisplayStatus}
        className="button-status"
      >
        <img src={imageUrl} alt="event" className="event-item-image" key={id} />
      </button>
      <p className="name-heading">{name}</p>
      <p className="location-para">{location}</p>
    </li>
  )
}
export default EventItem
