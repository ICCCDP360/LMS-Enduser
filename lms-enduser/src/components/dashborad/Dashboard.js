import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

function Dashboard() {


  const Tokens = JSON.parse(localStorage.getItem("access-token-user"))

  if (Tokens) {
    return (
      <div>Dashboard</div>
    )
  }
  else {
    return <Navigate to="/" />

  }

}

export default Dashboard