// import React from 'react'
// import {Link} from "react-router-dom";
// import axios from "axios";

// function BookCard({data, favourite}) {
//   console.log(data);
//   const headers = {
//     id:localStorage.getItem("id"),
//     authorization:`Bearer ${localStorage.getItem("token")}`,
//     bookid:data._id,
   
//   };
//   const handleRemove = async() => {
//     const response = await axios.delete("http://localhost:1000/api/v1/remove-favourite-book",{},{headers});
//     console.log(response.data.message);
//     alert(response.data.message);
//   }

  
//   return (
//     <div className='bg-zinc-800 rounded p-4 flex flex-col'>
//     <Link to={`/view-book-details/${data._id}`}>
//     <div >
//     <div className='bg-zinc-900 rounded flex items-center justify-center'><img src={data.url} alt=".." className='h-[25vh]'/>
//     </div>
//     <h2 className='mt-4 text-xl font-semibold text-white'>{data.title}</h2>
//     <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
//     <p className='mt-2 text-zinc-200 font-semibold text-xl'>Rs {data.price}</p>
   
//     </div>
   
//     </Link>
//     {favourite &&  (<button onClick={handleRemove}  className='bg-yellow-50  px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4'>Remove from  favourites</button> )}
   
//     </div>
    
//   )

// }

// export default BookCard
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

function BookCard({ data, favourite, onRemove }) {
  console.log(data);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };

  const handleRemove = async () => {
    try {
      const response = await axios.delete("http://localhost:1000/api/v1/remove-favourite-book", { headers });
      console.log(response.data.message);
      alert(response.data.message);
      // Call the onRemove callback to update the parent state
      if (onRemove) onRemove(data._id);
    } catch (error) {
      console.error('Error removing from favourites:', error.response ? error.response.data : error.message);
      alert('Failed to remove from favourites. Please try again.');
    }
  };

  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col'>
      <Link to={`/view-book-details/${data._id}`}>
        <div>
          <div className='bg-zinc-900 rounded flex items-center justify-center'>
            <img src={data.url} alt={data.title} className='h-[25vh]' />
          </div>
          <h2 className='mt-4 text-xl font-semibold text-white'>{data.title}</h2>
          <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
          <p className='mt-2 text-zinc-200 font-semibold text-xl'>Rs {data.price}</p>
        </div>
      </Link>
      {favourite && (
        <button
          onClick={handleRemove}
          className='bg-yellow-50 px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4'
        >
          Remove from favourites
        </button>
      )}
    </div>
  );
}

export default BookCard;
