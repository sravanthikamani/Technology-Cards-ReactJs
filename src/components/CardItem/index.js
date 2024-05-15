// Write your code here.
import './index.css'

const Technology = props => {
  const {courseList} = props
  const {title, description, imgUrl, className} = courseList
  return (
    <li className={`${className} card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div>
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Technology
