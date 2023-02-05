import React from "react";
import  { Link } from "react-router-dom";
import fourfour from "../assets/fourfour.png";
import Header from "../components/Header";

export default function FourOFour({ cart }) {
  return (
    <div className="">
      <Header cart={cart} />

      <div className="flex">
        <img src={fourfour} alt="" className="fourfour h-2/5" />

        <div className="flex-col">
        <p>It looks like you got lost?</p>
        
        <button className="flex bg-orange-300 h-9 w-30 rounded-xl p-3 text-center text-white font-bold align-middle">
        <Link to="/">Homepage</Link>
        </button>
        </div>

      </div>

    </div>
  );
}
