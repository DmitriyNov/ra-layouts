function IconSwitch ({icon, onSwitch}) {

    return (
        <div className="icon_switch">
            <span className={"material-symbols-outlined"} onClick={onSwitch}>{icon === "view_module" ? "data_table" : "cards"}</span>
        </div>
    )
}

export default IconSwitch