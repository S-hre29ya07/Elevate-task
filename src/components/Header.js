import React from 'react'
import  { Link } from "react-router-dom";
import Total from "./Total";

export default function Header({cart, setCart}) {
  return (
    <div>
        <header className="App-header bg-slate-900 flex justify-around">
        <p className="text-3xl font-bold text-center p-3"></p>
        <p className="text-3xl font-bold text-center p-3 text-white">
        <Link to="/">React Store</Link>
        </p>
        
        <Link to="/cart"> <Total cart={cart} setCart={setCart} />{" "} </Link>

      </header>
    </div>
  )
}