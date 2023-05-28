import React from "react";
import { useSelector } from "react-redux";
import "../../style/pages/user.profil.scss"
import { NavLink } from "react-router-dom";



const UpdateProfil = ()=>{
    const userData = useSelector((state)=> state.userReducer)

    return(
        <div className="profil-container">
                <div className="card-profil card-munpieces">{userData.MUN_pieces}</div>


                <NavLink to={`/documents/${userData._id}`}>
                    <div className="card-profil card-profil-documents">Documents</div>
                </NavLink>

        </div>
    )
}

export default UpdateProfil