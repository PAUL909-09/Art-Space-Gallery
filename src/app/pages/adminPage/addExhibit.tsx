// import { NavLink, useNavigate } from "react-router-dom";
// import { APP_ROUTES, ARTIST_PROFILE, Icons } from "../../config/config";
// import { useState } from "react";

// const AddExhibit = () => {
//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
//   const [selectedArtworks, setSelectedArtworks] = useState<string[]>([]);
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedArtist(e.target.value);
//   };

//   const handleArtworkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const artworkId = e.target.value;
//     if (e.target.checked) {
//       setSelectedArtworks([...selectedArtworks, artworkId]);
//     } else {
//       setSelectedArtworks(selectedArtworks.filter((id) => id !== artworkId));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const handleSubmit = (e: React.FormEvent) => {
//       e.preventDefault();
//       // Handle form submission here.  This is a placeholder; you'll need to implement your logic
//       console.log({
//         exhibitName,
//         exhibitEmail,
//         exhibitContact,
//         exhibitSocial,
//         exhibitDescription,
//         selectedArtist,
//         selectedArtworks,
//       });
//     };
//     setLoading(true);

//     // Simulate an API call
//     setTimeout(() => {
//       setLoading(false);
//       setSuccessMessage("Exhibition added successfully!");

//       // Clear form fields after submission
//       setSelectedImage(null);
//       setStartDate('');
//       setEndDate('');
//       e.currentTarget.reset(); // Reset form fields
//     }, 2000); // Simulate a delay of 2 seconds
//   };

//   return (
//     <div>
//       <section
//         className="min-h-screen bg-black font-Montserrat"
//         style={{ backgroundColor: "#201D1E" }}
//       >
//         <div className="flex flex-col items-center py-12 px-6">
//           <h1 className="text-5xl text-white font-extrabold mb-4 mt-7">
//             ADD EXHIBITION
//           </h1>
//           <p className="text-gray-400 text-center text-sm mb-8 max-w-xl">
//             The exhibition featured a stunning{" "}
//             <span className="text-red-500">collection</span> of contemporary
//             art, showcasing the{" "}
//             <div className="mt-4">
//               <span className="text-red-500">creative talents</span> of both
//               emerging and established{" "}
//               <span className="text-red-500">artists</span>.
//             </div>
//           </p>

//           <div className="p-8 rounded-lg shadow-lg w-full max-w-xl">
//             <div className="flex flex-col items-center mb-6">
//               <div
//                 className="bg-white w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer"
//                 onClick={() => document.getElementById("fileInput")?.click()}
//               >
//                 <div className="rounded-md outline outline-2 outline-offset-8 outline-black">
//                   <img
//                     src={selectedImage || Icons[0]?.src || "default-icon.png"}
//                     alt={Icons[0]?.alt || "default-icon"}
//                     className={
//                       selectedImage
//                         ? "w-full h-full object-cover rounded-lg"
//                         : "h-12 w-12 rounded-md"
//                     }
//                   />
//                 </div>
//               </div>
//               <input
//                 type="file"
//                 id="fileInput"
//                 className="hidden"
//                 onChange={handleImageChange}
//               />
//             </div>
//             <form onSubmit={handleSubmit}>
//               {/* Input Fields */}
//               <label
//                 className="block text-sm text-gray-400 font-semibold mb-2"
//                 htmlFor="name"
//               >
//                 NAME
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Enter the name"
//                 required
//                 className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
//               />

//               <label
//                 className="block text-sm text-gray-400 font-semibold mb-2"
//                 htmlFor="email"
//               >
//                 EMAIL
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter the email"
//                 required
//                 className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
//               />

//               <label
//                 className="block text-sm text-gray-400 font-semibold mb-2"
//                 htmlFor="contact"
//               >
//                 CONTACT NO.
//               </label>
//               <input
//                 type="text"
//                 id="contact"
//                 placeholder="Enter contact number"
//                 required
//                 className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
//               />

//               <label
//                 className="block text-sm text-gray-400 font-semibold mb-2"
//                 htmlFor="social"
//               >
//                 SOCIAL MEDIA
//               </label>
//               <input
//                 type="text"
//                 id="social"
//                 placeholder="Enter social media link"
//                 required
//                 className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
//               />

