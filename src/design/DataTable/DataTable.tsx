import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  OnChangeFn,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
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
  height = '600px',
}: DataTableProps<T>) {
  // Add sorting state
  const [sorting, setSorting] = React.useState<SortingState>([])
  const tableContainerRef = React.useRef<HTMLDivElement>(null)

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  })

  // Set up virtualization
  const { rows } = table.getRowModel()
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33,
    getScrollElement: () => tableContainerRef.current,
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
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
      <div 
        className="datatable__container"
        ref={tableContainerRef}
        style={{
          height,
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <table style={{ display: 'grid' }}>
          <thead style={{
            display: 'grid',
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr 
                key={headerGroup.id} 
                style={{ display: 'flex', width: '100%' }}
                className="datatable__header-row"
              >
                {headerGroup.headers.map(header => (
                  <th 
                    key={header.id} 
                    className="datatable__header-cell"
                    style={{
                      display: 'flex',
                      width: header.getSize(),
                    }}
                  >
                    <div
                      className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className="datatable__body"
            style={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index]
              return (
                <tr
                  data-index={virtualRow.index}
                  ref={node => rowVirtualizer.measureElement(node)}
                  key={row.id}
                  className="datatable__row"
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`,
                    width: '100%',
                  }}
                >
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className="datatable__cell"
                      style={{
                        display: 'flex',
                        width: cell.column.getSize(),
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 