import ProductList from "./components/ProductList"
import Filter from "./components/Filter"
import Header from "./components/Header";
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import  { Outlet} from "react-router-dom";


function App({cart, setCart}) { 
  const [posts, setPosts] = useState([])
  const [ogposts, setOgPosts] = useState([])


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
        console.log(res)
        setPosts(res.data)
        setOgPosts(res.data)
        
    })
    .catch(err => {
        console.log(err)
    })
}, [])


  return (
    <div className="App ">

      <Header cart={cart} setCart={setCart} />

      <div className="lg:flex">
        <Filter className=''  setPosts={setPosts} posts={posts} ogposts={ogposts} setOgPosts={setOgPosts}/>

        <ProductList className="" posts={posts} setCart={setCart} cart={cart}/>

        <Outlet />

      </div>
    </div>

  );
}

export default App;


 