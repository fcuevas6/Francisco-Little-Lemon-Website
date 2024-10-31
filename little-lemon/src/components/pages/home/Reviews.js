import { reviews } from "../data"
import ReviewCard from "./ReviewCard"
import "./Reviews.css"

export default function Reviews() {
    return (
        <section className="container">
            <div className="reviews-wrapper">
                <div>
                <h2>Hear why our customers love us!</h2>
                </div>
                <div className="reviews-container">
                    {reviews.map((review, index) => 
                    <ReviewCard key={index} review={review} />
                    )}
                </div>
            </div>
        </section>
    )
}