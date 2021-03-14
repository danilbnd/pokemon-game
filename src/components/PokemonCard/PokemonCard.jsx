import { React, useState } from "react";
import pokemonS from "./pokemon-card.module.css";
import cardBackSide from "../../assets/img/card-back-side.jpg";

const PokemonCard = ({name, img, id, type, values}) => {
    const [isActive, setActive] = useState(false)
    const handleClick = () => {
        setActive(true)
    }
    return (
        <div className={pokemonS.root} onClick={handleClick}>
            <div className={`${pokemonS.pokemonCard} ${isActive ? pokemonS.active : ''}`}>
                <div className={pokemonS.cardFront}>
                    <div className={`${pokemonS.wrap} ${pokemonS.front}`}>
                        <div className={`${pokemonS.pokemon} ${pokemonS[type]}`}>
                            <div className={pokemonS.values}>
                                <div className={`${pokemonS.count} ${pokemonS.top}`}>{values.top}</div>
                                <div className={`${pokemonS.count} ${pokemonS.right}`}>{values.right}</div>
                                <div className={`${pokemonS.count} ${pokemonS.bottom}`}>{values.bottom}</div>
                                <div className={`${pokemonS.count} ${pokemonS.left}`}>{values.left}</div>
                            </div>
                            <div className={pokemonS.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={pokemonS.info}>
                                <span className={pokemonS.number}>#{id}</span>
                                <h3 className={pokemonS.name}>{name}</h3>
                                <small className={pokemonS.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={pokemonS.cardBack}>
                    <div className={`${pokemonS.wrap} ${pokemonS.back}`}>
                        <img src={cardBackSide} alt="Сard Backed"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PokemonCard;