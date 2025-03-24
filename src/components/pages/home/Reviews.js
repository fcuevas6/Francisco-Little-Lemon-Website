import React from "react"
import { reviews } from "../data"
import ReviewCard from "./ReviewCard"
import "./Reviews.css"

export default function Reviews() {
    return (
        <section className="reviews-container">
            <div className="reviews">
            <h2>Hear why our customers love us!</h2>
                <div className="review">
                    {reviews.map((review, index) => 
                    <ReviewCard key={index} review={review} />
                    )}
                </div>
            </div>
        </section>
    )
}