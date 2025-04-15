import { ColumnDef } from '@tanstack/react-table'

export interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  title?: string
  className?: string
  compact?: boolean
  striped?: boolean
  hover?: boolean
  height?: string
} 