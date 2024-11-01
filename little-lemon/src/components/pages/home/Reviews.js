import { reviews } from "../data"
import ReviewCard from "./ReviewCard"
import "./Reviews.css"

export default function Reviews() {
    return (
        <section className="reviews-container">
            <h2>Hear why our customers love us!</h2>
                <div className="reviews">
                    {reviews.map((review, index) => 
                    <ReviewCard key={index} review={review} />
                    )}
                </div>
        </section>
    )
}