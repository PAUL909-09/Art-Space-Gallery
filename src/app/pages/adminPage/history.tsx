import React from "react";
import { mockHistoryData } from "../../config/config";
import HistoryTable from "../../components/Tables/HistoryTable";

const History = () => {
  const handleDelete = (index: number) => {
    // Implement delete functionality
    console.log(`Deleting entry at index ${index}`);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-black px-6 py-4 z-10 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">History</h1>
          <button className="bg-red-600 text-white px-5 py-2 text-sm font-medium rounded-lg hover:bg-red-700 transition">
            Delete all
          </button>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow flex items-center justify-center px-6 py-16 mt-16">
        <div className="bg-white text-black rounded-xl shadow-lg max-w-4xl w-full p-6">
          <HistoryTable entries={mockHistoryData} onDelete={handleDelete} />
        </div>
      </main>

      {/* Pagination Section */}
      <footer className="flex justify-center items-center py-6 bg-black">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg hover:bg-gray-400 transition">
            &lt;
          </button>
          <button className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition">
            1
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 transition">
            2
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 transition">
            3
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 transition">
            4
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 transition">
            5
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg hover:bg-gray-400 transition">
            &gt;
          </button>
        </div>
      </footer>
    </div>
  );
};

export default History;
