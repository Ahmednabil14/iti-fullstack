import { useState } from "react";

function CardInfo () {
    const [title, setTitle] = useState("Card Title from state")

    const changeTitle = (e) => {
        const new_title = e.target.value.length > 7 ? "Long Title" :
        e.target.value.length > 3 ? "Medium Title" : "Short Title"
        setTitle(new_title)
    }

    return <>
        <input type="text" className="mb-3" onChange={changeTitle}/>
        <h5 class="card-title">{title}</h5>
        <p style={{color: title === "Short Title" ? "green" : "red"}} >Card Description</p>
    </>
}

export default CardInfo;