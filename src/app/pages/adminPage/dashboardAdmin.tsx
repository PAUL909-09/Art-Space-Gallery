import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ARTIST_PROFILE, ExhibitsData } from "../../config/config";

// Define interfaces for type safety
interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  isHighlighted: boolean;
}

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartCardProps {
  title: string;
  data: PieChartData[];
  dataKey: keyof PieChartData;
  nameKey: keyof PieChartData;
}

interface MonthlyData {
  month: string;
  views: number;
}

interface Exhibit {
  id: string | number;
  title: string;
  date: string;
  status: string;
  views?: number;
}

interface Guest {
  name: string;
  email: string;
  contact: string;
}

interface Artwork {
  title: string;
  type?: string;
  image: { src: string; alt: string };
}

const StatsCard = ({ title, value, description, isHighlighted }: StatsCardProps) => (
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

const PieChartCard = ({ title, data, dataKey, nameKey }: PieChartCardProps) => {
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
            cy="40%"
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

      <div className="w-full flex justify-center">
        <ul className="flex flex-wrap gap-2 text-white text-sm">
          {data.map((entry) => (
            <li key={entry.name} className="flex items-center justify-center gap-8">
              <span
                className="inline-block w-4 h-4 rounded"
                style={{ backgroundColor: entry.color }}
              />
              {entry.name} ({entry.value.toFixed(2)})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const generateMockMonthlyData = (): MonthlyData[] => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const monthlyData = months.map((month) => {
    let totalViews = 0;
    ExhibitsData.forEach((exhibit: Exhibit) => {
      totalViews += Math.floor((exhibit.views || 0) / 12) + Math.floor(Math.random() * 10);
    });
    return { month, views: totalViews };
  });

  return monthlyData;
};

const MonthChart = ({ data }: { data: MonthlyData[] }) => (
  <div
    className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full lg:w-[calc(66.67%-1rem)]"
    aria-label="Monthly views chart"
  >
    <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white uppercase">
      Total Views Per Month
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
          dataKey="views"
          stroke="#C62A35"
          strokeWidth={2}
          dot={{ fill: "#C62A35" }}
        />
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

  const artworkCountsByType: { [key: string]: number } = {};

  ARTIST_PROFILE.forEach((artist) => {
    artist.ARTIST_DATA.ArtWork.forEach((artwork: Artwork) => {
      const type = artwork.type || "Unknown";
      artworkCountsByType[type] = (artworkCountsByType[type] || 0) + 1;
    });
  });

  const colors = [
    "#C62A35", "#D76B6B", "#E2A1A1", "#8884d8", "#82ca9d", "#e06377",
  ];

  const artData = Object.entries(artworkCountsByType).map(([name, value]) => ({
    name,
    value,
    color: colors[Object.keys(artworkCountsByType).indexOf(name) % colors.length],
  }));

  // Mock guest data
  const guestData: Guest[] = [
    { name: "Guest 1", email: "guest1@example.com", contact: "123-456-7890" },
    { name: "Guest 2", email: "guest2@example.com", contact: "987-654-3210" },
    { name: "Guest 3", email: "guest3@example.com", contact: "555-123-4567" },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Stats Cards Section */}
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

      {/* Charts Section */}
      <section className="py-12 px-4 lg:px-8">
        <div className="py-12 px-4 lg:px-8 flex flex-wrap gap-6 justify-center">
          <PieChartCard
            title="Art Distribution"
            data={artData}
            dataKey="value"
            nameKey="name"
          />
          <MonthChart data={monthlyData} />
        </div>
      </section>

      {/* Exhibits Table */}
      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Exhibits</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 p-4">
              <div className="text-white font-semibold">Exhibit</div>
              <div className="text-white font-semibold">Date</div>
              <div className="text-white font-semibold">Status</div>
              <div className="text-white font-semibold text-right">Action</div>
            </div>
            <div className="divide-y divide-gray-700">
              {ExhibitsData.map((exhibit: Exhibit) => (
                <div key={exhibit.id} className="grid grid-cols-4 p-4">
                  <div className="text-white col-span-1">{exhibit.title}</div>
                  <div className="text-white col-span-1">{exhibit.date}</div>
                  <div className="text-white">{exhibit.status}</div>
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
              <div className="grid grid-cols-4 p-4">
                <div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center">
                    + Add New Exhibit
                  </button>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accounts Table */}
      <section className="py-14 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mt-10 text-white mb-8">Accounts</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800 p-4">
              <div className="text-white font-semibold">Name</div>
              <div className="text-white font-semibold">Status</div>
              <div className="text-white font-semibold text-right">Action</div>
            </div>
            <div className="divide-y divide-gray-700">
              {ARTIST_PROFILE.map((artist, index) => (
                <div key={index} className="grid grid-cols-3 p-4">
                  <div className="text-white">{artist.Name}</div>
                  <div className="text-white">Active</div>
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

      {/* Guests Table */}
      <section className="py-14 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mt-10 text-white mb-8">Guests</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 p-4">
              <div className="text-white font-semibold">Name</div>
              <div className="text-white font-semibold">Email</div>
              <div className="text-white font-semibold">Contact Number</div>
              <div className="text-white font-semibold text-right">Action</div>
            </div>
            <div className="divide-y divide-gray-700">
              {guestData.map((guest, index) => (
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
              <div className="grid grid-cols-4 p-4">
                <div></div>
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