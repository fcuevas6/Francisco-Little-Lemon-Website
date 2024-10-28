import { meals } from "../data.js"
import MealCard from "./MealCard.js";
import "./WeeklySpecials.css"

export default function WeeklySpecials() {

    const isWeeklySpecial = meals.filter(meal => meal.isSpecial === true)

    return (
        <section className="container week-specials">
            <div className="week-specials-header">
                <h2>This weeks specials!</h2>
                <button className="primary-btn">See Menu</button>
            </div>
            <div className="meal-card-container" >
                {isWeeklySpecial.map((meal, index) => 
                    <MealCard key={index} meal={meal} />
                )}
            </div>
        </section>

    )