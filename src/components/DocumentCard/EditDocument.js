import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../upload/Loader";

const EditDocument = ()=>{
    const params = useParams()
    const id = params.id
    const userData = useSelector((state)=> state.userReducer);

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState()
    const [professeur, setProfesseur] = useState()
    const [note, setNote] = useState()
    const [matiere, setMatiere] = useState()
    const [loader, setLoader] = useState(false)

    const [docdata, setDocdata] = useState()


    useEffect(()=>{
        const getdocumentdata = async () =>{
            setLoader(true)
            const response = await axios({
            method : "get",
            url : `${process.env.REACT_APP_API_URL}api/document/${id}`,
            withCredentials : true,
            })
            setDocdata(response.data)
            setLoader(false)
        }
        getdocumentdata()
    }, [id])
    
    const onSubmit = async () =>{
        if(userData._id !== docdata.auteur){
            window.location = "/"
        }
        setLoader(true)

        if(matiere === undefined){
            setMatiere(docdata.matiere)
        }
        if(professeur === undefined){
            setProfesseur(docdata.professeur)
        }
        if(note === undefined){
            setNote(docdata.note)
        }
        if(title === undefined){
            setTitle(docdata.title)
        }
        if(description === undefined){
            setDescription(docdata.professeur)
        }
        

        await axios({
            method : "put",
            url : `${process.env.REACT_APP_API_URL}api/document/${id}`,
            withCredentials : true,
            data : {
                title : title,
                description : description,
                note : note,
                professeur : professeur,
                matiere : matiere
            }
        })
            .then((docs)=>{
                setLoader(false)
                window.location.reload(false)
            })
            .catch((err)=>{
                setLoader(false)
                console.log(err)
            })
        setLoader(false)
    }


    return(
        <>
        {docdata ? (
        <>
        <div className="container-document">
            <form className = "form-document" onSubmit={onSubmit}>
                <div className="input-group-title">
                <input className="input-title" required={true} type="text" name="text" autoComplete="off" defaultValue={docdata.title} onChange={(e) => setTitle(e.target.value)} />
                <label className="user-label label-document">Titre</label>
                </div>

                <div className="input-group-title-description">
                <textarea required={true} type="text" name="text" className="input-description" onChange={(e) => setDescription(e.target.value)} defaultValue={docdata.description}/>
                <label className="user-label label-document">Description</label>
                </div>

                <div className="input-group-title">
                <input className="input-title" required={true} type="text" name="text" autoComplete="off" onChange={(e) => setNote(e.target.value)} defaultValue={docdata.note}/>
                <label className="user-label label-document">Note obtenue</label>
                </div>

                <div className="input-group-title">
                <input className="input-title" required={true} type="text" name="text" autoComplete="off" onChange={(e) => setProfesseur(e.target.value)} defaultValue={docdata.professeur}/>
                <label className="user-label label-document">Professeur</label>
                </div>
       
                  
                <h2 className="titre-matieres">MATIERE</h2>
                <div className="matieres">

                    <label htmlFor="français">français</label>
                    <input className="input-document"id="français" type="radio" name="r" value="français" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label htmlFor="philosophie">Philosophie</label>
                    <input className="input-document" id="philosophie" type="radio" name="r" value="philosophie" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label htmlFor="mathématiques">Mathématiques</label>
                    <input className="input-document" id="mathématiques" type="radio" name="r" value="mathématiques" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="physique">Physique</label>
                    <input className="input-document" id="physique" type="radio" name="r" value="physique" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="chimie">Chimie</label>
                    <input className="input-document" id="chimie" type="radio" name="r" value="chimie" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="svt">SVT</label>
                    <input className="input-document" id="svt" type="radio" name="r" value="svt" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="ses">SES</label>
                    <input className="input-document" id="ses" type="radio" name="r" value="ses" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="histoire">Histoire</label>
                    <input className="input-document" id="histoire" type="radio" name="r" value="histoire" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="géographie">Géographie</label>
                    <input className="input-document" id="géographie" type="radio" name="r" value="géographie" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="géopolitique">Géopolitique</label>
                    <input className="input-document" id="géopolitique" type="radio" name="r" value="géopolitique" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="ens-svt">ENS-SVT</label>
                    <input className="input-document" id="ens-svt" type="radio" name="r" value="ens-svt" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="ens-physique">ENS-Physique</label>
                    <input className="input-document" id="ens-physique" type="radio" name="r" value="ens-physique" onChange={(e) => setMatiere(e.target.value)}></input>
                    <label className="label-document" htmlFor="emc">EMC</label>
                    <input className="input-document" id="emc" type="radio" name="r" value="emc" onChange={(e) => setMatiere(e.target.value)}/>
                </div>

                <div className="bouton-container">
                <button className="bouton-document">
                    <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <svg className="svg-button-document" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                        </svg>
                    </div>
                    </div>
                    <span className="span-button-document">Mettre en ligne</span>
                </button>
                </div>
            </form>
        </div>
        </>
        ):(
            <>
            </>
        )}
        {loader ? (
            <>
            <Loader/>
            </>
        ) : (
            <></>
        )}
        </>
        
    )
}

export default EditDocument