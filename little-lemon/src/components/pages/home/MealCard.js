import "./MealCard.css"


export default function MealCard({meal}) {
    return (
        <article className="meal-card">
            <div className="meal-card-img">
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className="meal-card-header">
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
            </div>
            <div className="meal-card-body">
                <p>{meal.description}</p>
            </div>
        </article>
    )
}