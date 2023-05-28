import React from "react";
import { NavLink } from "react-router-dom";

const DocumentCard = (document)=>{
    const doc = document.document
    const matiere = doc.matiere

    return(
        <NavLink to={`/document/${doc._id}`}>
        <div className="card-container">
            <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">

                        { matiere === "français" ?(
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ballpen" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 6l7 7l-4 4" />
                                <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z" />
                                <path d="M4 20l1.768 -1.768" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        {matiere === "philosophie"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brain" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
                                <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
                                <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
                                <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
                                <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
                                <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        {matiere === "mathématiques"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-x-divide-y-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 21l18 -18" />
                                <path d="M15 14l3 4.5" />
                                <path d="M21 14l-4.5 7" />
                                <path d="M3 4l6 6" />
                                <path d="M3 10l6 -6" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        {matiere === "physique"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-recharging" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
                                <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
                                <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
                                <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
                                <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
                                <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
                                <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
                                <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
                                <path d="M12 8l-2 4h4l-2 4" />
                                <path d="M12 21a9 9 0 0 0 0 -18" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        
                        {matiere === "chimie"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flask" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 3l6 0" />
                                <path d="M10 9l4 0" />
                                <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        {matiere === "svt"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-virus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
                                <path d="M12 7v-4" />
                                <path d="M11 3h2" />
                                <path d="M15.536 8.464l2.828 -2.828" />
                                <path d="M17.657 4.929l1.414 1.414" />
                                <path d="M17 12h4" />
                                <path d="M21 11v2" />
                                <path d="M15.535 15.536l2.829 2.828" />
                                <path d="M19.071 17.657l-1.414 1.414" />
                                <path d="M12 17v4" />
                                <path d="M13 21h-2" />
                                <path d="M8.465 15.536l-2.829 2.828" />
                                <path d="M6.343 19.071l-1.413 -1.414" />
                                <path d="M7 12h-4" />
                                <path d="M3 13v-2" />
                                <path d="M8.464 8.464l-2.828 -2.828" />
                                <path d="M4.929 6.343l1.414 -1.413" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        
                        {matiere === "ses"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coins" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
                                <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
                                <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
                                <path d="M3 6v10c0 .888 .772 1.45 2 2" />
                                <path d="M3 11c0 .888 .772 1.45 2 2" />
                            </svg>
                        ) : (
                            <></>
                        )}
                        
                        {matiere === "histoire"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-history" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 8l0 4l2 2" />
                                <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                            </svg>
                        ) : (
                            <></>
                        )}
                        
                        {matiere === "géographie"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M3.6 9h16.8" />
                                <path d="M3.6 15h16.8" />
                                <path d="M11.5 3a17 17 0 0 0 0 18" />
                                <path d="M12.5 3a17 17 0 0 1 0 18" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        {matiere === "géopolitique"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tank" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M2 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                                <path d="M6 12l1 -5h5l3 5" />
                                <path d="M21 9l-7.8 0" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        {matiere === "ENS-physique"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-wind-turbine" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M10 11v-2.573c0 -.18 .013 -.358 .04 -.536l.716 -4.828c.064 -.597 .597 -1.063 1.244 -1.063s1.18 .466 1.244 1.063l.716 4.828c.027 .178 .04 .357 .04 .536v2.573" />
                                <path d="M13.01 9.28l2.235 1.276c.156 .09 .305 .19 .446 .3l3.836 2.911c.487 .352 .624 1.04 .3 1.596c-.325 .556 -1 .782 -1.548 .541l-4.555 -1.68a3.624 3.624 0 0 1 -.486 -.231l-2.235 -1.277" />
                                <path d="M13 12.716l-2.236 1.277a3.624 3.624 0 0 1 -.485 .23l-4.555 1.681c-.551 .241 -1.223 .015 -1.548 -.54c-.324 -.557 -.187 -1.245 .3 -1.597l3.836 -2.91a3.41 3.41 0 0 1 .446 -.3l2.235 -1.277" />
                                <path d="M7 21h10" />
                                <path d="M10 21l1 -7" />
                                <path d="M13 14l1 7" />
                            </svg>
                        ) : (
                            <></>
                        )}

                        {matiere === "ENS-physique"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-eco" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" />
                                <path d="M16 22s0 -2 3 -4" />
                                <path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z" />
                            </svg>
                        ) : (
                            <></>
                        )}
                        
                        
                        {matiere === "emc"? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-license" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
                                <path d="M9 7l4 0" />
                                <path d="M9 11l4 0" />
                            </svg>
                        ) : (
                            <></>
                        )}
                        
                        <strong className="doctitle">{doc.title}</strong>
                    </div>
                </div>

                <div className="front">
                    <div className="img">
                        <div className="circle">
                        </div>
                        <div className="circle" id="right">
                        </div>
                        <div className="circle" id="bottom">
                        </div>
                    </div>

                    <div className="front-content">
                        <small className="badge">{doc.professeur}</small>
                        <div className="description_doc_card">
                        <div className="title_card">
                            <p className="title_card">
                            <strong>Description</strong>
                            </p>
                        </div>
                        <p className="card-footer card-description-margin">
                            {doc.description}
                        </p>
                        <div className="title_card avec_note">
                            <p className="title_card">
                            <strong>Note</strong>
                            </p>
                        </div>
                        <p className="card-footer">
                            {doc.note}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </NavLink>
    )
}

export default DocumentCard