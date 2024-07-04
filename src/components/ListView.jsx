import ShopItem from "./ShopItem"

function ListView ( {items}) {

    return (
        <div className="items-container">
            {items.map((item) => (
                <ShopItem item={item}/>
            ))}
        </div>
    )
}

export default ListView
