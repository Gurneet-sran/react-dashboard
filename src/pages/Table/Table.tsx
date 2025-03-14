import { PeopleTable } from '@Features/people/PeopleTable'
import './Table.css'

export function Table() {
  return (
    <div className="table-page">
      <div className="table-page__header">
        <h1 className="table-page__title">People Directory</h1>
        <p className="table-page__description">
          View and manage all users in the system
        </p>
      </div>
      <div className="table-page__content">
        <PeopleTable />
      </div>
    </div>
  )
} 