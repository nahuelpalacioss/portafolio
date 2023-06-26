import "../styles.css";

export const Card = ({ pokemon: { title, image, url, boostrapColor } }) => {

    return (
    
        <div className={` card text-white ${boostrapColor} card-size animate__animated animate__fadeIn ` }>
            
            <div className="card-header">{ title }</div>
            
            <div className="card-body">
            
                <img className="image-size" src={ image } alt={ title } ></img>
            
             </div>
            
        </div>
    
    )

}
