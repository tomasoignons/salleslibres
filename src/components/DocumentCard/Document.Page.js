import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style//components/documentPage.scss"
import { saveAs } from "file-saver"
import { useSelector } from "react-redux";
import Loader from "../upload/Loader";

const DocumentPage = ()=>{
    const params = useParams()
    const id = params.id
    const userData = useSelector((state)=> state.userReducer)
 
    const [loadPost, setLoadPost] = useState(true)
    const [documents, setDocuments] = useState({})
    const [popup, setPopup] = useState(false)

    const [cost, setCost] = useState(1)


    const Popup = ()=>{ 
        setPopup(true)    
        if(documents.auteur === userData._id){
        setCost(0)
        }
    }

    const downloadFile = async ()=>{
        if(userData.MUN_pieces <= 0){
            return
        } else{
            await axios({
                method : "post",
                url : `${process.env.REACT_APP_API_URL}api/user/pieces/substract`,
                withCredentials : true,
                data: {
                    id : userData._id,
                    MUN_pieces : userData.MUN_pieces,
                    enlever : cost
                }
            })
            .then((docs)=>{
                userData.MUN_pieces = userData.MUN_pieces - cost
                saveAs(documents.url, documents.title)
            })
            .catch((err)=>{
                console.log(err)
            })

        }
        
    }

    const closePopup = ()=>{
        setPopup(false)
    }


    useEffect(()=>{
        const fetchDocuments = async() =>{
            try{

                const response = await axios({
                    method : "get",
                    url : `${process.env.REACT_APP_API_URL}api/document/${id}`,
                    withCredentials : true,
                    data : {}
                })
                setDocuments(response.data);
                setLoadPost(false);

            } catch(err){
                console.log(err)
            }
        }
        fetchDocuments()
    },[id])



    return(
        <div className="giga-container-document">
            {!loadPost ? (
                <div className="documentContainer">
                {documents ? (
                    <div>
                        <div className="card-page-document" onClick={Popup}>
                            <div className="circle-page-document"></div>
                            <div className="circle-page-document"></div>
                            <div className="card-inner-page-document">
                                <div className="document-info-container">
                                    <div className="document-title">
                                        <div className="titre">
                                            Titre : 
                                        </div>
                                        <div className="contenu">
                                            {documents.title}
                                        </div>
                                    </div>

                                    <div className="document-title">
                                        <div className="titre">
                                            Description :
                                        </div>
                                        <div className="contenu">
                                            {documents.description}
                                        </div>
                                    </div>

                                    {/* <div className="document-title">
                                        <div className="titre">
                                            Auteur : 
                                        </div>
                                        <div className="contenu">
                                            {documents.auteurname}
                                        </div>
                                    </div>   */}

                                    <div className="document-title">
                                        <div className="titre">
                                            Note :
                                        </div>
                                        <div className="contenu">
                                            {documents.note}
                                        </div>
                                    </div>

                                    
                                    <div className="document-title">
                                        <div className="titre">
                                            Professeur :
                                        </div>
                                        <div className="contenu">
                                            {documents.professeur}
                                        </div>
                                    </div>

                                    <div className="document-title">
                                        <div className="titre">
                                            Matiere : 
                                        </div>
                                        <div className="contenu">
                                            {documents.matiere}
                                        </div>
                                    </div>

                                    <div className="button-download" data-tooltip="Size: 8Mb">
                                        <div className="button-wrapper">
                                            <div className="text-download">Télécharger</div>
                                            <span className="icon-download">
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                <div>No documents found</div>
                )}
                </div>

            ) : (
                <div className="loader"><Loader/></div>
            )}

        {popup ? (
            <div className="popup-confirm">
                <div className="popup-croix" onClick={closePopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-x-filled" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" fill="currentColor" strokeWidth="0" />
                    </svg>
                </div>

                <div className="content-popup">
                    <div className="title-popup">Voulez vous vraiment télécharger ce document ?</div>
                    <div className="cout-popup">Cette action vous coutera {cost} MUN pièce</div>
                    <div className="argent-popup">Vous avez actuellement {userData.MUN_pieces} MUN pièces. N'hésitez pas à  uploader des documents pour en avoir plus !</div>
                    <div className="excuse-popup">*désolé pour la transition atroce, ce sera corrigé dans les prochains jours j'espère</div>
                </div>
                <div className="textpopup"></div>
                <div className="button-download" data-tooltip="Size:8Mb" onClick={downloadFile}>
                    <div className="button-wrapper">
                        <div className="text-download">Télécharger</div>
                        <span className="icon-download">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        ):(
            <>
            </>
        )}

        </div>
    )
}

export default DocumentPage