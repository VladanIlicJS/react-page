import React from "react"
import Card from "./Card"
import data from "./data.js"
import Navbar from "./Navbar.js"

export default function App(){
    const Data=data.map(item => {
        return (
            <Card 
                key={item.title}
                {...item}
            />
        )
    })

    return(
        <section>
            <Navbar/>
            {Data}
        </section>

    )
}