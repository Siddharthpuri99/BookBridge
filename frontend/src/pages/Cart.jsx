// // // import React, { useEffect, useState } from 'react'
// // // import Loader from "../component/Loader/Loader";
// // // import { AiFillDelete } from "react-icons/ai";
// // // import axios from "axios";


// // // function Cart() {
// // //   const[Cart,setCart] = useState();
// // //   const[Total,setTotal] = useState(0);
// // //   const headers = {
// // //     id: localStorage.getItem("id"),
// // //     authorization: `Bearer ${localStorage.getItem("token")}`,
// // //   };
// // //   useEffect(()=>{
// // //     const fetch = async()=>{
// // //       const res = await axios.get(
// // //         "http://localhost:1000/api/v1/get-user-cart",{headers}
// // //       );
// // //       setCart(res.data.data);
// // //     };
// // //     fetch();
// // //   },[Cart]);
// // //   return (
// // //     <>
// // //       {!Cart && <Loader/>}
// // //       {Cart && Cart.length===0 && (
// // //         <div className='h-screen'>
// // //           <div className='h-[100%] flex items-center justify-center flex-col'>
// // //             <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty Cart</h1>
// // //             <img src='' alt='emptycart' className='lg:h-[50vh'/>
// // //           </div>
// // //         </div>
// // //       )}
// // //       {Cart && Cart.length>0 && (
// // //         <>
// // //         <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>Your Cart</h1>
// // //         {Cart.map((items,i)=>(
// // //           <div key={i} className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between item-center'>
// // //             <img src={items.url} alt='/' className='h-[20vh] md:h=[10vh] object-cover'/>
        
// // //           <div className='w-full md:w-auto'>
// // //             <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>{items.title}</h1>
// // //             <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>{items.desc.slice(0,100)}...</p>
// // //             <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>{items.desc.slice(0,65)}...</p>
// // //             <p className='text-normal text-zinc-300 mt-2 block md:hidden'>{items.desc.slice(0,100)}...</p>

// // //           </div>
// // //           <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
// // //           <h2 className='text-zinc-100 text-3xl font-semibold flex'>{items.price}</h2>
// // //           <button className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12'>< AiFillDelete/></button>
// // //           </div>
// // //         ))}
// // //         </>
// // //       )}
// // //     </>
// // //   )
// // // }

// // // export default Cart;
// // import React, { useEffect, useState } from 'react';
// // import Loader from "../component/Loader/Loader";
// // import { AiFillDelete } from "react-icons/ai";
// // import axios from "axios";

// // function Cart() {
// //   const [Cart, setCart] = useState([]);
// //   const [Total, setTotal] = useState(0);
// //   const headers = {
// //     id: localStorage.getItem("id"),
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //   };

  

// //   useEffect(() => {
// //     const fetch = async () => {
// //       try {
// //         const res = await axios.get(
// //           "http://localhost:1000/api/v1/get-user-cart", { headers }
// //         );
// //         setCart(res.data.data);
// //         // Calculate total price
// //         const totalPrice = res.data.data.reduce((acc, item) => acc + item.price, 0);
// //         setTotal(totalPrice);
// //       } catch (error) {
// //         console.error("Error fetching cart data:", error);
// //       }
// //     };
// //     fetch();
// //   }, [Cart]); // Removed Cart from dependencies
// //   const deleteItem = async (bookid)=>{
// //     const response = await axios.put(
// //       `http://localhost:1000/api/v1//remove-fromCart/${bookid}`,{},{headers}
// //     );
// //     alert(response.data.data);
// //   }
// //   return (
// //     <div className='bg-zinc-900 px-12 h-screen py-8'> 
// //       {!Cart.length && <Loader />}
// //       {Cart.length === 0 && (
// //         <div className='h-screen'>
// //           <div className='h-full flex items-center justify-center flex-col'>
// //             <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty Cart</h1>
// //             <img src='path/to/your/empty-cart-image.png' alt='empty cart' className='lg:h-[50vh]' />
// //           </div>
// //         </div>
// //       )}
// //       {Cart.length > 0 && (
// //         <>
// //           <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>Your Cart</h1>
// //           {Cart.map((item, i) => (
// //             <div key={i} className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'>
// //               <img src={item.url} alt={item.title} className='h-[20vh] md:h-[10vh] object-cover' />
// //               <div className='w-full md:w-auto'>
// //                 <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>{item.title}</h1>
// //                 <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>{item.desc.slice(0, 100)}...</p>
// //                 <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>{item.desc.slice(0, 65)}...</p>
// //                 <p className='text-normal text-zinc-300 mt-2 block md:hidden'>{item.desc.slice(0, 100)}...</p>
// //               </div>
// //               <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
// //                 <h2 className='text-zinc-100 text-3xl font-semibold flex'>{item.price}</h2>
// //                 <button onClick={()=>deleteItem(item._id)} className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12'>
// //                   <AiFillDelete />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //           <h2 className='text-2xl font-semibold text-zinc-500'>Total: ${Total}</h2>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default Cart;
// import React, { useEffect, useState } from 'react';
// import Loader from "../component/Loader/Loader";
// import { AiFillDelete } from "react-icons/ai";
// import axios from "axios";

