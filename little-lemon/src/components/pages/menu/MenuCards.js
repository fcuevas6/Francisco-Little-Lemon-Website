import "./MenuCards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';

export default function MenuCard({ meal, addToCart }) {
    return (
        <div className="menu-card-container">
            <div className="menu-card-image">
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className="menu-card-info">
                <div className="menu-item-price">
                    <h3>{meal.name}</h3>
                    <p>{meal.price}</p>
                </div>
                <div className="menu-item-detail">
                    <p>{meal.description}</p>
                    <button onClick={() => addToCart(meal)}>Add to Cart</button>
                        <span className="delivery-icon">
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </span>
                </div>
            </div>
        </div>
    );
}
