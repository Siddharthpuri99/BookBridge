// import React, { useState } from "react";

// function Addbooks() {
//   const [Data, setData] = useState({
//     url: "",
//     title: "",
//     author: "",
//     price: "",
//     desc: "",
//     language: "",
//   });
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   const change = (e) => {
//     const { name, value } = e.target;
//     setData({ ...Data, [name]: value });
//   };
//   const submit = async () => {
//     try {
//       if (
//         Data.url === "" ||
//         Data.title === "" ||
//         Data.author === "" ||
//         Data.price === "" ||
//         Data.desc === "" ||
//         Data.language === ""
//       ) {
//         alert("All fields are Required");
//       } else {
//         const response = await axios.post(
//           "http://localhost:1000/api/v1/add-book",
//           Data,
//           { headers }
//         );
//         setData({
//           url: "",
//           title: "",
//           author: "",
//           price: "",
//           desc: "",
//           language: "",
//         });
//         alert(response.data.message);
//       }
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };
//   return (
//     <div className="h-[100%] p-0 md:p-4">
//       <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
//         Add Book
//       </h1>
//       <div className="p-4 bg-zinc-800 rounded">
//         <div>
//           <label htmlFor="" className="text-zinc-400">
//             Image
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-100 p-2 outline-none"
//             placeholder="url of image"
//             name="url"
//             required
//             value={Data.value}
//             onChange={change}
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="" className="text-zinc-400">
//             Title of book
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="title of book"
//             name="title"
//             required
//             value={Data.title}
//             onChange={change}
//           />
//         </div>

//         <div className="mt-4">
//           <label htmlFor="" className="text-zinc-400">
//             Author of book
//           </label>
//           <input
//             type="text"
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="author of book"
//             name="title"
//             required
//             value={Data.author}
//             onChange={change}
//           />
//         </div>
//         <div className="mt-4 flex gap-4">
//           <div className="w-3/6">
//             <label htmlFor="" className="text-zinc-400">
//               Language
//             </label>
//             <input
//               type="text"
//               className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//               placeholder="language"
//               name="language"
//               required
//               value={Data.language}
//               onChange={change}
//             />
//           </div>
//           <div className="w-3/6">
//             <label htmlFor="" className="text-zinc-400">
//               Price
//             </label>
//             <input
//               type="number"
//               className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//               placeholder="Price"
//               name="price"
//               required
//               value={Data.price}
//               onChange={change}
//             />
//           </div>
          
//         </div>
//         <div className="mt-4">
//           <label htmlFor="" className="text-zinc-400">
//             Description of book
//           </label>
//           <textarea
            
//             className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//             placeholder="Description of book"
//             rows="5"
//             name="desc"
//             required
//             value={Data.desc}
//             onChange={change}
//           />
//         </div>
//         <button className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-75" onClick={submit}>Add Book</button>
//       </div>
//     </div>
//   );
// }

// export default Addbooks;
import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported

function Addbooks() {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === "" ||
        Data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/add-book",
          Data,
          { headers }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(response.data.message);
      }
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="h-[100%] p-0 md:p-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Add Book
      </h1>
      <div className="p-4 bg-zinc-800 rounded">
        <div>
          <label htmlFor="url" className="text-zinc-400">
            Image
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-100 p-2 outline-none"
            placeholder="URL of image"
            name="url"
            required
            value={Data.url} // Corrected to Data.url
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="title" className="text-zinc-400">
            Title of book
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Title of book"
            name="title"
            required
            value={Data.title}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="author" className="text-zinc-400">
            Author of book
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Author of book"
            name="author" // Changed to name="author"
            required
            value={Data.author}
            onChange={change}
          />
        </div>
        <div className="mt-4 flex gap-4">
          <div className="w-3/6">
            <label htmlFor="language" className="text-zinc-400">
              Language
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Language"
              name="language"
              required
              value={Data.language}
              onChange={change}
            />
          </div>
          <div className="w-3/6">
            <label htmlFor="price" className="text-zinc-400">
              Price
            </label>
            <input
              type="number"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Price"
              name="price"
              required
              value={Data.price}
              onChange={change}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="desc" className="text-zinc-400">
            Description of book
          </label>
          <textarea
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Description of book"
            rows="5"
            name="desc"
            required
            value={Data.desc}
            onChange={change}
          />
        </div>
        <button
          className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-75"
          onClick={submit}
        >
          Add Book
        </button>
      </div>
    </div>
  );
}

export default Addbooks;
