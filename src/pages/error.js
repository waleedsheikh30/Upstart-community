import React from 'react'
import Error404 from "../components/error404";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Error = () => {
  return (
    <div>
        <Navbar/>

        <Error404/>

        <Footer/>
    </div>
  )
}

export default Error