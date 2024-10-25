import "./AboutUs.css"
import chefsImgA from "./assets/chefs-mario-and-adrian_a.jpg"
import chefsImgB from "./assets/chefs-mario-and-adrian_b.jpg"

export default function AboutUs() {
    return (
        <section className="container">
            <div className="about-us-container">
                <div className="about-us">
                    <h2>This is Little Lemon</h2>
                    <p>Little Lemon was founded by two close friends, Mario and Adrian, 
                        who have worked together for years but feel more like family. Though 
                        only Mario grew up in a Mediterranean household, both chefs share a deep 
                        passion for Mediterranean cuisine. Inspired by the fresh ingredients 
                        and bold flavors of the region, they decided to bring their vision to 
                        Chicago’s vibrant food scene. Mario’s upbringing gave him an intimate 
                        knowledge of traditional recipes, while Adrian’s culinary training brought 
                        a modern touch, making their menu a blend of the old and the new.</p>
                    <p>Their dream was to create a cozy, welcoming spot where people could enjoy 
                        authentic Mediterranean dishes with a contemporary twist. Little Lemon’s 
                        menu reflects the harmony between Mario’s heritage and Adrian’s creativity, 
                        featuring everything from classic Greek salads to inventive dishes like 
                        lemon-infused desserts and fresh seafood plates. Together, they’ve built 
                        more than just a restaurant—they’ve crafted a community-focused space that 
                        celebrates the flavors and spirit of the Mediterranean.</p>
                </div>
                <div className="chefs">
                    <img src={chefsImgA} alt="Chefs cooking and talking" />
                    <img src={chefsImgB} alt="Chefs cooking and talking" />
                </div>
            </div>
        </section>
    )
}