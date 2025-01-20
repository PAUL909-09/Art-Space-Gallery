import React from "react";
import { HistoryEntry } from "../../config/config";

interface HistoryTableProps {
  entries: HistoryEntry[];
  onDelete: (index: number) => void;
}

const HistoryTable: React.FC<HistoryTableProps> = ({ entries, onDelete }) => {
  return (
    <section className="mb-8">
 
      <div className="flex justify-between mb-4 text-1xl font-bold text-black">
        <div className="w-48 ml-16">USER</div>
        <div className="flex-1 ml-36">ACTION</div>
        <div className="w-32 mr-5">DATE</div>
        <div className="w-24"></div>
      </div>
      {entries.map((entry, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-200 py-4 last:border-b-0"
        >
          <div className="flex items-center gap-4">
            <img
              src={entry.userImage}
              alt={entry.userName}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{entry.userName}</p>
              <p className="text-sm text-gray-500">{entry.userEmail}</p>
            </div>
          </div>
          <p className="flex ml-8 text-gray-700 text-sm">{entry.action}</p>
          <p className="text-sm text-gray-500">{entry.date}</p>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this entry?')) {
                onDelete(index);
              }
            }}
            className="ml-6 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
};

export default HistoryTable;
