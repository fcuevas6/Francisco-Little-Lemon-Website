import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./ReviewCard.css"

export default function ReviewCard({ review }) {
    return (
        <div className="review-container">
            <img src={review.image} alt={review.name} className="review-image"/>
            <h3>{review.name}</h3>
            <div className="review-stars">
                {Array.from({ length: review.rating }, (_, index) => (
                    <span className="review-star" key={index}><FontAwesomeIcon icon={faStar} /></span>
                ))}
            </div>
            <p>" {review.review} "</p>
        </div>
    )
}