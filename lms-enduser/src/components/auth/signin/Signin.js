import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

function Signin() {

    const namaes = "kalai"

    const handleChange = () => {
        localStorage.setItem("access-token-user", JSON.stringify(namaes));
    }

    const Tokens = JSON.parse(localStorage.getItem("access-token-user"))

    if (!Tokens) {
        return (
            <div>Signin
                <button onClick={handleChange}>
                    handleChange
                </button>

            </div>
        )
    }
    else {
        return <Navigate to="/dashboard" />

    }
    // return (
    //     <div>Signin

    //         <button onClick={handleChange}>
    //             handleChange
    //         </button>
    //     </div>
    // )
}

export default Signin