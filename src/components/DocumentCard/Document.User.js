import React, { useEffect, useState } from "react";
import axios from "axios";
import DocumentCardUser from "./Document.Card.user";
import { useParams } from "react-router-dom";
import "../../style/pages/documents.user.scss"
import Loader from "../upload/Loader";

const DocumentsUser = (numeropage) =>{
    const params = useParams()
    const id = params.id

    const [loadPost, setLoadPost] = useState(true)
    const [documents, setDocuments] = useState([])
    const [page, setPage] = useState(numeropage.numeropage)


    useEffect(()=>{
        const fetchDocuments = async() =>{
            setLoadPost(true)
            try{
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}api/document/${id}/${page}`,
                    {withCredentials: true}
                );
                setDocuments(response.data);
                console.log(response.data)
                setLoadPost(false);
            } catch(err){
                setLoadPost(false)
                console.log(err)
            }
        }
        fetchDocuments()
    },[page, id])

    useEffect(() => {
        setPage(numeropage.numeropage);
    }, [numeropage]);


    const pagesuivante = ()=>{
        setPage(page+1)
    }

    const pageprecedente = ()=>{
        setPage(page-1)
    }

    return(
        <div>
            {!loadPost ? (
                <div className="documentContainer">
                {(documents.length > 0) ? (
                    documents.map((document) => (
                        <DocumentCardUser document={document} key={document._id} id={id} />
                    ))
                ) : (
                <div>No documents found</div>
                )}
                </div>

            ) : (
                <div className="loader"><Loader/></div>
            )}

            <div className="navigation-button-container">
                {page > 1 ? (
                <button className="btn-navigation" onClick={pageprecedente}>
                    Page précédente
                </button>
                ) : (
                    <div className="il me fallait une div vide ici"></div>
                )}
                {documents.length <12 ? (
                    <div className="il me fallait une div vide ici"></div>
                ) : (
                <button className="btn-navigation" onClick={pagesuivante}>
                    Page suivante
                </button>
                )}

            </div>

        </div>
    )
}

export default DocumentsUser