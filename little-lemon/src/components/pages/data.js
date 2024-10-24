import salmonImg from "./home/assets/salmon.jpg"
import pastaImg from "./home/assets/pasta.jpg"
import bruschettaImg from "./home/assets/bruschetta.jpg"
import saladImg from "./home/assets/greek-salad.jpg"
import lemonImg from "./home/assets/lemon-dessert.jpg"
import aliceImg from "./home/assets/person-1.jpg"
import mikeImg from "./home/assets/person-2.jpg"
import sonyaImg from "./home/assets/person-3.jpg"

export const meals = [
    {
        name: "Grilled Salmon with Mediterranean Salsa",
        image: salmonImg,
        price: "$21.99",
        description: "A perfectly seared salmon fillet topped with a fresh cucumber and tomato salsa, served over a bed of sautéed spinach, and drizzled with a rich balsamic glaze.",
        isSpecial: true
    },
    {
        name: "Beetroot Pasta with Seared Scallop",
        image: pastaImg,
        price: "$18.99",
        description: "Vibrant beetroot-infused pasta, elegantly garnished with a tender seared scallop, fresh herbs, and edible flowers for a stunning presentation.",
        isSpecial: true
    },
    {
        name: "Bruschetta",
        image: bruschettaImg,
        price: "$12.99",
        description: "Grilled bread brushed with garlic, lightly seasoned with salt and olive oil, and topped with fresh, juicy tomatoes and fragrant basil for a burst of Mediterranean flavor.",
        isSpecial: false
    },
    {
        name: "Greek Salad",
        image: saladImg,
        price: "$10.99",
        description: "Crisp lettuce, vibrant peppers, and briny olives, paired with our rich feta, and topped with crunchy garlic and rosemary croutons for a perfect savory finish.",
        isSpecial: false
    },
    {
        name: "Lemon Delight Layered Dessert",
        image: lemonImg,
        price: "$9.99",
        description: "A luscious layered treat featuring zesty lemon filling, light whipped cream, and a crunchy nutty crust, finished with a slice of fresh lemon and a sprinkle of chopped walnuts for the perfect balance of sweet and tangy.",
        isSpecial: true
    }
]

export const reviews = [
    {
        name: "Alice M.",
        image: aliceImg,
        rating: 4,
        review: "The flavors at this Mediterranean gem are incredible! From the fresh, vibrant salads to the perfectly grilled seafood, every dish feels like a trip to the coast."
    },
    {
        name: "Mike A.",
        image: mikeImg,
        rating: 3,
        review: "Amazing atmosphere and even better food! The lemon dessert was the perfect sweet finish after an unforgettable meal of salmon and beetroot pasta."
    },
    {
        name: "Sonya R.",
        image: sonyaImg,
        rating: 4,
        review: "This place never disappoints—authentic Mediterranean dishes with fresh ingredients and bold flavors. Highly recommend the bruschetta and the signature Greek salad!"
    }
]