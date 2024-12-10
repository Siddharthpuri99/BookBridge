import React from 'react'
import { useParams ,useNavigate,Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Loader from "../Loader/Loader"
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import {useSelector} from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function ViewBookDetails() {
   const{id} = useParams();
   const navigate = useNavigate();
   console.log(id);
   const[Data,setData] = useState();
 const isLoggedIn =  useSelector((state)=>state.auth.isLoggedIn);
 const role =  useSelector((state)=>state.auth.role);
//  console.log(isLoggedIn);
//  console.log(role);

   useEffect(()=>{
     const fetch = async()=>{
       const response = await axios.get(`http://localhost:1000/api/v1/get-book-byid/${id}`);
       console.log(response);
       setData(response.data.data)
     }
     fetch();
   },[id]);
   const headers = {
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:id,
  };
  //  const handleFavourite = async () => {
  //     const response = await axios.put(
  //       "http://localhost:1000/api/v1/add-book-to-favourite",{},{ headers }
  //     );
  //     alert(response.data.message); 
  //     console.log(response.data.message);
  //  }
  const handleFavourite = async () => {
    try {
      const response = await axios.put("http://localhost:1000/api/v1/add-book-to-favourite", {}, { headers });
      alert(response.data.message);
      console.log('Add to favourites response:', response.data.message);
    } catch (error) {
      console.error('Error adding to favourites:', error.response ? error.response.data : error.message);
      alert(error.response ? error.response.data.message : 'An error occurred');
    }
  };
  const handleCart = async() => {
    const response = await axios.put("http://localhost:1000/api/v1/add-cart",{},{ headers });
    alert(response.data.message);
  };
  const deleteBook = async()=>{
    const response = await axios.delete("http://localhost:1000/api/v1/delete-book",{headers});
    alert(response.data.message);
    navigate("/all-books");
  }
  return (
        <>
        {Data && (   <div className='px-12 py-8 bg-zinc-900 flex'>
      <div className='  px-4  h-[88vh] w-3/6  items-center'>
      {" "}
    {isLoggedIn ===true && role==="user" &&  <div className='flex justify-around rounded py-12 bg-zinc-800 p-12'>
     <img src={Data.url} alt='imag..' className='h-[50vh] lg:h-[70vh] rounded'/>
      <div className='flex md:flex-col gap-3'>
        <button className='bg-white rounded-full text-3xl p-2 text-blue-500' onClick={handleCart} ><FaCartPlus /></button>
        <button className='bg-white rounded-full text-3xl p-2  mt-8 text-red-500' onClick={handleFavourite}><FaHeart /></button>
      </div>
      </div>}
    {isLoggedIn ===true && role==="admin" &&  <div className='flex justify-around rounded py-12 bg-zinc-800 p-12'>
     <img src={Data.url} alt='imag..' className='h-[50vh] lg:h-[70vh] rounded'/>
      <div className='flex md:flex-col gap-3'>
        <Link to={`/updateBook/${id}`} className='bg-white rounded-full text-3xl p-2 text-blue-500' ><FaRegEdit /></Link>
        <button className='bg-white rounded-full text-3xl p-2  mt-8 text-red-500' onClick={deleteBook}><MdDelete /></button>
      </div>
      </div>}
     </div>

      <div className='p-4 w-3/6'>
      <h1 className='text-4xl text-zinc-300 font-semibold'>{Data.title}</h1>
      <p className='text-zinc-400 mt-1'>bt {Data.author}</p>
      <p className='text-zinc-500 mt-4 text-xl'>{Data.desc}</p>
      <p className='flex mt-4 items-center  justify-start text-zinc-400'>{Data.language}</p>
      <p className='mt-4 text-zinc-100 text-3xl font-semibold'>Price : Rs {Data.price}{" "}</p>
      
      </div>
    </div>)} {!Data && (<div className='h-screen bg-zinc-900 flex items-center justify-center'><Loader/>{" "}</div>)}
        </>
  );
}

export default ViewBookDetails
