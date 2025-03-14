import { useState } from 'react'
import './Settings.css'

export function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    darkMode: false,
    language: 'en',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setSettings(prev => ({ ...prev, [name]: newValue }))
  }

  return (
    <div className="settings">
      <div className="settings__header">
        <h1 className="settings__title">Settings</h1>
      </div>
      <div className="settings__content">
        <section className="settings__section">
          <h2 className="settings__section-title">Notifications</h2>
          <div className="settings__form-group">
            <label className="settings__label">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              {' '}Enable Push Notifications
            </label>
          </div>
          <div className="settings__form-group">
            <label className="settings__label">
              <input
                type="checkbox"
                name="emailUpdates"
                checked={settings.emailUpdates}
                onChange={handleChange}
              />
              {' '}Receive Email Updates
            </label>
          </div>
        </section>

        <section className="settings__section">
          <h2 className="settings__section-title">Appearance</h2>
          <div className="settings__form-group">
            <label className="settings__label">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
              {' '}Dark Mode
            </label>
          </div>
        </section>

        <section className="settings__section">
          <h2 className="settings__section-title">Language</h2>
          <div className="settings__form-group">
            <label className="settings__label" htmlFor="language">Select Language</label>
            <select
              id="language"
              name="language"
              value={settings.language}
              onChange={handleChange}
              className="settings__input"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </section>

        <button className="settings__button">Save Changes</button>
      </div>
    </div>
  )
} 