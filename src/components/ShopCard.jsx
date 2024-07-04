function ShopCard ({card}) {

    return (
        <div className="card-container" style={{backgroundImage: "url(" + card.img + ")"}} >
            <h3 className="card-name">{card.name}</h3>
            <p className="card-color">{card.color}</p>
            <div className="card-commercial">
                <p className="card-price">${card.price}</p>
                <button className="btn btn-outline btn-error btn-sm">Add to Cart</button>
            </div>
        </div>
    )
}

export default ShopCard