// import  { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../component/Loader/Loader";
// import { FaUserLarge } from "react-icons/fa6";
// import { FaCheck } from "react-icons/fa";
// import { IoOpenOutline } from "react-icons/io5";
// import {Link} from "react-router-dom"

// function AllOrders() {
//   const [AllOrders, setAllOrders] = useState([]);
//   const[Options,setOptions]= useState(-1);
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-all-orders", 
//         { headers }
//       );
//       setAllOrders(response.data.data);
//       console.log(response.data.data);
//     };
//     fetch();
//   }, []);
//   const setOptionsButton = (i) =>{
//     setOptions(i);
//   }
//   AllOrders && AllOrders.splice(AllOrders.length-1,1);
//   return (
//     <div>
//       {/* {!AllOrders && (
//         <div className="h-[100%] flex items-center justify-center">
//           {" "}
//           <Loader />{" "}
//         </div>
//       )} */}
//       {AllOrders && AllOrders.length > 0 && (
//         <div className="h-[100%] p-0 md:p-4 text-zinc-100">
//           <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
//             All Orders
//           </h1>
//           <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
//             <div className="w-[3%]">
//               <h1 className="text-center">Sr.</h1>
//             </div>
//             <div className="w-[40%] md:w-[22%]">
//               <h1 className="">Books</h1>
//             </div>
//             <div className="w-0 md:w-[45%] hidden md:block">
//               <h1 className="">Description</h1>
//             </div>
//             <div className="w-[17%] md:w-[9%]">
//               <h1 className="">Price</h1>
//             </div>
//             <div className="w-[30%] md:w-[16%]">
//               <h1 className="">Status</h1>
//             </div>
//             <div className="w-[10%] md:w-[5%]">
//               <h1 className="">
//                 <FaUserLarge />
//               </h1>
//             </div>
//           </div>
//           {AllOrders.map((item, i) => (
//             <div
//               className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-75"
//               key={i}
//             >
//               {item}
//               <div className="w-[3%]">
//                 <h1 className="text-center">{i + 1}</h1>
//               </div>
//               <div className="w-[40%] md:w-[22%]">
//                 <Link
//                   to={`/view-book-details/${item.book._id}`}
//                   className="hover:text-blue-300"
//                 >
//                   {item.book.title}
//                 </Link>
//               </div>
//               <div className="w-0 md:w-[45%] hidden md:block">
//                 <h1 className="">{item.book.descslice(0, 50)}...</h1>
//               </div>
//               <div className="w-[17%] md:w-[9%]">
//                 <h1 className="">Rs {item.book.price}</h1>
//               </div>
//               <div className="w-[30%] md:w-[16%]">
//                 <h1 className="font-semibold">
//                   <button className="hover:scale-105 transition-all duration-300" onClick={()=>setOptionsButton(i)}>
//                     {item.status === "order placed" ? (
//                       <div className="text-yellow-500">{item.status}</div>
//                     ) : item.status === "Canceled" ? (
//                       <div className="text-red-500">{item.status}</div>
//                     ) : (
//                       <div className="text-green-500">{item.status}</div>
//                     )}
//                   </button>
//                   {Options && (  <div className="flex">
//                     <select name="status" id="" className="bg-gray-800">
//                       {[
//                         "order placed",
//                         "out of delivery",
//                         "delivered",
//                         "canceled",
//                       ].map((item, i) => (
//                         <option value={item} key={i}>
//                           {item}
//                         </option>
//                       ))}
//                     </select>
//                     <button className="text-green-500 hover:text-pink-600 mx-2 ">
//                       <FaCheck />
//                     </button>
//                   </div>)}
//                 </h1>
//               </div>
//               <div className="w-[10%] md:w-[5%]">
//                 <button className="text-xl hover:text-orange-500">< IoOpenOutline/></button>
//               </div>
//             </div>
            
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllOrders;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../component/Loader/Loader";
// import { FaUserLarge } from "react-icons/fa6";
// import { FaCheck } from "react-icons/fa";
// import { IoOpenOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

