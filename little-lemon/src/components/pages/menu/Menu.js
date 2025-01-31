import "./Menu.css";
import "../home/MealCard.css";
import { meals } from "../data.js";
import MealCard from "../home/MealCard.js";
import React, { useState } from "react";

export default function Menu({cartItems}) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (meal) => {
        setCartItems((prevItems) => [...prevItems, meal]);
    };

    return (
        <>
            <section className="container">
                <div className="menu-container">
                    <h2>Seasonal Menu</h2>
                    <div>
                        {meals.map((meal, index) => (
                            <MealCard key={index} meal={meal} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
