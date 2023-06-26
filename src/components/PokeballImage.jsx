import { Card } from "./Card";
import "../styles.css";
import { useState } from "react";



export const PokeballImage = ({ pokemon } ) => {

    const [onCard, setOnCard] = useState(false);

    const handleMouseOver = () => {

        setOnCard(true);

    };

    const handleMouseOut = () => {

        setOnCard(false);

    }
    

    return (
    
        <>
    
            <img onMouseOver={ handleMouseOver } onMouseOut={ handleMouseOut } className="pokeball-image animate__animated animate__fadeInUp" src="./src/images/pokeball.png" alt="pokeball"></img>
            
            { onCard ? <Card pokemon = { pokemon } />  : null }

        </>

    )

}