// function Cart() {
//   const [Cart, setCart] = useState([]);
//   const [Total, setTotal] = useState(0);
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const res = await axios.get("http://localhost:1000/api/v1/get-user-cart", { headers });
//         setCart(res.data.data);
//         const totalPrice = res.data.data.reduce((acc, item) => acc + item.price, 0);
//         setTotal(totalPrice);
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//       }
//     };
//     fetch();
//   }, []); // Empty dependency array

//   const deleteItem = async (bookid) => {
//     const response = await axios.put(`http://localhost:1000/api/v1/remove-fromCart/${bookid}`,{},{ headers });
//    console.log(response.data);
//   };

//   return (
//     <div className='bg-zinc-900 px-12 h-screen py-8'>
//       {!Cart.length && <Loader />}
//       {Cart.length === 0 && (
//         <div className='h-screen'>
//           <div className='h-full flex items-center justify-center flex-col'>
//             <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty Cart</h1>
//             <img src='path/to/your/empty-cart-image.png' alt='empty cart' className='lg:h-[50vh]' />
//           </div>
//         </div>
//       )}
//       {Cart.length > 0 && (
//         <>
//           <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>Your Cart</h1>
//           {Cart.map((item, i) => (
//             <div key={i} className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'>
//               <img src={item.url} alt={item.title} className='h-[20vh] md:h-[10vh] object-cover' />
//               <div className='w-full md:w-auto'>
//                 <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>{item.title}</h1>
//                 <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>{item.desc.slice(0, 100)}...</p>
//                 <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>{item.desc.slice(0, 65)}...</p>
//                 <p className='text-normal text-zinc-300 mt-2 block md:hidden'>{item.desc.slice(0, 100)}...</p>
//               </div>
//               <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
//                 <h2 className='text-zinc-100 text-3xl font-semibold flex'>${item.price}</h2>
//                 <button  className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12' onClick={() => deleteItem(item._id)}>
//                   <AiFillDelete />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <h2 className='text-2xl font-semibold text-zinc-500'>Total: ${Total}</h2>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;
// import React, { useEffect, useState } from 'react';
// import Loader from "../component/Loader/Loader";
// import { AiFillDelete } from "react-icons/ai";
// import axios from "axios";

// function Cart() {
//   const [Cart, setCart] = useState([]);
//   const [Total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const res = await axios.get("http://localhost:1000/api/v1/get-user-cart", { headers });
//         setCart(res.data.data);
//         const totalPrice = res.data.data.reduce((acc, item) => acc + item.price, 0);
//         setTotal(totalPrice);
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//       }
//     };
//     fetchCart();
//   }, []); // Empty dependency array
//   useEffect(()=>{
//     if(Cart && Cart.length>0){
//       let total =0;
//       Cart.map((items)=>{
//         total+=items.price;
//       });
//       setTotal(total);
//       total=0;
//     }
//   }[Cart]);
//   const deleteItem = async (bookId) => {
//     setLoading(true);
//     try {
//       await axios.put(`http://localhost:1000/api/v1/remove-fromCart/${bookId}`, {}, { headers });
//       // Update cart state after deletion
//       setCart((prevCart) => prevCart.filter(item => item._id !== bookId));
//       // Update total
//       setTotal(prevTotal => prevTotal - Cart.find(item => item._id === bookId).price);
//       alert("Item deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting item:", error);
//       alert("Failed to delete item. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='bg-zinc-900 px-12 h-screen py-8'>
//       {loading && <Loader />} {/* Show loader while deleting */}
//       {!Cart.length && !loading && (
//         <div className='h-screen'>
//           <div className='h-full flex items-center justify-center flex-col'>
//             <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty Cart</h1>
//             <img src='path/to/your/empty-cart-image.png' alt='empty cart' className='lg:h-[50vh]' />
//           </div>
//         </div>
//       )}
//       {Cart.length > 0 && (
//         <>
//           <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>Your Cart</h1>
//           {Cart.map((item, i) => (
//             <div key={i} className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'>
//               <img src={item.url} alt={item.title} className='h-[20vh] md:h-[10vh] object-cover' />
//               <div className='w-full md:w-auto'>
//                 <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>{item.title}</h1>
//                 <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>{item.desc.slice(0, 100)}...</p>
//                 <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>{item.desc.slice(0, 65)}...</p>
//                 <p className='text-normal text-zinc-300 mt-2 block md:hidden'>{item.desc.slice(0, 100)}...</p>
//               </div>
//               <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
//                 <h2 className='text-zinc-100 text-3xl font-semibold flex'>${item.price}</h2>
//                 <button className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12' onClick={() => deleteItem(item._id)}>
//                   <AiFillDelete />
//                 </button>
//               </div>
//             </div>
//           ))}
//           <h2 className='text-2xl font-semibold text-zinc-500'>Total: ${Total}</h2>
//         </>
//       )}
//       {Cart && Cart.length > 0 && (
//   <div className='mt-4 w-full flex items-center justify-end '>
//     <div className='p-4 bg-zinc-800 rounded'>
//       <h1 className='text-3xl text-zinc-200 font-semibold'>Total Amount</h1>
//       <div className='mt-3 flex items-center justify-between text-xl text-zinc-200'>
//         <h2>{Cart.length} books</h2>
//         <h2>${Total.toFixed(2)}</h2>
//       </div>
//     </div>
//     <div className='w-[100%] mt-3'>
//       <button
//         className='bg-zinc-100 rounded px-4 py-2 flex justify-center w-20 font-semibold hover:bg-zinc-200 mr-4' // Add margin-right here
        
