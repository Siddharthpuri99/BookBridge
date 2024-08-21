import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  const links = [
    {
      title:"Home",
      link:"/",
    },
    
    {
      title:"All Books",
      link:"/all-books",
    },
    {
      title:"Cart",
      link:"/cart",
    },
    {
      title:"Profile",
      link:"/profile",
    },
   
  ];
  return (
    <div className=' flex bg-zinc-800 text-white px-8 py-2 items-center justify-between '>
      <Link to={"/"} className="flex items-center">
        <img className="h-10 me-4" src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="..."/>
        <h1 className="text-2xl font-semibold">BookHeaven</h1>
      </Link>
      <div className=" nav-links-bookheaven flex items-center gap-4">
        <div className="flex items-center justify- gap-4">
        {links.map((item,i)=> <Link to={item.link} className="hover:text-blue-500 transition-all duration-300" key={i}> {item.title}</Link>)}
        </div>
        <div className="flex gap-4">
          <Link to={"/LogIn"} className="px-4 py-1 font-bold hover:bg-white bg-blue-500 rounded hover: text-zinc-800 transition-all duration-300">SignIn</Link>
          <Link to={"/SignUp"} className="px-4 py-1  font-bold hover:bg-white bg-blue-500 rounded hover: text-zinc-800 transition-all duration-300">SignUp</Link>
        </div>
      
      </div>
    </div>
  )
}

export default Navbar
