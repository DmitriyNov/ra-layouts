function ShopItem ({item}) {

    return (
        <div className="item-container">
            <div className="item-img" style={{backgroundImage: "url(" + item.img + ")"}}></div>
            <h3 className="item-name">{item.name}</h3>
            <p className="item-color">{item.color}</p>
            <p className="item-price">${item.price}</p>
            <button className="item-button btn btn-outline btn-error btn-sm">Add to Cart</button>
         </div>
    )
}

export default ShopItem