//         aria-label="Place your order"
//       >
//         Place your order
//       </button>
//     </div>
//   </div>
// )}

//     </div>
//   );
// }

// export default Cart;
import React, { useEffect, useState } from 'react';
import Loader from "../component/Loader/Loader";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]);
  const [Total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true); // Start loading
      try {
        const res = await axios.get("http://localhost:1000/api/v1/get-user-cart", { headers });
        setCart(res.data.data);
        calculateTotal(res.data.data); // Calculate total here
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchCart();
  }, []); // Empty dependency array

  const PlaceOrder = async () => {
    try {
      const response = await axios.post(`http://localhost:1000/api/v1/placed-order`, { order: Cart }, { headers });
      alert(response.data.message); // Assuming your API returns a message
      navigate("/profile/orderHistory");
    } catch (err) {
      console.log(err);
      alert("Failed to place order. Please try again.");
    }
  };

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  };

  const deleteItem = async (bookId) => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:1000/api/v1/remove-fromCart/${bookId}`, {}, { headers });
      setCart((prevCart) => prevCart.filter(item => item._id !== bookId));
      alert("Item deleted successfully.");
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item. Please try again.");
    } finally {
      setLoading(false);
      calculateTotal(Cart.filter(item => item._id !== bookId)); // Recalculate total after deletion
    }
  };

  return (
    <div className='bg-zinc-900 px-12 h-screen py-8'>
      {loading && <Loader />} {/* Show loader while loading */}
      {!Cart.length && !loading && (
        <div className='h-screen'>
          <div className='h-full flex items-center justify-center flex-col'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty Cart</h1>
            <img src='path/to/your/empty-cart-image.png' alt='empty cart' className='lg:h-[50vh]' />
          </div>
        </div>
      )}
      {Cart.length > 0 && (
        <>
          <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>Your Cart</h1>
          {Cart.map((item, i) => (
            <div key={i} className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'>
              <img src={item.url} alt={item.title} className='h-[20vh] md:h-[10vh] object-cover' />
              <div className='w-full md:w-auto'>
                <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>{item.title}</h1>
                <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>{item.desc.slice(0, 100)}...</p>
                <p className='text-normal text-zinc-300 mt-2 hidden md:block lg:hidden'>{item.desc.slice(0, 65)}...</p>
                <p className='text-normal text-zinc-300 mt-2 block md:hidden'>{item.desc.slice(0, 100)}...</p>
              </div>
              <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
                <h2 className='text-zinc-100 text-3xl font-semibold flex'>${item.price}</h2>
                <button className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12' onClick={() => deleteItem(item._id)}>
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
          <h2 className='text-2xl font-semibold text-zinc-500'>Total: ${Total.toFixed(2)}</h2>
        </>
      )}
      {Cart.length > 0 && (
        <div className='mt-4 w-full flex items-center justify-end'>
          <div className='p-4 bg-zinc-800 rounded'>
            <h1 className='text-3xl text-zinc-200 font-semibold'>Total Amount</h1>
            <div className='mt-3 flex items-center justify-between text-xl text-zinc-200'>
              <h2>{Cart.length} books</h2>
              <h2>${Total.toFixed(2)}</h2>
            </div>
          </div>
          <div className='w-[100%] mt-3'>
            <button onClick={PlaceOrder} className='bg-zinc-100 rounded px-4 py-2 flex justify-center w-20 font-semibold hover:bg-zinc-200 mr-4'>
              Place your order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
