import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";
import '../style/components/navbar.scss';

const Navbar  = () =>{
    const uid = useContext(UidContext)

    return(
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink to="/">
                        <div className="logo logo_container social-btn flex-center">
                            <img className="img_salles_libres" src="./img/logo_salles_libres.png" alt="logo"/>
                            <span>Salles Libres V2</span>
                        </div>
                    </NavLink>
                </div>

                <div className="se_connecter_container1">
                    <NavLink to="/documents">
                        <div className="se_connecter_container2 social-btn flex-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-door" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 12v.01" />
                                <path d="M3 21h18" />
                                <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
                            </svg>
                            <span className="invite_connection">Voir tous les docs</span>
                        </div>      
                    </NavLink>

                </div>





            {uid ? (
                <>                
                <div className="se_connecter_container1">
                    <NavLink to="/search">
                        <div className="se_connecter_container2 social-btn flex-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                            <span className="invite_connection">Faire une recherche</span>
                        </div>      
                    </NavLink>

                </div>
                <div className="se_connecter_container1">
                        <NavLink to="/createdocument">
                            <div className="se_connecter_container2 social-btn flex-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-folder-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
                                    <path d="M16 19h6" />
                                    <path d="M19 16v6" />
                                </svg>
                                <span className="invite_connection">Ajouter un document</span>
                            </div>      
                        </NavLink>
                    </div>
                    <div className="se_connecter_container1">
                        <NavLink to="/profil">
                            <div className="se_connecter_container2 social-btn flex-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                </svg>
                                <span className="invite_connection">Voir mon profil</span>
                            </div>      
                        </NavLink>
                    </div>


                    <Logout/>
                
                
                </>
                    
            ) : (
                <div className="se_connecter_container1">
                    <NavLink to="/profil">
                        <div className="se_connecter_container2 social-btn flex-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-login" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                            </svg>
                            <span className="invite_connection">Se connecter</span>
                        </div>
                    </NavLink>
                </div>
            )}          
        </div>
        </nav>
    )
}

export default Navbar