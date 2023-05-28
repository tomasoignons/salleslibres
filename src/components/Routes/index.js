import React from "react"
import { BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Home from "../../pages/Home"
import Profil from "../../pages/Profil"
import Navbar from "../Navbar"
import Document from "../../pages/Document"
import EmailVerify from "../EmailVerify"
import Listdocuments from "../Listdocuments"
import DocumentPage from "../DocumentCard/Document.Page"
import DocumentsUser from "../DocumentCard/Document.User"
import Search from "../../pages/Search"
import EditDocument from "../DocumentCard/EditDocument"
import { useSelector } from "react-redux"
import Error404 from "../404Err"

const Index = () =>{

    const userData = useSelector((state)=> state.userReducer);
    return(
        <div className="Routes">
        <Router>
            <Navbar/>
            <Routes>
                {userData.verified === true ? (
                    <>
                    <Route path="/documents" exact="true" element={<Listdocuments numeropage="1"/>}/>
                    <Route path="/document/:id" exact="true" element={<DocumentPage/>}/>
                    <Route path="/createdocument" exact="true" element={<Document/>}/>
                    <Route path="/documents/:id" exact="true" element={<DocumentsUser numeropage="1"/>}/>
                    <Route path="/edit-document/:id" exact="true" element={<EditDocument/>}/>
                    <Route path="/search" exact="true" element={<Search/>}/>
                    </>
                ):(
                    <>        
                    </>
                )}
                <Route path="/" exact="true" element={<Home/>}/> 
                <Route path="/profil" exact="true" element={<Profil/>}/>               
                <Route path="/verify" exact="true" element={<EmailVerify/>}/>
                <Route path="/user/:id/verify/:token" element={<EmailVerify/>}/>      
                <Route path="*" element={<Error404/>}/>          

            </Routes>
        </Router>
        </div>

    )
}

export default Index