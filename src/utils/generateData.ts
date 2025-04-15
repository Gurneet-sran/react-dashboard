// Data generation utilities for table component
import { faker } from '@faker-js/faker';

export type TableRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  joinDate: string;
}

export function generateTableData(count: number = 1000): TableRow[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['Admin', 'User', 'Manager', 'Developer', 'Designer']),
    status: faker.helpers.arrayElement(['active', 'inactive', 'pending']),
    lastActive: faker.date.recent().toISOString(),
    joinDate: faker.date.past().toISOString(),
  }));
}

// Helper function to format dates consistently
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Helper to get status color class
export function getStatusColor(status: TableRow['status']): string {
  const colors = {
    active: 'text-green-600 bg-green-50',
    inactive: 'text-red-600 bg-red-50',
    pending: 'text-yellow-600 bg-yellow-50'
  };
  return colors[status] || '';
} 