import { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { DataTable } from '@Design/DataTable'
import { Person } from './PeopleTable.types'
import { DEFAULT_DATA } from './PeopleTable.constants'

export function PeopleTable({ data = DEFAULT_DATA }) {
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'age', header: 'Age' },
      { accessorKey: 'visits', header: 'Visits' },
      { accessorKey: 'status', header: 'Status' },
    ],
    []
  )

  return (
    <DataTable<Person>
      data={data}
      columns={columns}
      title="People Table"
      striped
      hover
    />
  )
} 