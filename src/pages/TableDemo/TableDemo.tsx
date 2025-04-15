import { useState, useMemo } from 'react';
import { DataTable } from '@Design/DataTable';
import { generateTableData, type TableRow, getStatusColor, formatDate } from '@/utils/generateData';
import { type ColumnDef } from '@tanstack/react-table';
import './TableDemo.css';

export function TableDemo() {
  const [rowCount, setRowCount] = useState(100);
  const [data] = useState(() => generateTableData(rowCount));

  const columns = useMemo<ColumnDef<TableRow>[]>(() => [
    { 
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'role',
      header: 'Role',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(row.original.status)}`}>
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: 'lastActive',
      header: 'Last Active',
      cell: ({ getValue }) => formatDate(getValue() as string),
    },
  ], []);

  const handleRowCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value, 10);
    setRowCount(newCount);
  };

  return (
    <div>
      <header className="table-demo__header">
        <h1 className="table-demo__title">Table Demo</h1>
        <div className="table-demo__controls">
          <div className="table-demo__input-group">
            <label className="table-demo__label">
              Number of rows:
            </label>
            <input
              type="number"
              min="10"
              max="1000"
              value={rowCount}
              onChange={handleRowCountChange}
              className="table-demo__input"
            />
          </div>
          <button
            onClick={() => setRowCount((prev) => Math.min(prev * 2, 1000))}
            className="table-demo__button"
          >
            Double Rows
          </button>
        </div>
      </header>

      <div className="table-demo__content">
        <DataTable 
          data={data}
          columns={columns}
          hover
          striped
        />
      </div>

      <div className="table-demo__footer">
        Showing {data.length.toLocaleString()} rows
      </div>
    </div>
  );
} 