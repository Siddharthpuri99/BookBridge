// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import BookCard from '../component/BookCard/BookCard';

// function Favourites() {
//   const[FavouriteBooks,setFavouriteBooks] = useState([]);
//   const headers = {
//     id:localStorage.getItem("id"),
//     authorization:`Bearer ${localStorage.getItem("token")}`,
    
//   };
//   useEffect(()=>{
    
//     const fetch = async () => {
//       const response  = await axios.get("http://localhost:1000/api/v1/get-favouriteBook",{headers});
//       setFavouriteBooks(response.data.data);
//       console.log(response.data.data);
//     }
//     fetch();
//   },[])
//   return (
//     <div>
//       {FavouriteBooks && FavouriteBooks.map((items,i)=>{
//         <div key={i}>
//           <BookCard data={items}/>
//         </div>

//       })}
//     </div>
//   )
// }

// export default Favourites
import React, { useEffect, useState } from 'react';
import axios from "axios";
import BookCard from '../component/BookCard/BookCard';

function Favourites() {
  const [favouriteBooks, setFavouriteBooks] = useState([]); // Initialize with an empty array
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchFavouriteBooks = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-favouriteBook", { headers });
        setFavouriteBooks(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching favourite books:', error);
      }
    };
    fetchFavouriteBooks();
  }, [favouriteBooks]);

  return (
    <div className='grid grid-cols-4 gap-4'>
      {favouriteBooks.length > 0 ? (
        favouriteBooks.map((item, i) => (
          <div key={i}>
            <BookCard data={item}  favourite={true} />
          </div>
        ))
      ) : (
        <p>No favourite books found.</p>
      )}
    </div>
  );
}

export default Favourites;
