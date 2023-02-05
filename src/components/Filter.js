import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Filter({ category, setCategory, posts, setPosts, ogposts, setOgPosts }) {

  const [categories, setCat] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res => {
            setCat(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleCategory=(category)=>{
      const filter = ogposts.filter(item=>item.category == category)
      setPosts(filter)
    }

  return (

    <div className='Filter p-10 pr-0'>
        <p className='mb-3 text-slate-900'>Categories</p>
        <hr className='w-auto'></hr>
        <ul className='flex lg:flex-col'>
        {categories.map(post =>
        <li className='p-3 flex text-slate-900' key={post.id}>
        <input id={post.id} type="radio"  name="choice" onClick={() => {handleCategory(post)}}></input>
        <label for={post.id} className='ml-3 text-slate-900'>{post}</label>
        </li>)}
        </ul>
    </div>
  )
}