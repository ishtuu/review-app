import './index.css'

const ReviewsCarousel = props => {
  const {reviewDetails} = props
  const {imgUrl, username, description, companyName} = reviewDetails
  return (
    <li className="review-list-container">
      <div className="review-div">
        <img src={imgUrl} className="person-image" alt="username" />
        <h1 className="person-name"> {username} </h1>
        <p className="description"> {description} </p>
        <p className="company-name"> {companyName} </p>
      </div>
    </li>
  )
}

export default ReviewsCarousel
