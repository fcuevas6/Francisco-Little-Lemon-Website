import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./ReviewCard.css"

export default function ReviewCard({ review }) {
    return (
        <div className="review-container">
            <img src={review.image} alt={review.name} className="review-image"/>
            <h3>{review.name}</h3>
            {Array.from({ length: review.rating }, (_, index) => (
                <span key={index}><FontAwesomeIcon icon={faStar} /></span>
            ))}
            <p>" {review.review} "</p>
        </div>
    )
}