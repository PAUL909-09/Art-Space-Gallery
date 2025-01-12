// File: src/components/Dashboard.js
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

// Import your color configuration
import { APP_COLORS } from "../../config/config";

// Reusable Stats Card Component
const StatsCard = ({ title, value, description, isHighlighted }) => (
  <div
    className={`bg-gray-800 text-white rounded-xl p-6 flex flex-col items-center shadow-lg transition-transform duration-300 h-[150px] ${
      isHighlighted
        ? "hover:ring-2 hover:ring-blue-500 hover:scale-105"
        : "hover:scale-105"
    }`}
  >
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-5xl font-bold mb-1">{value}</p>
    <span className="text-gray-400">{description}</span>
  </div>
);

// Reusable PieChart Card Component
const PieChartCard = ({ title, data, dataKey, nameKey, totalValue }) => {
  const renderCustomLabel = ({ name, percent }) =>
    `${name} (${(percent * 100).toFixed(2)}%)`;

  return (
    <div className="bg-black rounded-2xl p-8 shadow-lg w-full lg:w-1/3">
      <h3 className="text-center text-2xl font-bold mb-6 text-white uppercase">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${value.toFixed(2)}`}
            wrapperStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            }}
          />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconSize={15}
            wrapperStyle={{
              color: "white",
              fontSize: "14px",
              marginTop: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: "5px",
            }}
            payload={data.map((entry) => ({
              value: entry[nameKey],
              type: "square",
              color: entry.color,
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-5xl font-extrabold mt-6 text-white">
        {totalValue}
      </p>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const stats = [
    { title: "Total number of Art", value: 145, description: "Art pieces" },
    { title: "Total number of Exhibit", value: 3, description: "Successful exhibits" },
    { title: "Total number of Artist", value: 13, description: "Active Log" },
  ];

  const artData = [
    { name: "Paintings", value: 178.79, color: "#C62A35" },
    { name: "Pop-Art", value: 124.65, color: "#D76B6B" },
    { name: "Expressionism", value: 134.14, color: "#E2A1A1" },
    { name: "Realism", value: 180.36, color: "#73151D" },
    { name: "Abstract Art", value: 183.37, color: "#8B2A2A" },
  ];

  const exhibitsData = [
    { name: "January 2024", value: 145, color: "#C62A35" },
    { name: "June 2024", value: 140, color: "#D76B6B" },
    { name: "December 2024", value: 150, color: "#E2A1A1" },
  ];

  const artistData = [
    { year: "2022", value: 3, color: "#C62A35" },
    { year: "2023", value: 4, color: "#D76B6B" },
    { year: "2024", value: 5, color: "#E2A1A1" },
  ];

  return (
    <div>
      {/* Stats Section */}
      <section className="relative min-h-screen h-[100vh] bg-black flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
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

      {/* Pie Charts Section */}
      <section className={`${APP_COLORS.primary} min-h-screen text-black py-10`}>
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center">
          <PieChartCard
            title="Total of Art"
            data={artData}
            dataKey="value"
            nameKey="name"
            totalValue="801.31"
          />
          <PieChartCard
            title="Total of Exhibits"
            data={exhibitsData}
            dataKey="value"
            nameKey="name"
            totalValue="435.5"
          />
          <PieChartCard
            title="Total of Artists"
            data={artistData}
            dataKey="value"
            nameKey="year"
            totalValue="12"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