//               <label
//                 className="block text-sm text-gray-400 font-semibold mb-2"
//                 htmlFor="startDate"
//               >
//                 START DATE
//               </label>
//               <input
//                 type="date"
//                 id="startDate"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 required
//                 className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
//               />

//               <label
//                 className="block text-sm text-gray-400 font-semibold mb-2"
//                 htmlFor="endDate"
//               >
//                 END DATE
//               </label>
//               <input
//                 type="date"
//                 id="endDate"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 required
//                 className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
//               />

//               <label
//                 className="block text-sm text-gray-400 font-semibold mb-2"
//                 htmlFor="description"
//               >
//                 DESCRIPTION
//               </label>

//               <textarea
//                 id="description"
//                 placeholder="Enter description"
//                 required
//                 className="w-full p-3 h-[150px] text-black rounded-md focus:outline-none focus:ring focus:ring-red-500 resize-none" // Adjust height as needed.
//               ></textarea>

//               {/* Submit and Cancel Buttons */}
//               <div className="flex flex-col items-center mt-8 mx-7">
//                 <button
//                   type="submit"
//                   disabled={loading} // Disable button while loading.
//                   className={`bg-[#C62A35] hover:bg-red-700 text-white py-2 px-6 rounded-md font-bold transition-colors w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 >
//                   {loading ? 'Adding...' : 'ADD'}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => navigate(APP_ROUTES.ADMIN[0].path)} // Navigate to a different route on cancel.
//                   className="outline outline-2 outline-white mt-6 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-bold transition-colors w-full"
//                 >
//                   CANCEL
//                 </button>
//               </div>
//             </form>

//             {/* Success Message */}
//             {successMessage && (
//               <div className={`mt-4 p-4 bg-green-500 text-white rounded-md animate-fadeIn`}>
//                 {successMessage}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Add Art Section */}
//       {/* <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
//         <h1 className="text-xl font-bold mb-4">ADD ART</h1>
//         <div className="relative w-auto h-auto bg-red-600 flex items-center justify-center rounded shadow-md">
//           <div
//             className={`w-[40px] h-[40px] bg-red-800 flex items-center justify-center rounded cursor-pointer`}
//             onClick={() => {
//               const route = APP_ROUTES.ADMIN.find(
//                 (route) => route.path === "/addArt");
//               if (route) navigate(route.path);
//             }}
//           >
//             <span className={`text-white text-xl`}>+</span>
//           </div>
//         </div>
//         <hr className={`mt-[20px] w-[80%] border-gray`} />
//       </section> */}

//       <section className="min-h-screen bg-black font-Montserrat">
//         <div className="flex flex-col items-center py-12 px-4">
//           <h1 className="text-4xl text-white font-extrabold mb-4">ADD EXHIBITION</h1>
//           <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl">
//             <form onSubmit={handleSubmit}>
//               {/* Basic Information */}
//               <div className="mb-4">
//                 {/* Name, Email, Contact, Social Media inputs (same as before) */}
//               </div>

//               {/* Artist Selection */}
//               <div className="mb-4">
//                 <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="artist">
//                   ARTIST
//                 </label>
//                 <select
//                   id="artist"
//                   value={selectedArtist || ''}
//                   onChange={handleArtistChange}
//                   className="w-full p-3 mb-4 text-black rounded-md focus:outline-none focus:ring focus:ring-red-500"
//                 >
//                   <option value="">Select Artist</option>
//                   {ARTIST_PROFILE.map((artist) => (
//                     <option key={artist.Name} value={artist.Name}>
//                       {artist.Name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Artwork Selection */}
//               {/* <div className="mb-4">
//                 <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="artworks">
//                   ARTWORKS
//                 </label>
//                 {.map((artwork) => (
//                   <div key={artwork.title} className="flex items-center mb-2">
//                     <input
//                       type="checkbox"
//                       id={artwork.title}
//                       value={artwork.title}
//                       onChange={handleArtworkChange}
//                       checked={selectedArtworks.includes(artwork.title)}
//                       className="mr-2"
//                     />
//                     <label htmlFor={artwork.title}>{artwork.title} by {artwork.artist}</label>
//                   </div>
//                 ))}
//               </div> */}
//               <div className="mb-4">
//                 <label className="block text-sm text-gray-400 font-semibold mb-2" htmlFor="artworks">
//                   ARTWORKS
//                 </label>
//                 {ARTIST_PROFILE.flatMap((artist) => artist.ARTIST_DATA.ArtWork).map((artwork) => ( //flatMap to flatten the array
//                   <div key={artwork.title} className="flex items-center mb-2">
//                     <input
//                       type="checkbox"
//                       id={artwork.title}
//                       value={artwork.title}
//                       onChange={handleArtworkChange} //Make sure you have this function
//                       checked={selectedArtworks.includes(artwork.title)} //Make sure you have this variable
//                       className="mr-2"
//                     />
//                     {/* <label htmlFor={artwork.title}>{artwork.title} by {artist.Name}</label> */}
//                   </div>
//                 ))}
//               </div>

