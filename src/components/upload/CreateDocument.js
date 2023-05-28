import React, { Fragment, useRef, useState } from "react";
import "../../style/pages/document.form.scss"
import axios from "axios";
import Loader from "./Loader";
import { useSelector } from "react-redux";

const CreateDocument = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState()
  const [professeur, setProfesseur] = useState()
  const [note, setNote] = useState()
  const [matiere, setMatiere] = useState("")
  const userData = useSelector((state)=> state.userReducer)

  const [loader, setLoader] = useState(false)
  
  const scrollToTop = useRef(null)


  const onChangefile = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (scrollToTop.current){
      scrollToTop.current.scrollIntoView({behavior : "smooth"})
    }

    setLoader(true)
    if(title.length < 4){
      document.getElementById("errorforpostdoc").innerHTML = `merci de mettre un titre d'au moins 4 caractères`
      setLoader(false)
      return
    }
    if(title.length > 120){
      document.getElementById("errorforpostdoc").innerHTML = `merci de mettre un titre moins long`
      setLoader(false)
      return
    }
    if(description.length > 1499){
      document.getElementById("errorforpostdoc").innerHTML = `Merci pour le roman, mais met une description moins longue stp`
      setLoader(false)
      return
    }
    if(professeur.length > 49){
      document.getElementById("errorforpostdoc").innerHTML = `Je ne connais pas de professeur avec un nom de plus de 50 caractères`
      setLoader(false)
      return
    }
    if(title.length > 120){
      document.getElementById("errorforpostdoc").innerHTML = `Une note, c'est 9 caractères maximum. Qu'est ce que tu fous à mettre n'importe quoi ?`
      setLoader(false)
      return
    }

    if(matiere === ""){
      document.getElementById("errorforpostdoc").innerHTML = `Le mieux, c'est de mettre une matière quand même non ?`
      setLoader(false)
      return
    }
    

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/document/upload/${matiere}`,
      withCredentials: true,
      headers : {"Content-Type" : "multipart/form-data"},
      data : {
        file : file
      }
    }).then((res) => {
      if (res.data.errors) {
        console.log(res.data.errors)
      } else {
        axios({
          method : "post",
          url : `${process.env.REACT_APP_API_URL}api/document`,
          withCredentials : true,
          data : {
            title : title,
            description : description,
            professeur : professeur,
            note : note,
            url : res.data.url,
            auteur : userData._id,
            auteur_name : userData.pseudo,
            matiere : matiere,        
          }
        })
      .then((docs) =>{
        axios({
          method : "post",
          url : `${process.env.REACT_APP_API_URL}api/user/pieces/add`,
          withCredentials : true,
          data : {
            id : userData._id,
            MUN_pieces : userData.MUN_pieces,
            add : 3
          }
        })
          .then((success)=>{
            userData.MUN_pieces = userData.MUN_pieces + 3
          })
          .catch((err)=>{
            setLoader(false)
            console.log(err)
          })
        setLoader(false)
        window.location="/profil"
      })
      .catch((err) =>{
        document.getElementById("errorforpostdoc").innerHTML = `${err.message}`
        console.log(err.message)
        setLoader(false)
      })
      }
    })
    .catch((err)=>{
        console.log(err)
    })




  };

  return (
    <Fragment>
      <div ref={scrollToTop} />
      <form className = "form-document" onSubmit={onSubmit}>
        <div className="error" id="errorforpostdoc"></div>
        <div className="input-group-title">
          <input className="input-title" required={true} type="text" name="text" autoComplete="off" onChange={(e) => setTitle(e.target.value)}/>
          <label className="user-label label-document">Titre</label>
        </div>

        <div className="input-group-title-description">
          <textarea required={true} type="text" name="text" className="input-description" onChange={(e) => setDescription(e.target.value)}/>
          <label className="user-label label-document">Description</label>
        </div>

        <div className="input-group-title">
          <input className="input-title" required={true} type="text" name="text" autoComplete="off" onChange={(e) => setNote(e.target.value)}/>
          <label className="user-label label-document">Note obtenue</label>
        </div>

        <div className="input-group-title">
          <input className="input-title" required={true} type="text" name="text" autoComplete="off" onChange={(e) => setProfesseur(e.target.value)}/>
          <label className="user-label label-document">Professeur</label>
        </div>

        <div className="document_input">
          <span className="form-title">Choisissez votre fichier</span>
          <p className="form-paragraph">
            fichiers acceptés : tous !
          </p>
          <label htmlFor="file-input" className="drop-container" onChange={onChangefile}>
            <span className="drop-title">Sélectionnez vos fichiers (drag and drop à venir)</span>
              ou
            <input className="input-document" type="file" accept="" required="" id="file-input"/>
          </label>
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
      {loader ? (
        <>
          <Loader/>
        </>
      ): (
        <></>
      )}
      
    </Fragment>
  );
};

export default CreateDocument;