// function AllOrders() {
//   const [AllOrders, setAllOrders] = useState([]); // Initialize with empty array
//   const [Options, setOptions] = useState(-1);
//   const [loading, setLoading] = useState(true); // Loading state for fetching data
//   const [error, setError] = useState(null); // Error handling

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:1000/api/v1/get-all-orders",
//           { headers }
//         );
//         console.log("Fetched orders:", response.data.data); // Debug: check data structure
//         setAllOrders(response.data.data); // Store the orders
//         setLoading(false); // Stop loading once data is fetched
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to load orders. Please try again.");
//         setLoading(false); // Stop loading even if there's an error
//       }
//     };
//     fetchOrders();
//   }, []);

//   const setOptionsButton = (i) => {
//     setOptions(i); // Track which order has the dropdown open
//   };

//   if (loading) {
//     return (
//       <div className="h-[100%] flex items-center justify-center">
//         <Loader /> {/* Loader while data is fetching */}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="h-[100%] flex items-center justify-center text-red-500">
//         {error} {/* Display error if data fetching fails */}
//       </div>
//     );
//   }

//   return (
//     <div>
//       {AllOrders.length > 0 ? (
//         <div className="h-[100%] p-0 md:p-4 text-zinc-100">
//           <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
//             All Orders
//           </h1>
//           <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
//             <div className="w-[3%]">
//               <h1 className="text-center">Sr.</h1>
//             </div>
//             <div className="w-[40%] md:w-[22%]">
//               <h1>Books</h1>
//             </div>
//             <div className="w-0 md:w-[45%] hidden md:block">
//               <h1>Description</h1>
//             </div>
//             <div className="w-[17%] md:w-[9%]">
//               <h1>Price</h1>
//             </div>
//             <div className="w-[30%] md:w-[16%]">
//               <h1>Status</h1>
//             </div>
//             <div className="w-[10%] md:w-[5%]">
//               <h1>
//                 <FaUserLarge />
//               </h1>
//             </div>
//           </div>

//           {AllOrders.map((item, i) => {
//             console.log("Order item:", item); // Debug: log each item in AllOrders

//             return (
//               <div
//                 className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-75"
//                 key={i}
//               >
//                 <div className="w-[3%]">
//                   <h1 className="text-center">{i + 1}</h1>
//                 </div>
//                 <div className="w-[40%] md:w-[22%]">
//                   <Link
//                     to={`/view-book-details/${item.book?._id}`} // Safe access to avoid errors
//                     className="hover:text-blue-300"
//                   >
//                     {item.book?.title || "No Title Available"}
//                   </Link>
//                 </div>
//                 <div className="w-0 md:w-[45%] hidden md:block">
//                   <h1>{item.book?.desc?.slice(0, 50) || "No Description"}...</h1>
//                 </div>
//                 <div className="w-[17%] md:w-[9%]">
//                   <h1>Rs {item.book?.price || "N/A"}</h1>
//                 </div>
//                 <div className="w-[30%] md:w-[16%]">
//                   <h1 className="font-semibold">
//                     <button
//                       className="hover:scale-105 transition-all duration-300"
//                       onClick={() => setOptionsButton(i)}
//                     >
//                       {item.status === "order placed" ? (
//                         <div className="text-yellow-500">{item.status}</div>
//                       ) : item.status === "Canceled" ? (
//                         <div className="text-red-500">{item.status}</div>
//                       ) : (
//                         <div className="text-green-500">{item.status}</div>
//                       )}
//                     </button>

