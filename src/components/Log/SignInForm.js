import React, { useState } from "react";
import axios from "axios";

import "../../style/pages/profil.scss"
import Loader from "../upload/Loader";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const [loader, setLoader] = useState(false)


  const signupaction = () => {
    const container = document.getElementById('container');
	  container.classList.add("right-panel-active");
  };

  const signinaction = () => {
    const container = document.getElementById('container');
  	container.classList.remove("right-panel-active");
  };

  const handlelogin = (e) => {
    setLoader(true)
    e.preventDefault();
    const emailError = document.getElementById("emailloginerror")
    const passwordError = document.getElementById("passwordloginerror")
    const messageError = document.getElementById("messageloginerror")
    console.log("ici")
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    }).then((res) => {
      if (res.data.errors) {
        if (res.message) {
          setMessage(res.message)
        }
        console.log(res.data.errors)
        messageError.innerHTML = message
        emailError.innerHTML = res.data.errors.email;
        passwordError.innerHTML = res.data.errors.password;
        setLoader(false)
      } else {
        setLoader(false)
        window.location = "/documents"
      }
    })
    .catch((err)=>{
        console.log(err)
        setLoader(false)
    })
  };

  const [formSubmit, setFormSubmit] = useState(false)
  const [pseudo, setPseudo] = useState("")
  const [email_entrée, setEmail_entrée] = useState("")
  const [password_entree, setPassword_entree] = useState("")
  const [controlPassword, setControlPassword] = useState("")

  const handleRegister = async (e)=>{
      e.preventDefault()
      const terms = document.getElementById("terms")
      const pseudoError = document.getElementById("pseudoError")
      const emailError = document.getElementById("emailError")
      const passwordError = document.getElementById("passwordError")
      const passwordConfirmError = document.getElementById("passwordConfirmError")
      const termsError = document.getElementById("checkbox-error")

      passwordConfirmError.innerHTML =""
      termsError.innerHTML = ""

      if (password_entree !== controlPassword || !terms.checked){
          if (password_entree!==controlPassword){
            passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas"
          }
          if (!terms.checked)
              termsError.innerHTML = "Veuillez valider les Conditions générales d'utilisation (surtout celles de Discord)"
      } else{
          setLoader(true)
          await axios({
              method : "post",
              url : `${process.env.REACT_APP_API_URL}api/user/register`,
              data : {
                  pseudo : pseudo,
                  email : email_entrée,
                  password : password_entree
              }
          })
              .then((res)=>{
                  if (res.data.errors){
                      pseudoError.innerHTML = res.data.errors.pseudo
                      emailError.innerHTML = res.data.errors.email
                      passwordError.innerHTML = res.data.errors.password
                      setLoader(false)
                  } else {
                      setLoader(false)
                      window.location = "/verify"
                  }
              })
              .catch((err)=>{
                  console.log(err)
                  setLoader(false)
              })
      }
  }

  return (
    <div>
    <div className="container" id="container">
	<div className="form-container sign-up-container">
		<form className = "form-login" action="#" onSubmit={handleRegister}>
			<h1>Créer un compte</h1>
      <br/>
			<span className="span-login">En utilisant votre adresse email @edufenelon.org</span>

      <div className="form-control">
        <input type="value" required={true} onChange={(e) => setPseudo(e.target.value)}/>
        <label>
            <span style={{transitionDelay : 0 + "ms"}}>N</span>
            <span style={{transitionDelay : 50 + "ms"}}>o</span>
            <span style={{transitionDelay : 100 + "ms"}}>m</span>
            <span style={{transitionDelay : 150 + "ms"}}> </span>
            <span style={{transitionDelay : 200 + "ms"}}>d</span>
            <span style={{transitionDelay : 250 + "ms"}}>'</span>
            <span style={{transitionDelay : 300 + "ms"}}>u</span>
            <span style={{transitionDelay : 400 + "ms"}}>t</span>
            <span style={{transitionDelay : 450 + "ms"}}>i</span>
            <span style={{transitionDelay : 500 + "ms"}}>l</span>
            <span style={{transitionDelay : 550 + "ms"}}>i</span>
            <span style={{transitionDelay : 600 + "ms"}}>s</span>
            <span style={{transitionDelay : 650 + "ms"}}>a</span>
            <span style={{transitionDelay : 700 + "ms"}}>t</span>
            <span style={{transitionDelay : 750 + "ms"}}>e</span>
            <span style={{transitionDelay : 800 + "ms"}}>u</span>
            <span style={{transitionDelay : 850 + "ms"}}>r</span>
        </label>
        <div className="pseudo error" id="pseudoError"></div>
      </div>

      <div className="form-control">
        <input type="value" required={true} onChange={(e) => setEmail_entrée(e.target.value)}/>
        <label>
            <span style={{transitionDelay : 0 + "ms"}}>A</span>
            <span style={{transitionDelay : 50 + "ms"}}>d</span>
            <span style={{transitionDelay : 100 + "ms"}}>r</span>
            <span style={{transitionDelay : 150 + "ms"}}>e</span>
            <span style={{transitionDelay : 200 + "ms"}}>s</span>
            <span style={{transitionDelay : 250 + "ms"}}>s</span>
            <span style={{transitionDelay : 300 + "ms"}}>e</span>
            <span style={{transitionDelay : 400 + "ms"}}> </span>
            <span style={{transitionDelay : 450 + "ms"}}>e</span>
            <span style={{transitionDelay : 500 + "ms"}}>m</span>
            <span style={{transitionDelay : 550 + "ms"}}>a</span>
            <span style={{transitionDelay : 600 + "ms"}}>i</span>
            <span style={{transitionDelay : 650 + "ms"}}>l</span>
        </label>
        <div className="email error" id="emailError"></div>
      </div>

      <div className="form-control">
        <input type="password" required={true} onChange={(e) => setPassword_entree(e.target.value)}/>
        <label>
            <span style={{transitionDelay : 0 + "ms"}}>M</span>
            <span style={{transitionDelay : 50 + "ms"}}>o</span>
            <span style={{transitionDelay : 100 + "ms"}}>t</span>
            <span style={{transitionDelay : 150 + "ms"}}> </span>
            <span style={{transitionDelay : 200 + "ms"}}>d</span>
            <span style={{transitionDelay : 250 + "ms"}}>e</span>
            <span style={{transitionDelay : 300 + "ms"}}> </span>
            <span style={{transitionDelay : 400 + "ms"}}>p</span>
            <span style={{transitionDelay : 450 + "ms"}}>a</span>
            <span style={{transitionDelay : 500 + "ms"}}>s</span>
            <span style={{transitionDelay : 550 + "ms"}}>s</span>
            <span style={{transitionDelay : 600 + "ms"}}>e</span>
        </label>
        <div className="password error" id="passwordError"></div>
      </div>

      <div className="form-control">
        <input type="password" required={true} onChange={(e) => setControlPassword(e.target.value)}/>
        <label>
            <span style={{transitionDelay : 0 + "ms"}}>V</span>
            <span style={{transitionDelay : 50 + "ms"}}>a</span>
            <span style={{transitionDelay : 100 + "ms"}}>l</span>
            <span style={{transitionDelay : 150 + "ms"}}>i</span>
            <span style={{transitionDelay : 200 + "ms"}}>d</span>
            <span style={{transitionDelay : 250 + "ms"}}>e</span>
            <span style={{transitionDelay : 300 + "ms"}}>r</span>
            <span style={{transitionDelay : 400 + "ms"}}> </span>
            <span style={{transitionDelay : 450 + "ms"}}>m</span>
            <span style={{transitionDelay : 500 + "ms"}}>o</span>
            <span style={{transitionDelay : 550 + "ms"}}>t</span>
            <span style={{transitionDelay : 600 + "ms"}}> </span>
            <span style={{transitionDelay : 650 + "ms"}}>d</span>
            <span style={{transitionDelay : 700 + "ms"}}>e</span>
            <span style={{transitionDelay : 750 + "ms"}}> </span>
            <span style={{transitionDelay : 800 + "ms"}}>p</span>
            <span style={{transitionDelay : 850 + "ms"}}>a</span>
            <span style={{transitionDelay : 900 + "ms"}}>s</span>
            <span style={{transitionDelay : 950 + "ms"}}>s</span>
            <span style={{transitionDelay : 1000 + "ms"}}>e</span>
        </label>
        <div className="password-conf error"id="passwordConfirmError"></div>
      </div>

      <div className="toggle-divbox">
        <label className="toggle-switch">
          <input type="checkbox" id="terms"/>
            <div className="toggle-switch-background">
              <div className="toggle-switch-handle"></div>
            </div>
        </label>
        <div className="CGU">
          Valider les CGU
        </div>


      </div>
      <div id="checkbox-error" className="error checkbox-error"></div>


			<button>Créer un compte</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className="form-login"onSubmit={handlelogin}>
			<h1>Se connecter</h1>
			<span className="span-login">Ou utiliser votre compte</span>


      <div className="form-control">
        <input type="value" required={true} onChange={(e) => setEmail(e.target.value)}/>
        <label>
            <span style={{transitionDelay : 0 + "ms"}}>A</span>
            <span style={{transitionDelay : 50 + "ms"}}>d</span>
            <span style={{transitionDelay : 100 + "ms"}}>r</span>
            <span style={{transitionDelay : 150 + "ms"}}>e</span>
            <span style={{transitionDelay : 200 + "ms"}}>s</span>
            <span style={{transitionDelay : 250 + "ms"}}>s</span>
            <span style={{transitionDelay : 300 + "ms"}}>e</span>
            <span style={{transitionDelay : 400 + "ms"}}> </span>
            <span style={{transitionDelay : 450 + "ms"}}>e</span>
            <span style={{transitionDelay : 500 + "ms"}}>m</span>
            <span style={{transitionDelay : 550 + "ms"}}>a</span>
            <span style={{transitionDelay : 600 + "ms"}}>i</span>
            <span style={{transitionDelay : 650 + "ms"}}>l</span>
        </label>
        <div className="pseudo error" id="pseudologinerror"></div>
      </div>

      <div className="form-control">
        <input type="password" required={true} onChange={(e) => setPassword(e.target.value)}/>
        <label>
            <span style={{transitionDelay : 0 + "ms"}}>M</span>
            <span style={{transitionDelay : 50 + "ms"}}>o</span>
            <span style={{transitionDelay : 100 + "ms"}}>t</span>
            <span style={{transitionDelay : 150 + "ms"}}> </span>
            <span style={{transitionDelay : 200 + "ms"}}>d</span>
            <span style={{transitionDelay : 250 + "ms"}}>e</span>
            <span style={{transitionDelay : 300 + "ms"}}> </span>
            <span style={{transitionDelay : 400 + "ms"}}>p</span>
            <span style={{transitionDelay : 450 + "ms"}}>a</span>
            <span style={{transitionDelay : 500 + "ms"}}>s</span>
            <span style={{transitionDelay : 550 + "ms"}}>s</span>
            <span style={{transitionDelay : 600 + "ms"}}>e</span>
        </label>
        <div className="password error" id="passwordloginerror"></div>
        <div className="password error" id="messageloginerror"></div>
      </div>


			<a href="#" className="forgot-password">Oublie de mot de passe ?</a>
			<button>Se connecter</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Vous revoilà !</h1>
				<p>Pour vous connecter, merci de renseigner vos information</p>
				<button className="ghost" id="signIn" onClick={signinaction}>Se connecter</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Salut, collègue !</h1>
				<p>Entre tes informations et commence le voyage avec nous</p>
				<button className="ghost" id="signUp" onClick={signupaction}>S'inscrire</button>
			</div>
		</div>
	</div>
  { loader ? (
    <>
    <Loader/>
    </>
  ) : (
    <>
    </>
  )}
</div>
</div>

  );
};

export default SignInForm;
