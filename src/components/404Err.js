import React, { useEffect, useState } from "react";
import Loader from "./upload/Loader";

const Error404 = ()=>{

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        }, 1000)
    })

    return(
        <>
        {loading ? (
            <>
            <Loader/>
            </>
        ):(
        <div className='container-verify'>
            <h1>404 Not found</h1>
        </div>
        )}

        </>

    )
}

export default Error404