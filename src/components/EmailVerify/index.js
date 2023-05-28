import React, { useState, Fragment, useEffect} from 'react'
import '../../style/pages/emailpage.scss'
import { NavLink, useParams} from "react-router-dom";
import axios from 'axios';

const EmailVerify = () =>{
    
    const [validUrl, setValidUrl] = useState(false)
    const params = useParams()

    useEffect(()=>{
        const verifyEmailUrl = async()=>{
            try {
                const url = `${process.env.REACT_APP_API_URL}api/user/${params.id}/verify/${params.token}`
                const {data} = await axios.get(url);
                console.log(data)
                setValidUrl(true)
            } catch (err) {
                console.log(err)
                setValidUrl(false)
            }
        }
        verifyEmailUrl()
    }, [params])

    return(
        <div className='container-verify'>
            {validUrl? (
                <div className='container-email-verify'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check-filled" width="64" height="64" viewBox="0 0 24 24" strokeidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="#009000" />
                    </svg>
                    <p>Vous avez bien vérifié votre email, veuillez vous connecter</p>
                    <NavLink to="/profil">
                        <button className='bouton-email-verify'>Se connecter</button>
                    </NavLink>
                </div>
            ): (
                <>
                </>
            )}
            {params.id ? (
                <h1>404 Not found</h1>
            ) : (
                <div className='link'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check-filled" width="64" height="64" viewBox="0 0 24 24" strokeidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="#009000" />
                    </svg>
                    <p>Votre inscription vient d'être validée, Un lien vient d'être envoyé à votre email pour le valider</p>
                </div>
            )}
        </div>
    )
}

export default EmailVerify