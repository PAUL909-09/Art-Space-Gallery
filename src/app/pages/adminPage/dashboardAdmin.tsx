
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { APP_COLORS, ARTIST_PROFILE, ExhibitsData } from "../../config/config";

const StatsCard = ({
  title,
  value,
  description,
  isHighlighted,
}: {
  title: string;
  value: string | number;
  description: string;
  isHighlighted: boolean;
}) => (
  <div
    className={`bg-gray-800 text-white rounded-xl p-6 flex flex-col items-center shadow-md transition-transform duration-300 h-[150px] ${
      isHighlighted
        ? "hover:ring-2 hover:ring-blue-500 hover:scale-105"
        : "hover:scale-105"
    }`}
    aria-label={`${title}: ${value}`}
  >
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-5xl font-bold mb-1">{value}</p>
    <span className="text-gray-400">{description}</span>
  </div>
);
const PieChartCard = ({
  title,
  data,
  dataKey,
  nameKey,
}: {
  title: string;
  data: Array<any>;
  dataKey: string;
  nameKey: string;
}) => {
  return (
    <div
      className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full lg:w-[calc(33.33%-1rem)] flex flex-col items-center"
      aria-label={`Pie chart: ${title}`}
    >
      <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 text-white uppercase">
        {title}
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="40%" // Moves pie chart up to create space for legend
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => `${value.toFixed(2)}`}
            wrapperStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              color: "black",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend positioned at the bottom */}
      <div className=" w-full flex justify-center">
        <ul className="flex flex-wrap gap-2 text-white text-sm">
          {data.map((entry) => (
            <li key={entry[nameKey]} className="flex items-center justify-center gap-8">
              <span
                className="inline-block w-4 h-4 rounded"
                style={{ backgroundColor: entry.color }}
              />
              {entry[nameKey]} ({entry[dataKey].toFixed(2)})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

//mock up no centainly working 
// const MonthChart = ({
//   data,
// }: {
//   data: { month: string; visitors: number; sales: number }[];
// }) => (
//   <div
//     className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full lg:w-[calc(66.67%-1rem)]"
//     aria-label="Monthly statistics chart"
//   >
//     {/* <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white uppercase">
//       Monthly Statistics
//     </h3> */}
//      <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white uppercase">
//       Total Views 
//     </h3>
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart
//         data={data}
//         margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//         <XAxis dataKey="month" stroke="#fff" tick={{ fill: "#fff" }} />
//         <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
//         <Tooltip
//           contentStyle={{
//             backgroundColor: "#333",
//             border: "none",
//             borderRadius: "8px",
//             color: "#fff",
//           }}
//         />
//         <Line
//           type="monotone"
//           dataKey="visitors"
//           stroke="#C62A35"
//           strokeWidth={2}
//           dot={{ fill: "#C62A35" }}
//         />
//         <Line
//           type="monotone"
//           dataKey="sales"
//           stroke="#E2A1A1"
//           strokeWidth={2}
//           dot={{ fill: "#E2A1A1" }}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// const generateMockMonthlyData = () => {
//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   const monthlyData = months.map((month) => {
//     let totalViews = 0;
//     ARTIST_PROFILE.forEach((artist) => {
//       artist.ARTIST_DATA.ArtWork.forEach((art) => {
//         totalViews += Math.floor(art.views / 12) + Math.floor(Math.random() * 10); // Distribute views per month with small variance
//       });
//     });
//     return { month, views: totalViews };
//   });
//   return monthlyData;
// };

// const MonthChart = ({ data }) => (
//   <div className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full lg:w-[calc(66.67%-1rem)]" aria-label="Monthly views chart">
//     <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white uppercase">
//       Artwork Views Per Month
//     </h3>
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//         <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//         <XAxis dataKey="month" stroke="#fff" tick={{ fill: "#fff" }} />
//         <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
//         <Tooltip
//           contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "8px", color: "#fff" }}
//         />
//         <Line type="monotone" dataKey="views" stroke="#C62A35" strokeWidth={2} dot={{ fill: "#C62A35" }} />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

const generateMockMonthlyData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthlyData = months.map((month, index) => {
    let totalViews = 0;

    // Distribute exhibit views over the months
    ExhibitsData.forEach((exhibit) => {
      totalViews += Math.floor(exhibit.views / 12) + Math.floor(Math.random() * 10); 
    });

    return { month, views: totalViews  };
  });

  return monthlyData;
};

const MonthChart = ({ data }) => (
  <div className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full lg:w-[calc(66.67%-1rem)]" aria-label="Monthly views chart">
    <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white uppercase">
      Total Views Per Month
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="month" stroke="#fff" tick={{ fill: "#fff" }} />
        <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
        <Tooltip
          contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "8px", color: "#fff" }}
        />
        <Line type="monotone" dataKey="views" stroke="#C62A35" strokeWidth={2} dot={{ fill: "#C62A35" }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Dashboard = () => {
  const monthlyData = generateMockMonthlyData();

  const stats = [
    { title: "Total Art", value: 21, description: "Art pieces" },
    { title: "Exhibits", value: 8, description: "Successful exhibits" },
    { title: "Artists", value: 6, description: "Active artists" },
  ];

  // const artData = [
  //   // { name: "Paintings", value: 178.79, color: "#C62A35" },
  //   { name: "Paintings", value: 200.79, color: "#C62A35" },
   
  // ];

  // const monthlyData = [
  //   { month: "Jan", visitors: 1000, sales: 800 },
  //   { month: "Feb", visitors: 1500, sales: 1200 },
  //   { month: "Jan", visitors: 1000, sales: 800 },
  //   { month: "Feb", visitors: 1500, sales: 1200 },
  // ];

  
 // Process ARTIST_PROFILE to get artwork counts by type
 const artworkCountsByType: { [key: string]: number } = {};

 ARTIST_PROFILE.forEach((artist) => {
  artist.ARTIST_DATA.ArtWork.forEach((artwork) => {
    const type = artwork.type; // type is now correctly inferred as string
    artworkCountsByType[type] = (artworkCountsByType[type] || 0) + 1;
  });
 });

 const colors = ["#C62A35", "#D76B6B", "#E2A1A1", "#8884d8", "#82ca9d", "#e06377"]; // Add more colors as needed

 const artData = Object.entries(artworkCountsByType).map(([name, value], index) => ({
   name,
   value,
   color: colors[index % colors.length], // Cycle through colors
 }));

  // let totalArtworks = 0;
  // for (const count of Object.values(artworkCountsByType)){
  //   totalArtworks += count;
  // }
  return (
    <div className="bg-black min-h-screen">
      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              isHighlighted={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 lg:px-8">
        <div className="py-12 px-4 lg:px-8 flex flex-wrap gap-6 justify-center"> {/* Horizontal arrangement */}
          <PieChartCard
            title="Art Distribution"
            data={artData}
            dataKey="value"
            nameKey="name"
          />
          <MonthChart data={monthlyData} />
        </div>
      </section>

      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Exhibits</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gray-800 p-4"> {/* Increased columns to 4 */}
              <div className="text-white font-semibold">Exhibit</div>
              <div className="text-white font-semibold">Date</div>
              <div className="text-white font-semibold">Status</div> {/* Added Status column */}
              <div className="text-white font-semibold text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {ExhibitsData.map((exhibit) => (
                <div key={exhibit.id} className="grid grid-cols-4 p-4"> {/* Increased columns to 4 */}
                  <div className="text-white col-span-1">{exhibit.title}</div>
                  <div className="text-white col-span-1">{exhibit.date}</div>
                  <div className="text-white">{exhibit.status}</div> {/* Added Status display */}
                <div className="flex justify-end gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center">
                    Edit <span className="ml-2">✏️</span>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                    Delete <span className="ml-2">🗑️</span>
                  </button>
                </div>
              </div>
              ))}

              {/* Add New Row */}
              <div className="grid grid-cols-4 p-4"> {/* Increased columns to 4 */}
                <div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                    + Add New Exhibit
                  </button>
                </div>
                <div></div>
                <div></div>
                <div></div> {/* Added empty cell for Action column */}
              </div>
            </div>
                </div>
              </div>
      </section>

       <section className="py-14 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Accounts</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-800 p-4">
              <div className="text-white font-semibold">Name</div>
              <div className="text-white font-semibold">Status</div>
              <div className="text-white font-semibold text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {/* Row 1 */}
              {ARTIST_PROFILE.map((artist, index) => (
                <div key={index} className="grid grid-cols-3 p-4">
                  <div className="text-white">{artist.Name}</div>
                <div className="text-white">Active</div>
                <div className="flex justify-end gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center">
                      {/* Edit <span className="ml-2">✏️</span> */}
                    Edit <span className="ml-2">&#9998;</span> {/* Replaced ✏️ with a more universally supported edit icon */}
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                      {/* Delete <span className="ml-2">🗑️</span> */}
                    Delete <span className="ml-2">&#128465;</span> {/* Replaced 🗑️ with a more universally supported delete icon */}
                    </button>
                  </div>
                </div>
              ))}

              {/* Row 2 */}
              

              {/* Add New Row */}
              <div className="grid grid-cols-3 p-4">
                <div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                    + Add New Account
                  </button>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-14 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mt-10 text-white mb-8">Guests</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gray-800 p-4"> {/* Increased columns to 4 */}
              <div className="text-white font-semibold">Name</div>
              <div className="text-white font-semibold">Email</div>
              <div className="text-white font-semibold">Contact Number</div>
              <div className="text-white font-semibold text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {/* Row 1 */}
              { /* Add mock guest data here */}
              {[
                { name: "Guest 1", email: "guest1@example.com", contact: "123-456-7890" },
                { name: "Guest 2", email: "guest2@example.com", contact: "987-654-3210" },
                { name: "Guest 3", email: "guest3@example.com", contact: "555-123-4567" },
              ].map((guest, index) => (
                <div key={index} className="grid grid-cols-4 p-4">
                  <div className="text-white">{guest.name}</div>
                  <div className="text-white">{guest.email}</div>
                  <div className="text-white">{guest.contact}</div>
                  <div className="flex justify-end gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center">
                    Edit <span className="ml-2">✏️</span>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                    Delete <span className="ml-2">🗑️</span>
                  </button>
                </div>
              </div>
              ))}

              {/* Row 2 */}
              
              {/* Add New Row */}
              <div className="grid grid-cols-4 p-4"> {/* Increased columns to 4 */}
                {/* <div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                    + Add New Guest
                  </button>
                </div> */}
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Legend,
//   Tooltip,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";
// import { APP_COLORS } from "../../config/config";
// import Modal from "../../components/Modal/Modal";

// // Sample data (REPLACE with your actual data fetching and processing)
// const stats = [
//   { title: "Total Art", value: 145, description: "Art pieces" },
//   { title: "Exhibits", value: 3, description: "Successful exhibits" },
//   { title: "Artists", value: 13, description: "Active artists" },
// ];

// const artData = [
//   { name: "Paintings", value: 178.79, color: "#C62A35" },
//   { name: "Pop-Art", value: 124.65, color: "#D76B6B" },
//   { name: "Expressionism", value: 134.14, color: "#E2A1A1" },
// ];

// const monthlyData = [
//   { month: "Jan", visitors: 1000, sales: 800 },
//   { month: "Feb", visitors: 1500, sales: 1200 },
//   { month: "Mar", visitors: 1200, sales: 900 },
//   { month: "Apr", visitors: 1800, sales: 1500 },
//   { month: "May", visitors: 1600, sales: 1300 },
// ];


// interface Exhibit {
//   title: string;
//   status: string;
//   id: string; // Assuming you have unique IDs for exhibits
// }

// interface Account {
//   email: string;
//   status: string;
//   id: string; // Assuming you have unique IDs for accounts
// }

// interface Guest {
//   email: string;
//   status: string;
//   id: string; // Assuming you have unique IDs for guests
// }

// const Dashboard = () => {
//   const [isExhibitModalOpen, setIsExhibitModalOpen] = useState(false);
//   const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
//   const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
//   const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);
//   const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
//   const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);


//   // Sample exhibit data (REPLACE with your actual data)
//   const exhibits: Exhibit[] = [
//     { title: "Exhibit 1", status: "Ongoing", id: "1" },
//     { title: "Exhibit 2", status: "Coming Soon", id: "2" },
//   ];

//   // Sample account data (REPLACE with your actual data)
//   const accounts: Account[] = [
//     { email: "admin@example.com", status: "Active", id: "a1" },
//     { email: "user@example.com", status: "Inactive", id: "a2" },
//   ];

//   // Sample guest data (REPLACE with your actual data)
//   const guests: Guest[] = [
//     { email: "guest1@example.com", status: "Pending", id: "g1" },
//     { email: "guest2@example.com", status: "Accepted", id: "g2" },
//   ];

//   const handleOpenExhibitModal = (exhibit: Exhibit) => {
//     setSelectedExhibit(exhibit);
//     setIsExhibitModalOpen(true);
//   };

//   const handleCloseExhibitModal = () => {
//     setSelectedExhibit(null);
//     setIsExhibitModalOpen(false);
//   };

//   const handleOpenAccountModal = (account: Account) => {
//     setSelectedAccount(account);
//     setIsAccountModalOpen(true);
//   };

//   const handleCloseAccountModal = () => {
//     setSelectedAccount(null);
//     setIsAccountModalOpen(false);
//   };

//   const handleOpenGuestModal = (guest: Guest) => {
//     setSelectedGuest(guest);
//     setIsGuestModalOpen(true);
//   };

//   const handleCloseGuestModal = () => {
//     setSelectedGuest(null);
//     setIsGuestModalOpen(false);
//   };

//   const handleConfirmExhibit = () => {
//     // ... your delete/edit logic for exhibits ...
//     handleCloseExhibitModal();
//   };

//   const handleConfirmAccount = () => {
//     // ... your delete/edit logic for accounts ...
//     handleCloseAccountModal();
//   };

//   const handleConfirmGuest = () => {
//     // ... your delete/edit logic for guests ...
//     handleCloseGuestModal();
//   };
//   return (
//     <div className="bg-black min-h-screen">
//       {/* ... (Stats Section remains the same) ... */}

//       {/* ... (Pie Chart Section remains the same) ... */}

//       {/* ... (Month Chart Section remains the same) ... */}

//       {/* Exhibits Section with Modal */}
//       <section className="py-12 px-4 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-white mb-8">Exhibits</h2>
//           <div className="bg-gray-900 rounded-2xl overflow-hidden">
//             <div className="grid grid-cols-3 bg-gray-800 p-4">
//               <div className="text-white font-semibold">Exhibit</div>
//               <div className="text-white font-semibold">Status</div>
//               <div className="text-white font-semibold text-right">Action</div>
//             </div>
//             <div className="divide-y divide-gray-700">
//               {exhibits.map((exhibit) => (
//                 <div key={exhibit.id} className="grid grid-cols-3 p-4">
//                   <div className="text-white">{exhibit.title}</div>
//                   <div className="text-white">{exhibit.status}</div>
//                   <div className="flex justify-end gap-2">
//                     <button
//                       onClick={() => handleOpenExhibitModal(exhibit)}
//                       className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center"
//                     >
//                       Edit <span className="ml-2">✏️</span>
//                     </button>
//                     <button
//                       onClick={() => handleOpenExhibitModal(exhibit)}
//                       className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
//                     >
//                       Delete <span className="ml-2">🗑️</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="grid grid-cols-3 p-4">
//                 <div>
//                   <button
//                     onClick={() => setIsExhibitModalOpen(true)}
//                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
//                   >
//                     + Add New Exhibit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Accounts Section with Modal */}
//       <section className="py-12 px-4 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold mt-10 text-white mb-8">Accounts</h2>
//           <div className="bg-gray-900 rounded-2xl overflow-hidden">
//             <div className="grid grid-cols-3 bg-gray-800 p-4">
//               <div className="text-white font-semibold">Email</div>
//               <div className="text-white font-semibold">Status</div>
//               <div className="text-white font-semibold text-right">Action</div>
//             </div>
//             <div className="divide-y divide-gray-700">
//               {accounts.map((account) => (
//                 <div key={account.id} className="grid grid-cols-3 p-4">
//                   <div className="text-white">{account.email}</div>
//                   <div className="text-white">{account.status}</div>
//                   <div className="flex justify-end gap-2">
//                     <button
//                       onClick={() => handleOpenAccountModal(account)}
//                       className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center"
//                     >
//                       Edit <span className="ml-2">✏️</span>
//                     </button>
//                     <button
//                       onClick={() => handleOpenAccountModal(account)}
//                       className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
//                     >
//                       Delete <span className="ml-2">🗑️</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="grid grid-cols-3 p-4">
//                 <div>
//                   <button
//                     onClick={() => setIsAccountModalOpen(true)}
//                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
//                   >
//                     + Add New Account
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Guest Section with Modal */}
//       <section className="py-12 px-4 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold mt-10 text-white mb-8">Guest</h2>
//           <div className="bg-gray-900 rounded-2xl overflow-hidden">
//             <div className="grid grid-cols-3 bg-gray-800 p-4">
//               <div className="text-white font-semibold">Email</div>
//               <div className="text-white font-semibold">Status</div>
//               <div className="text-white font-semibold text-right">Action</div>
//             </div>
//             <div className="divide-y divide-gray-700">
//               {guests.map((guest) => (
//                 <div key={guest.id} className="grid grid-cols-3 p-4">
//                   <div className="text-white">{guest.email}</div>
//                   <div className="text-white">{guest.status}</div>
//                   <div className="flex justify-end gap-2">
//                     <button
//                       onClick={() => handleOpenGuestModal(guest)}
//                       className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center"
//                     >
//                       Edit <span className="ml-2">✏️</span>
//                     </button>
//                     <button
//                       onClick={() => handleOpenGuestModal(guest)}
//                       className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
//                     >
//                       Delete <span className="ml-2">🗑️</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
            
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modals with onConfirm handlers */}
//       <Modal
//         isOpen={isExhibitModalOpen}
//         onClose={handleCloseExhibitModal}
//         title="Edit/Delete Exhibit"
//         onConfirm={handleConfirmExhibit}
//         itemData={selectedExhibit}
//       />
//       <Modal
//         isOpen={isAccountModalOpen}
//         onClose={handleCloseAccountModal}
//         title="Edit/Delete Account"
//         onConfirm={handleConfirmAccount}
//         itemData={selectedAccount}
//       />
//       <Modal
//         isOpen={isGuestModalOpen}
//         onClose={handleCloseGuestModal}
//         title="Edit/Delete Guest"
//         onConfirm={handleConfirmGuest}
//         itemData={selectedGuest}
//       />
//     </div>

//   );
// };

// export default Dashboard;