import React from "react"
import "./Menu.css"
import "../home/MealCard.css"
import { meals } from "../data.js"
import MealCard from "../home/MealCard.js"

export default function Menu() {
    return (
        <section className="container">
            <div className="menu-container">
                <h2>Seasonal Menu</h2>
                <div>
                    {meals.map((meal, index) =>
                        <MealCard key={index} meal={meal} />
                    )}
                </div>
            </div>
        </section>
    )
}