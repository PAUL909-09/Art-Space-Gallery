// File: src/components/Dashboard.js
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
import { APP_COLORS } from "../../config/config";

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
  totalValue,
}: {
  title: string;
  data: Array<any>;
  dataKey: string;
  nameKey: string;
  totalValue: number;
}) => {
  return (
    <div
      className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full lg:w-[calc(33.33%-1rem)]"
      aria-label={`Pie chart: ${title}`}
    >
      <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 text-white uppercase">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={75}
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
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconSize={12}
            wrapperStyle={{
              color: "white",
              fontSize: "12px",
              padding: "8px",
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            payload={data.map((entry) => ({
              value: `${entry[nameKey]} (${entry[dataKey].toFixed(2)})`,
              type: "square",
              color: entry.color,
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-4xl lg:text-5xl font-extrabold mt-4 lg:mt-6 text-white">
        {totalValue}
      </p>
    </div>
  );
};

const MonthChart = ({
  data,
}: {
  data: { month: string; visitors: number; sales: number }[];
}) => (
  <div
    className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full lg:w-[calc(66.67%-1rem)]"
    aria-label="Monthly statistics chart"
  >
    <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white uppercase">
      Monthly Statistics
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="month" stroke="#fff" tick={{ fill: "#fff" }} />
        <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#333",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Line
          type="monotone"
          dataKey="visitors"
          stroke="#C62A35"
          strokeWidth={2}
          dot={{ fill: "#C62A35" }}
        />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#E2A1A1"
          strokeWidth={2}
          dot={{ fill: "#E2A1A1" }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Dashboard = () => {
  const stats = [
    { title: "Total Art", value: 145, description: "Art pieces" },
    { title: "Exhibits", value: 3, description: "Successful exhibits" },
    { title: "Artists", value: 13, description: "Active artists" },
  ];

  const artData = [
    { name: "Paintings", value: 178.79, color: "#C62A35" },
    { name: "Pop-Art", value: 124.65, color: "#D76B6B" },
    { name: "Expressionism", value: 134.14, color: "#E2A1A1" },
  ];

  const monthlyData = [
    { month: "Jan", visitors: 1000, sales: 800 },
    { month: "Feb", visitors: 1500, sales: 1200 },
  ];

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
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6">
          <PieChartCard
            title="Art Distribution"
            data={artData}
            dataKey="value"
            nameKey="name"
            totalValue="437.58"
          />
          <MonthChart data={monthlyData} />
        </div>
      </section>

      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Exhibits</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-800 p-4">
              <div className="text-white font-semibold">Exhibit</div>
              <div className="text-white font-semibold">Status</div>
              <div className="text-white font-semibold text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {/* Row 1 */}
              <div className="grid grid-cols-3 p-4 bg-red-900">
                <div className="text-white">
                  The possessed flower: Sunflower in the sunrise
                </div>
                <div className="text-white">On going</div>
                <div className="flex justify-end gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center">
                    Edit <span className="ml-2">✏️</span>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                    Delete <span className="ml-2">🗑️</span>
                  </button>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 p-4">
                <div className="text-white">
                  Dancing swan: A performing arts
                </div>
                <div className="text-white">Coming soon</div>
                <div className="flex justify-end gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center">
                    Edit <span className="ml-2">✏️</span>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                    Delete <span className="ml-2">🗑️</span>
                  </button>
                </div>
              </div>

              {/* Add New Row */}
              <div className="grid grid-cols-3 p-4">
                <div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                    + Add New Exhibit
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
          <h2 className="text-4xl font-bold text-white mb-8">Accounts</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-800 p-4">
              <div className="text-white font-semibold">Email</div>
              <div className="text-white font-semibold">Status</div>
              <div className="text-white font-semibold text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-700">
              {/* Row 1 */}
              <div className="grid grid-cols-3 p-4 bg-red-900">
                <div className="text-white">
                  The possessed flower: Sunflower in the sunrise
                </div>
                <div className="text-white">On going</div>
                <div className="flex justify-end gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center">
                    Edit <span className="ml-2">✏️</span>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                    Delete <span className="ml-2">🗑️</span>
                  </button>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 p-4">
                <div className="text-white">
                  Dancing swan: A performing arts
                </div>
                <div className="text-white">Coming soon</div>
                <div className="flex justify-end gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg flex items-center">
                    Edit <span className="ml-2">✏️</span>
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center">
                    Delete <span className="ml-2">🗑️</span>
                  </button>
                </div>
              </div>

              {/* Add New Row */}
              <div className="grid grid-cols-3 p-4">
                <div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                    + Add New Exhibit
                  </button>
                </div>
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
