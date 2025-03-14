import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { DataTableProps } from './DataTable.types'
import './DataTable.css'

export function DataTable<T>({ 
  data, 
  columns,
  title,
  className = '',
  compact = false,
  striped = true,
  hover = false,
}: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const tableClasses = [
    'datatable',
    compact && 'datatable--compact',
    striped && 'datatable--striped',
    hover && 'datatable--hover',
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={tableClasses}>
      {title && <h2 className="datatable__title">{title}</h2>}
      <div className="datatable__container">
        <table className="datatable__table">
          <thead className="datatable__header">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="datatable__header-row">
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="datatable__header-cell">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="datatable__row">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="datatable__cell">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 