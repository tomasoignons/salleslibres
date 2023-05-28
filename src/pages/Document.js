import React from "react";
import CreateDocument from "../components/upload/CreateDocument";

import "../style/pages/document.form.scss"

const Document = () =>{
    return(
        <div className="containerfromcontainer">
            <div className="container-document">
                <CreateDocument/>
            </div>
        </div>

    )
}

export default Document