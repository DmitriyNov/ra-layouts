import { useState } from "react";
import CardsView from "./CardsView"
import IconSwitch from "./IconSwitch"
import ListView from "./ListView"


function Shop () {
    const [icon, setIcon] = useState("view_module");
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }
    ];
    const onSwitch = function () {
        if (icon === "view_module") {
            setIcon("view_list");
        } else {
            setIcon("view_module");
        }
    }

    return (
        <>
            <IconSwitch className="iconSwitch-container" icon={icon} onSwitch={onSwitch}/>
            {icon === "view_module" ? <CardsView cards={products}/> : <ListView items={products}/>}
        </>
    )
}

export default Shop
