import {Link} from "react-router-dom"
import { meals } from "../data.js"
import MealCard from "./MealCard.js";
import "./WeeklySpecials.css"

export default function WeeklySpecials() {

    const isWeeklySpecial = meals.filter(meal => meal.isSpecial === true)

    return (
        <section className="container">
            <div className="week-specials">
                <div className="week-specials-header">
                    <h2>This weeks specials!</h2>
                    <Link to="/menu" className="primary-btn button">See Menu</Link>
                </div>
                <div className="meal-card-container" >
                    {isWeeklySpecial.map((meal, index) => 
                        <MealCard key={index} meal={meal} />
                    )}
                </div>
            </div>
        </section>

    )
}