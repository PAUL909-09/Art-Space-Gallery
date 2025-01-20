import React from "react";

interface TableProps {
    headers: string[];
    children: React.ReactNode;
}

export const Table = ({ headers, children }: TableProps) => {
    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800 p-4">
                {headers.map((header, index) => (
                    <div key={index} className="text-white font-semibold">
                        {header}
                    </div>
                ))}
            </div>
            <div className="divide-y divide-gray-700">{children}</div>
        </div>
    );
};
