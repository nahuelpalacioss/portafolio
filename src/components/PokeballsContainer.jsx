import "../styles.css";
import { PokeballImage } from "./PokeballImage";


const pokemonCardArray = [
    
    {

        title: 'Project Kyogre',
        image: './src/images/BwCf.gif',
        url: 'https://www.wikidex.net/wiki/Kyogre',
        boostrapColor: 'bg-primary'

    },

    {
        title: 'Project Groudon',
        image: './src/images/pokémon-groudon.gif',
        url: 'https://www.wikidex.net/wiki/Groudon',
        boostrapColor: 'bg-danger'

    } 

]

const [firstPokemon, secondPokemon] = pokemonCardArray;

export const PokeballsContainer = () => {
    
    return (

        <>
        
            <div className="container pokeball-grid">
                <div className="row ">
                    <div className="col-6 text-center">
                        
                        <PokeballImage pokemon={ firstPokemon } />
                        
                    </div>
                    <div className="col-6 text-center">

                        <PokeballImage pokemon={ secondPokemon } />
                    
                    </div>
                </div>
            </div>
        
        </>

    )
}
