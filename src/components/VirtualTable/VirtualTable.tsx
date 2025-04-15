import { useEffect, useRef, useState } from 'react';
import { TableRow, getStatusColor, formatDate } from '@/utils/generateData';
import './VirtualTable.css';

interface VirtualTableProps {
  data: TableRow[];
  rowHeight?: number;
  visibleRows?: number;
}

export function VirtualTable({ 
  data, 
  rowHeight = 48, 
  visibleRows = 10 
}: VirtualTableProps) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate total height
  const totalHeight = data.length * rowHeight;
  
  // Calculate which rows should be visible
  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(
    startIndex + visibleRows + 1,
    data.length
  );

  // Get visible rows
  const visibleData = data.slice(startIndex, endIndex);

  // Handle scroll
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  // Update scroll position on data change
  useEffect(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, [data]);

  return (
    <div 
      ref={containerRef}
      className="virtual-table-container"
      onScroll={handleScroll}
      style={{ height: rowHeight * visibleRows }}
    >
      <div 
        className="virtual-table-content"
        style={{ height: totalHeight }}
      >
        <div
          className="virtual-table-rows"
          style={{ 
            transform: `translateY(${startIndex * rowHeight}px)`,
          }}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {visibleData.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{row.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{row.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{row.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(row.lastActive)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 