//               {/* Description */}
//               <div className="mb-4">
//                 {/* Description textarea (same as before) */}
//               </div>


//               {/* Buttons */}
//               <div className="flex justify-between mt-6">
//                 <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-bold transition-colors">
//                   ADD
//                 </button>
//                 <button type="button" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-bold transition-colors">
//                   CANCEL
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AddExhibit;

// import { NavLink, useNavigate } from "react-router-dom";
// import { APP_ROUTES, ARTIST_PROFILE, Icons } from "../../config/config";
// import { useState } from "react";

// const AddExhibit = () => {
//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
//   const [selectedArtworks, setSelectedArtworks] = useState<{ [artist: string]: string[] }>({});
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedArtist(e.target.value);
//     setSelectedArtworks([]); // Reset selected artworks when artist changes
//   };

//   const handleArtworkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const artworkId = e.target.value;
//     if (e.target.checked) {
//       setSelectedArtworks([...selectedArtworks, artworkId]);
//     } else {
//       setSelectedArtworks(selectedArtworks.filter((id) => id !== artworkId));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulate an API call
//     setTimeout(() => {
//       setLoading(false);
//       setSuccessMessage("Exhibition added successfully!");

//       // Clear form fields after submission
//       setSelectedImage(null);
//       setStartDate('');
//       setEndDate('');
//       (e.currentTarget as HTMLFormElement).reset(); // Type assertion     }, 2000); // Simulate a delay of 2 seconds
//     }, 2000);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
//         <h1 className="text-4xl font-bold text-center text-[#C62A35] mb-6">Add Exhibition</h1>
//         <p className="text-gray-600 text-center mb-6">
//           Showcase your collection of contemporary art and highlight the creative talents, of emerging and established artists.
//         </p>

//         <div className="flex flex-col items-center mb-6">
//           <div
//             className="bg-gray-200 w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer border border-dashed border-gray-400"
//             onClick={() => document.getElementById("fileInput")?.click()}
//           >
//             <img
//               src={selectedImage || Icons[0]?.src || "default-icon.png"}
//               alt={Icons[0]?.alt || "default-icon"}
//               className={selectedImage ? "w-full h-full object-cover rounded-lg" : "h-12 w-12"}
//             />
//           </div>
//           <input type="file" id="fileInput" className="hidden" onChange={handleImageChange} />
//         </div>

//         <form onSubmit={handleSubmit}>
//           {/* Input Fields */}
//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
//           <input type="text" id="name" placeholder="Enter the name" required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" />

//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
//           <input type="email" id="email" placeholder="Enter the email" required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" />

//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="contact">Contact No.</label>
//           <input type="text" id="contact" placeholder="Enter contact number" required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" />

//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="social">Social Media</label>
//           <input type="text" id="social" placeholder="Enter social media link" required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" />

//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="startDate">Start Date</label>
//           <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" />

//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="endDate">End Date</label>
//           <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" />

//           {/* Artist Selection */}
//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="artist">Artist</label>
//           <select id="artist" value={selectedArtist || ''} onChange={handleArtistChange} className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500">
//             <option value="">Select Artist</option>
//             {ARTIST_PROFILE.map((artist) => (
//               <option key={artist.Name} value={artist.Name}>{artist.Name}</option>
//             ))}
//           </select>

