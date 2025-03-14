import '@Pages/Profile/Profile.css'

export function Profile() {
  return (
    <div className="profile">
      <div className="profile__header">
        <h1 className="profile__title">Profile</h1>
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt="Profile"
          className="profile__avatar"
        />
        <div className="profile__info">
          <h2>John Doe</h2>
          <p>john@example.com</p>
        </div>
      </div>
      <div className="profile__content">
        <div className="profile__section">
          <h3>Member Since</h3>
          <p>January 1, 2024</p>
        </div>
        <div className="profile__section">
          <h3>Last Login</h3>
          <p>2 hours ago</p>
        </div>
      </div>
    </div>
  )
} 