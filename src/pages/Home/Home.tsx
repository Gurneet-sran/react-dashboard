import { Card } from '@Features/common/Card/Card'
import './Home.css'

const recentActivity = [
  { id: 1, action: 'User John Doe logged in', time: '2 minutes ago' },
  { id: 2, action: 'New order #1234 received', time: '15 minutes ago' },
  { id: 3, action: 'Server backup completed', time: '1 hour ago' },
  { id: 4, action: 'System update installed', time: '2 hours ago' },
  { id: 5, action: 'Database optimization completed', time: '3 hours ago' },
]

export function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Dashboard Overview</h1>
      </div>

      <div className="home__stats">
        <Card className="home__stat-card">
          <p className="home__stat-value">1,234</p>
          <p className="home__stat-label">Total Users</p>
        </Card>
        <Card className="home__stat-card">
          <p className="home__stat-value">56</p>
          <p className="home__stat-label">Active Sessions</p>
        </Card>
        <Card className="home__stat-card">
          <p className="home__stat-value">$12,345</p>
          <p className="home__stat-label">Revenue</p>
        </Card>
      </div>

      <div className="home__content">
        <section className="home__chart-section">
          <h2 className="home__chart-title">Performance Overview</h2>
          <div className="home__chart">
            {/* Chart component will go here */}
            <p>Chart placeholder - We can add a chart library like recharts or chart.js later</p>
          </div>
        </section>

        <section className="home__activity">
          <h2 className="home__activity-title">Recent Activity</h2>
          <ul className="home__activity-list">
            {recentActivity.map(activity => (
              <li key={activity.id} className="home__activity-item">
                {activity.action}
                <span className="home__activity-time">{activity.time}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
} 