import "./MealCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons"


export default function MealCard({ meal }) {
    return (
        <div className="meal-card">
                <img src={meal.image} alt={meal.name} />
                <div className="meal-card-heading">
                    <h3>{meal.name}</h3>
                    <p>{meal.price}</p>
                </div>
                <p>{meal.description}</p>
                <p><strong>Order Delivery</strong><span className="delivery-icon"><FontAwesomeIcon icon={faPersonBiking}/></span></p>
        </div>
    )
}