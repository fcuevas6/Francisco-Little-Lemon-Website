import {meals} from "../data.js"
import MealCard from "./MealCard";
import "./WeeklySpecials.css"

export default function WeeklySpecials() {
    return (
        <section className="container grid week-specials">
            <div className="week-specials-header">
            <h2>This week specials!</h2>
            <button className="primary-btn">See Menu</button>
            </div>
            {meals.map((meal, index) => 
                <MealCard key={index} meal={meal} />
            )}
        </section>

    )
}