//           {/* Artwork Selection */}
//           {selectedArtist && (
//             <>
//               <label className="block text-sm text-gray-700 font-semibold mb-2">Artworks</label>
//               {ARTIST_PROFILE.find(artist => artist.Name === selectedArtist)?.ARTIST_DATA.ArtWork.map((artwork) => (
//                 <div key={artwork.title} className={`flex items-center mb-[10px]`}>
//                   <input
//                     type="checkbox"
//                     id={artwork.title}
//                     value={artwork.title}
//                     onChange={handleArtworkChange}
//                     checked={selectedArtworks.includes(artwork.title)}
//                     className={`mr-[10px]`}
//                   />
//                   {/* Display artwork title and image preview */}
//                   <img src={artwork.image.src} alt={artwork.title} className={`h-[40px] w-[40px] mr-[10px]`} />
//                   <label htmlFor={artwork.title}>{artwork.title}</label>
//                 </div>
//               ))}
//             </>
//           )}

//           {/* Selected Artworks Section */}
//           <h2 className="text-xl font-bold text-center text-black mt-6 mb-4">Selected Artworks</h2>
//           {Object.keys(selectedArtworks).length > 0 ? (
//             Object.entries(selectedArtworks).map(([artist, artworks]) => (
//               <div key={artist} className="mb-4">
//                 <h3 className="text-lg font-semibold text-[#C62A35] mb-2">{artist}</h3>
//                 <ul className="list-disc pl-5">
//                   {artworks.map(title => (
//                     <li key={title}>{title}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 text-center">No artworks selected yet.</p>
//           )}
//           {/* Description */}
//           <label className="block text-sm text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
//           <textarea id="description" placeholder="Enter description" required className={`w-full p-[10px] h-[150px] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500 resize-none`}></textarea>

//           {/* Submit and Cancel Buttons */}
//           <div className={`flex flex-col items-center mt-[20px] mx-[20px]`}>
//             <button type={`submit`} disabled={loading} className={`bg-[#C62A35] hover:bg-red-[700] text-white py-[10px] px-[24px] rounded-md font-bold transition-colors w-full ${loading ? 'opacity-[0.5] cursor-notallowed' : ''}`}>
//               {loading ? 'Adding...' : 'ADD'}
//             </button>

//             <button type={`button`} onClick={() => navigate(APP_ROUTES.ADMIN[0].path)} className={`outline outline-[2px] outline-white mt-[20px] hover:bg-gray-[600] text-white py-[10px] px-[24px] rounded-md font-bold transition-colors w-full`}>
//               CANCEL
//             </button>
//           </div>
//         </form>

//         {/* Success Message */}
//         {successMessage && (
//           <div className={`mt-[20px] p-[10px] bg-green-[500] text-white rounded-md animate-fadeIn`}>
//             {successMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddExhibit;

// import { NavLink, useNavigate } from "react-router-dom";
// import { APP_ROUTES, ARTIST_PROFILE, Icons } from "../../config/config";
// import { useState } from "react";
// import Modal from "../../components/Modal/Modal";

// const AddExhibit = () => {
//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
//   const [selectedArtworks, setSelectedArtworks] = useState<Record<string, string[]>>({});
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

//   const handleModalConfirm = () => {
//     // Perform the actual save operation here (e.g., API call)
//     setLoading(true);
//     // Simulate a save (replace with your actual save logic)
//     setTimeout(() => {
//       setLoading(false);
//       alert("Exhibit Added Successfully!");
//       navigate(-1); // Go back to the previous page after saving
//       setIsModalOpen(false); // Close the modal
//     }, 2000);
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     setIsModalOpen(true); // Open the modal instead of directly saving
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedArtist(e.target.value);
//   };

