import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import App from "./App"

export default function Routing(){

  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<App/>}/>
      </Routes>
    </>
  )
}