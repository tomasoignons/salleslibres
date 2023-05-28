import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const DocumentCardUser = (document, id)=>{
    const doc = document.document
    const userData = useSelector((state)=> state.userReducer)
    const id_doc = doc._id

    const [confirmpopup, setConfirmpopup] = useState(false)
    
    const conserver_document = ()=>{
        setConfirmpopup(false)
    }

    const deletedocument= ()=>{
        console.log("loool")
        axios({
            method : "delete",
            url : `${process.env.REACT_APP_API_URL}api/document/${id_doc}`,
            withCredentials : true,
        })
        setConfirmpopup(true)
        window.location.reload(false)
    }


    const popupconfirm = ()=>{
        setConfirmpopup(true)
    }

    return(
        <div>
            {confirmpopup ? (
                <div className="confirm-delete-popup">
                    <div className="confirm-delete-title">Vous voulez vraiment supprimer ce document ?</div>
                    <div className="confirm-delete-button"onClick={deletedocument}>
                    <button className="noselect">
                        <span className="text" >Oui supprimer</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                            </svg>
                        </span>
                    </button>
                    </div>

                    <div className="conserver-document-button" onClick={conserver_document}>
                    <button className="conserver">
                        <span className="text">Non conserver</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-tabler icon-tabler-check" width="64" height="64" viewBox="0 0 20 20" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l5 5l10 -10" fill="none"/>
                            </svg>
                        </span>
                        
                    </button>
                    </div>
                </div>
            ) : (
                <></>
            )}

            <div className="card-document-user">
                {userData._id === doc.auteur ?(
                    <>                  
                    <NavLink to={`/edit-document/${id_doc}`}>
                    <div className="edit-document">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#DDDDDD" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                            <path d="M16 5l3 3" />
                        </svg>
                    </div>
                    </NavLink>

                    <div className="delete-document" onClick={popupconfirm}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#DDDDDD" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                    </div>
                    </>

                ) : (
                    <></>
                )}

                
                <div className="content-document-user">
                    <p className="heading-document-user">{doc.title}
                    </p><p className="para-document-user">
                    {doc.description}
                    </p>
                    <NavLink to ={`/document/${doc._id}`}>
                        <button className="btn-document-user">Voir plus</button> 
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default DocumentCardUser