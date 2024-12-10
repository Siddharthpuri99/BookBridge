// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import Profile from '../pages/Profile';

// function Settings() {
//   const[Value,setValue] = useState({address:""});
//   const[ProfileData,setProfileData] = useState();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   useEffect(()=>{
//     const fetch = async()=>{
//       const response = await axios.get("http://localhost:1000/api/v1/get-user-info",{headers});
//       setProfileData(response.data);
//       setValue({address:response.data.address});
//     }
//     fetch();
//   },[]);
//   return (
//     <div>
//       {ProfileData && (
//         <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
//           <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>Settings</h1>
//           <div className='flex gap-12'>
//           <div className=''>
//             <label htmlFor=''>Username</label>
//             <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{ProfileData.username}</p>
//           </div>
//           <div className=''>
//           <label htmlFor=''>Email</label>
//           <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{ProfileData.email}

//           </p>
//           </div>
//           </div>
//           <div className='mt-4 flex flex-col'>
//             <label htmlFor=''>Address</label>
//             <textarea className='p-2 rounded bg-zinc-800 mt-2 font-semibold' rows="5" placeholder='Address' value={Value.address}
//             />
//           </div>
//           <div className='mt-4 flex justify-end'><button className='bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400'>Update
//             </button>
//             </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Settings;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Settings() {
  const [value, setValue] = useState({ address: "" });
  const [profileData, setProfileData] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/get-user-info", { headers });
        setProfileData(response.data);
        setValue({ address: response.data.address });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetch();
  }, []);

  const handleAddressChange = (e) => {
    setValue({ address: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:1000/api/v1/update-address", value, { headers });
      // Optionally, you can show a success message or update the profile data
      alert("Address updated successfully!");
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  return (
    <div>
      {profileData && (
        <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>Settings</h1>
          <div className='flex gap-12'>
            <div>
              <label htmlFor=''>Username</label>
              <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{profileData.name}</p>
            </div>
            <div>
              <label htmlFor=''>Email</label>
              <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{profileData.email}</p>
            </div>
          </div>
          <div className='mt-4 flex flex-col'>
            <label htmlFor=''>Address</label>
            <textarea
              className='p-2 rounded bg-zinc-800 mt-2 font-semibold'
              rows="5"
              placeholder='Address'
              value={value.address}
              onChange={handleAddressChange}
            />
          </div>
          <div className='mt-4 flex justify-end'>
            <button
              className='bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400'
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
