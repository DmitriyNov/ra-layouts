import ShopCard from "./ShopCard"

function CardsView ({cards }) {

    return (
        <div className="cards-container">
            {cards.map((item) => (
                <ShopCard card={item}/>
            ))}
        </div>
    )
}

export default CardsView