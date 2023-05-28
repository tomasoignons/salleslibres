import React from "react";
import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };
  const logout = async () => {
    const url = `${process.env.REACT_APP_API_URL}api/user/logout`;
    await axios({
      method: "get",
      url: url,
      withCredentials: true,
    }).then(()=>{
        removeCookie("jwt")
    }).catch((err)=>{
        console.log(err)
    })
    window.location = '/'
  };

  return (
    <div className="se_connecter_container1 social-btn flex-center" onClick={logout}>
      <div className="se_connecter_container2 social-btn flex-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
          <path d="M15 12h-12l3 -3" />
          <path d="M6 15l-3 -3" />
        </svg>
        <span className="invite_connection">Se déconnecter</span>
    </div>      
</div>
  );
};

export default Logout;
