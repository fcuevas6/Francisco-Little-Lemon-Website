import "./Menu.css"
import { meals } from "../data.js"
import MenuCard from "./MenuCards"

export default function Menu() {
    return (
        <section className="container">
            <div className="menu-container">
            <h2>Seasonal Menu</h2>
            </div>
            <div className="menu-cards">
                {meals.map((meal, index) =>
                    <MenuCard key={index} meal={meal} />
                )}
            </div>
        </section>
    )
}