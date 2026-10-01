export function SettingsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Preferences</p>
          <h2>Settings</h2>
        </div>
      </header>

      <section className="panel settings-panel">
        <div className="settings-row">
          <div>
            <h3>Organization</h3>
            <p className="muted">ProjectFlow Studio</p>
          </div>
          <button className="btn btn-secondary">Manage</button>
        </div>

        <div className="settings-row">
          <div>
            <h3>Notifications</h3>
            <p className="muted">Daily summaries and deadline reminders</p>
          </div>
          <button className="btn btn-secondary">Enable</button>
        </div>
      </section>
    </div>
  );
}
