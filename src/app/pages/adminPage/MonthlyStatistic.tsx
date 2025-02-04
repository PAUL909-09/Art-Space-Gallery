import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface MonthlyData {
    month: string;
    visitors: number;
    sales: number;
}

const MonthChart = ({ data }: { data: MonthlyData[] }) => (
    <div
        className="bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg w-full"
        aria-label="Monthly statistics chart"
    >
        <h3 className="text-center text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white uppercase">
            Monthly Statistics
        </h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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

export default MonthChart;