//   const handleArtworkChange = (e: React.ChangeEvent<HTMLInputElement>, artist: string) => {
//     const artworkId = e.target.value;
//     setSelectedArtworks((prev) => {
//       const updatedArtworks = { ...prev };
//       if (e.target.checked) {
//         updatedArtworks[artist] = [...(updatedArtworks[artist] || []), artworkId];
//       } else {
//         updatedArtworks[artist] = updatedArtworks[artist]?.filter((id) => id !== artworkId) || [];
//       }
//       return updatedArtworks;
//     });
//   };

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setTimeout(() => {
//   //     setLoading(false);
//   //     setSuccessMessage("Exhibition added successfully!");
//   //     setSelectedImage(null);
//   //     setStartDate("");
//   //     setEndDate("");
//   //   }, 2000);
//   // };

//   return (
//     // <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//     <div className="min-h-screen bg-gradient-to-br from-[#f3b9b4] via-[#C62A35] to-[#cc242f] flex items-center justify-center p-12">
//       <div className="bg-white/60 rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
//         <h1 className="text-4xl font-bold text-center text-[#C62A35] mb-6">Add Exhibition</h1>
//         {loading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-2xl">
//             <div className="animate-spin h-10 w-10 border-t-4 border-red-700 border-solid rounded-full"></div>
//           </div>
//         )}
//         <div className="flex flex-col items-center mb-6">
//           <div className="bg-white w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer border border-dashed border-gray-400" onClick={() => document.getElementById("fileInput")?.click()}>
//             <img src={selectedImage || Icons[0]?.src || "default-icon.png"} alt="Exhibit Preview" className={selectedImage ? "w-full h-full object-cover rounded-lg" : "h-12 w-12"} />
//           </div>
//           <input type="file" id="fileInput" className="hidden" onChange={handleImageChange} />
//         </div>

//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2">Name</label>
//           <input type="text" placeholder="Enter the name" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">Location</label>
//           <input type="location" placeholder="Enter the location" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">Start Date</label>
//           <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">End Date</label>
//           <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">Description</label>
//           <textarea
//             placeholder="Enter description"
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500 resize-y"
//             style={{ height: '150px', overflowY: 'auto' }}
//           ></textarea>

//           <label className="block mb-2">Artist</label>
//           <select value={selectedArtist || ""} onChange={handleArtistChange} className="w-full mb-4">
//             <option value="">Select Artist</option>
//             {ARTIST_PROFILE.map((artist) => (
//               <option key={artist.Name} value={artist.Name}>{artist.Name}</option>
//             ))}
//           </select>

//           {selectedArtist && (
//             <div >
//               <label className="block mb-2">Artworks</label>
//               {ARTIST_PROFILE.find(a => a.Name === selectedArtist)?.ARTIST_DATA.ArtWork.map((art) => (
//                 <div key={art.title} className="flex items-center mb-2">
//                   <input type="checkbox" id={art.title} value={art.title} onChange={(e) => handleArtworkChange(e, selectedArtist)} />
//                   <label htmlFor={art.title} className="ml-2">{art.title}</label>
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="bg-black/30 p-6 rounded-md"> {/* Added background */}
//             <h2 className=" text-lg font-bold text-white">Selected Artworks</h2>
//             {Object.keys(selectedArtworks).length === 0 ? (
//               <p className="text-gray-200">No artworks selected.</p>
//             ) : (
//               Object.keys(selectedArtworks).map((artworkTitle) => (
//                 <div key={artworkTitle} className="mt-4">
//                   <h3 className="font-semibold text-white">{artworkTitle}</h3>
//                   <ul>
//                     {selectedArtworks[artworkTitle].map((artwork) => (
//                       <li key={artwork} className="text-gray-200">{artwork}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               onClick={handleSubmit}
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
//             >
//               {loading ? "Adding..." : "Add Exhibit"}
//               {/* Add Exhibits */}
//             </button>
//           </div>

//           <Modal
//             isOpen={isModalOpen}
//             onClose={() => setIsModalOpen(false)}
//             title="Confirm Add Exhibits"
//             message="Are you sure adding the Exhibits?"
//             confirmButtonText="Add"
//             onConfirm={handleModalConfirm}
//           // itemData={formData} // Removed itemData
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddExhibit;

// import { useNavigate } from "react-router-dom";
// import { ARTIST_PROFILE } from "../../config/config";
// import { useState } from "react";
// import Modal from "../../components/Modal/Modal";

// const AddExhibit = () => {
//   const navigate = useNavigate();
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
//   const [selectedArtworks, setSelectedArtworks] = useState<
//     { artist: string; title: string; imageSrc: string }[]
//   >([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalConfirm = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       alert("Exhibit Added Successfully!");
//       navigate(-1);
//       setIsModalOpen(false);
//     }, 2000);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const artistName = e.target.value;
//     if (artistName && !selectedArtists.includes(artistName)) {
//       setSelectedArtists([...selectedArtists, artistName]);
//     }
//   };

//   const handleArtworkChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     artist: string,
//     art: { title: string; image: { src: string; alt: string } }
//   ) => {
//     setSelectedArtworks((prev) => {
//       const updatedArtworks = [...prev];
//       if (e.target.checked) {
//         updatedArtworks.push({ artist, title: art.title, imageSrc: art.image.src });
//       } else {
//         return updatedArtworks.filter((a) => !(a.artist === artist && a.title === art.title));
//       }
//       return updatedArtworks;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f3b9b4] via-[#C62A35] to-[#cc242f] flex items-center justify-center p-12">
//       <div className="bg-white/60 rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
//         <h1 className="text-4xl font-bold text-center text-[#C62A35] mb-6">
//           Add Exhibition
//         </h1>

//         {loading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-2xl">
//             <div className="animate-spin h-10 w-10 border-t-4 border-red-700 border-solid rounded-full"></div>
//           </div>
//         )}

//         {/* Exhibit Image Upload */}
//         <div className="flex flex-col items-center mb-6">
//           <div
//             className="bg-white w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer border border-dashed border-gray-400"
//             onClick={() => document.getElementById("fileInput")?.click()}
//           >
//             {selectedImage ? (
//               <img src={selectedImage} alt="Exhibit Preview" className="w-full h-full object-cover rounded-lg" />
//             ) : (
//               <p className="text-gray-500">Click to upload image</p>
//             )}
//           </div>
//           <input type="file" id="fileInput" className="hidden" onChange={handleImageChange} />
//         </div>

//         <form onSubmit={handleSubmit}>
//           <label className="block mb-2">Name</label>
//           <input type="text" placeholder="Enter the name" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">Location</label>
//           <input type="text" placeholder="Enter the location" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">Start Date</label>
//           <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">End Date</label>
//           <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

//           <label className="block mb-2">Select Artist</label>
//           <select value="" onChange={handleArtistChange} className="w-full mb-4">
//             <option value="">Choose an artist to add</option>
//             {ARTIST_PROFILE.map((artist) => (
//               <option key={artist.Name} value={artist.Name}>{artist.Name}</option>
//             ))}
//           </select>

//           {selectedArtists.map((artist) => (
//             <div key={artist} className="mt-4">
//               <h2 className="text-lg font-semibold">{artist}</h2>
//               {ARTIST_PROFILE.find(a => a.Name === artist)?.ARTIST_DATA.ArtWork.map((art) => (
//                 <div key={art.title} className="flex items-center mb-2">
//                   <input
//                     type="checkbox"
//                     id={art.title}
//                     value={art.title}
//                     onChange={(e) => handleArtworkChange(e, artist, art)}
//                     checked={selectedArtworks.some((a) => a.artist === artist && a.title === art.title)}
//                   />
//                   <label htmlFor={art.title} className="ml-2">{art.title}</label>
//                 </div>
//               ))}
//             </div>
//           ))}

//           {/* Selected Artworks Preview */}
//           <div className="bg-black/30 p-6 rounded-md mt-6">
//             <h2 className="text-lg font-bold text-white">Selected Artworks</h2>
//             {selectedArtworks.length === 0 ? (
//               <p className="text-gray-200">No artworks selected.</p>
//             ) : (
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 {selectedArtworks.map((art) => (
//                   <div key={`${art.artist}-${art.title}`} className="bg-white rounded-lg p-3 shadow-md">
//                     <img src={art.imageSrc} alt={art.title} className="w-full h-32 object-cover rounded-md mb-2" />
//                     <p className="text-gray-800 text-sm text-center font-semibold">{art.title}</p>
//                     <p className="text-gray-500 text-xs text-center">by {art.artist}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="flex justify-center mt-6">
//             <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
//               {loading ? "Adding..." : "Add Exhibit"}
//             </button>
//           </div>

//           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirm Add Exhibits" confirmButtonText="Add" onConfirm={handleModalConfirm} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddExhibit;
import { useNavigate } from "react-router-dom";
import { ARTIST_PROFILE } from "../../config/config";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const AddExhibit = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedArtworks, setSelectedArtworks] = useState<
    { artist: string; title: string; imageSrc: string }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Exhibit Added Successfully!");
      navigate(-1);
      setIsModalOpen(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArtistChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const artistName = e.target.value;
    if (artistName && !selectedArtists.includes(artistName)) {
      setSelectedArtists([...selectedArtists, artistName]);
    }
  };

  const handleArtworkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    artist: string,
    art: { title: string; image: { src: string; alt: string } }
  ) => {
    setSelectedArtworks((prev) => {
      const updatedArtworks = [...prev];
      if (e.target.checked) {
        updatedArtworks.push({ artist, title: art.title, imageSrc: art.image.src });
      } else {
        return updatedArtworks.filter((a) => !(a.artist === artist && a.title === art.title));
      }
      return updatedArtworks;
    });
  };

  return (



    <div className="min-h-screen bg-gradient-to-br from-[#E66465] via-[#C62A35] to-[#A3212A] flex flex-col items-center p-12">
      <div className="bg-white/60 rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-[#C62A35] mb-6">
          Add Exhibition
        </h1>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-2xl">
            <div className="animate-spin h-10 w-10 border-t-4 border-red-700 border-solid rounded-full"></div>
          </div>
        )}

        {/* Exhibit Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <div
            className="bg-white w-[350px] h-[350px] flex items-center justify-center rounded-lg cursor-pointer border border-dashed border-gray-400"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            {selectedImage ? (
              <img src={selectedImage} alt="Exhibit Preview" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <p className="text-gray-500">Click to upload cover image</p>
            )}
          </div>
          <input type="file" id="fileInput" className="hidden" onChange={handleImageChange} />
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Name</label>
          <input type="text" placeholder="Enter the name" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

          <label className="block mb-2">Location</label>
          <input type="text" placeholder="Enter the location" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

          <label className="block mb-2">Start Date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

          <label className="block mb-2">End Date</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

         
        </form>
      </div>

      {/* Artist & Art Selection Section */}
      <div className="bg-white/80 rounded-2xl shadow-lg p-6 mt-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-[#C62A35] mb-4">Select Artists & Artworks</h2>

        <label className="block mb-2">Choose an Artist</label>
        <select value="" onChange={handleArtistChange} className="w-full p-3 mb-4 border border-gray-300 rounded-md">
          <option value="">Select an artist</option>
          {ARTIST_PROFILE.map((artist) => (
            <option key={artist.Name} value={artist.Name}>{artist.Name}</option>
          ))}
        </select>

        {selectedArtists.map((artist) => (
          <div key={artist} className="mt-4">
            <h2 className="text-lg font-semibold">{artist}</h2>
            {ARTIST_PROFILE.find(a => a.Name === artist)?.ARTIST_DATA.ArtWork.map((art) => (
              <div key={art.title} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={art.title}
                  value={art.title}
                  onChange={(e) => handleArtworkChange(e, artist, art)}
                  checked={selectedArtworks.some((a) => a.artist === artist && a.title === art.title)}
                />
                <label htmlFor={art.title} className="ml-2">{art.title}</label>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Selected Artworks Display */}
      <div className="bg-black/30 p-8 rounded-md mt-8 w-full max-w-6xl h-[400px] overflow-y-auto">
        <h2 className="text-xl font-bold text-white">Selected Artworks</h2>
        {selectedArtworks.length === 0 ? (
          <p className="text-gray-200">No artworks selected.</p>
        ) : (
          <div className="grid grid-cols-3 gap-6 mt-4">
            {selectedArtworks.map((art) => (
              <div key={`${art.artist}-${art.title}`} className="bg-white rounded-lg p-4 shadow-md">
                <img src={art.imageSrc} alt={art.title} className="w-full h-40 object-cover rounded-md mb-2" />
                <p className="text-gray-800 text-sm text-center font-semibold">{art.title}</p>
                <p className="text-gray-500 text-xs text-center">by {art.artist}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors">
              {loading ? "Adding..." : "Add Exhibit"}
            </button>
          </div>
    </div>
  );
};

export default AddExhibit;