//                     {Options === i && (
//                       <div className="flex">
//                         <select name="status" className="bg-gray-800">
//                           {[
//                             "order placed",
//                             "out of delivery",
//                             "delivered",
//                             "canceled",
//                           ].map((statusOption, index) => (
//                             <option value={statusOption} key={index}>
//                               {statusOption}
//                             </option>
//                           ))}
//                         </select>
//                         <button className="text-green-500 hover:text-pink-600 mx-2">
//                           <FaCheck />
//                         </button>
//                       </div>
//                     )}
//                   </h1>
//                 </div>
//                 <div className="w-[10%] md:w-[5%]">
//                   <button className="text-xl hover:text-orange-500">
//                     <IoOpenOutline />
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="h-[100%] flex items-center justify-center">
//           No Orders Found {/* Display this if AllOrders is empty */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllOrders;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../component/Loader/Loader";
import { FaUserLarge } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function AllOrders() {
  const [AllOrders, setAllOrders] = useState([]); // Initialize with empty array
  const [Options, setOptions] = useState(-1); // Store the index of clicked order
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [error, setError] = useState(null); // Error handling

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-all-orders",
          { headers }
        );
        console.log("Fetched orders:", response.data.data); // Debug: check data structure
        setAllOrders(response.data.data); // Store the orders
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to load orders. Please try again.");
        setLoading(false); // Stop loading even if there's an error
      }
    };
    fetchOrders();
  }, []);

  // Toggle the options when a row is clicked
  const toggleOptions = (i) => {
    setOptions(Options === i ? -1 : i); // Toggle: if clicked again, close it
  };

  if (loading) {
    return (
      <div className="h-[100%] flex items-center justify-center">
        <Loader /> {/* Loader while data is fetching */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[100%] flex items-center justify-center text-red-500">
        {error} {/* Display error if data fetching fails */}
      </div>
    );
  }

  return (
    <div>
      {AllOrders.length > 0 ? (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            All Orders
          </h1>
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[40%] md:w-[22%]">
              <h1>Books</h1>
            </div>
            <div className="w-0 md:w-[45%] hidden md:block">
              <h1>Description</h1>
            </div>
            <div className="w-[17%] md:w-[9%]">
              <h1>Price</h1>
            </div>
            <div className="w-[30%] md:w-[16%]">
              <h1>Status</h1>
            </div>
            <div className="w-[10%] md:w-[5%]">
              <h1>
                <FaUserLarge />
              </h1>
            </div>
          </div>

          {AllOrders.map((item, i) => {
            console.log("Order item:", item); // Debug: log each item in AllOrders

            return (
              <div
                className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-75"
                key={i}
                onClick={() => toggleOptions(i)} // Toggle display of additional info on click
              >
                <div className="w-[3%]">
                  <h1 className="text-center">{i + 1}</h1>
                </div>
                <div className="w-[40%] md:w-[22%]">
                  <Link
                    to={`/view-book-details/${item.book?._id}`} // Safe access to avoid errors
                    className="hover:text-blue-300"
                  >
                    {item.book?.title || "No Title Available"}
                  </Link>
                </div>
                <div className="w-0 md:w-[45%] hidden md:block">
                  <h1>{item.book?.desc?.slice(0, 50) || "No Description"}...</h1>
                </div>
                <div className="w-[17%] md:w-[9%]">
                  <h1>Rs {item.book?.price || "N/A"}</h1>
                </div>
                <div className="w-[30%] md:w-[16%]">
                  <h1 className="font-semibold">
                    <button
                      className="hover:scale-105 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click toggle
                        toggleOptions(i);
                      }}
                    >
                      {item.status === "order placed" ? (
                        <div className="text-yellow-500">{item.status}</div>
                      ) : item.status === "Canceled" ? (
                        <div className="text-red-500">{item.status}</div>
                      ) : (
                        <div className="text-green-500">{item.status}</div>
                      )}
                    </button>

                    {Options === i && ( // Conditionally show dropdown if this row is selected
                      <div className="flex">
                        <select name="status" className="bg-gray-800">
                          {[
                            "order placed",
                            "out of delivery",
                            "delivered",
                            "canceled",
                          ].map((statusOption, index) => (
                            <option value={statusOption} key={index}>
                              {statusOption}
                            </option>
                          ))}
                        </select>
                        <button className="text-green-500 hover:text-pink-600 mx-2">
                          <FaCheck />
                        </button>
                      </div>
                    )}
                  </h1>
                </div>
                <div className="w-[10%] md:w-[5%]">
                  <button className="text-xl hover:text-orange-500">
                    <IoOpenOutline />
                  </button>
                </div>

                {/* Conditionally render user info when Options === current index */}
                {Options === i && (
                  <div className="bg-gray-700 p-4 mt-2 rounded-md">
                    <h2>User Info</h2>
                    <p>Name: {item.user?.name || "Unknown"}</p>
                    <p>Email: {item.user?.email || "No email available"}</p>
                    <p>Address: {item.user?.address || "No address available"}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[100%] flex items-center justify-center">
          No Orders Found {/* Display this if AllOrders is empty */}
        </div>
      )}
    </div>
  );
}

export default AllOrders;
