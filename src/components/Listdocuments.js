import React, { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "./DocumentCard/Document.Card";
import "../style/pages/documents.scss"

const Listdocuments = (numeropage) =>{

    const [loadPost, setLoadPost] = useState(true)
    const [documents, setDocuments] = useState([])
    const [page, setPage] = useState(numeropage.numeropage)




    useEffect(()=>{
        const fetchDocuments = async() =>{
            try{
                console.log(`${process.env.REACT_APP_API_URL}api/document/page/${page}`)
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}api/document/page/${page}`,
                    {withCredentials: true}
                );
                setDocuments(response.data);
                console.log(page)
                setLoadPost(false);
            } catch(err){
                console.log(err)
            }
        }
        fetchDocuments()
    },[page])

    useEffect(() => {
        setPage(numeropage.numeropage);
    }, [numeropage]);

    const pagesuivante = ()=>{
        setPage(parseInt(page)+1)
    }

    const pageprecedente = ()=>{
        setPage(parseInt(page)-1)
    }

    return(
        <div>
            {!loadPost ? (
                <div className="documentContainer">
                {(documents.length > 0) ? (
                    documents.map((document) => (
                        <DocumentCard document={document} key={document._id} />
                    ))
                ) : (
                <div>No documents found</div>
                )}
                </div>

            ) : (
                <div className="loader">Loader</div>
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

export default Listdocuments