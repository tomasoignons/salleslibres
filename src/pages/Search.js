import React from "react";
import "../style/pages/search.scss"

const Search = ()=>{
    return(
        <div className="image-chantier-container">
            <img className="image-chantier" src="./img/chantier.jpg" alt="logo"/>
            <h1 className="title-travaux">Des travaux sont actuellement en cours, revenez plus tard !</h1>
        </div>
    )
}

export default Search