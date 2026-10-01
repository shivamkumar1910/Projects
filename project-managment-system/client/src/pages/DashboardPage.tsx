const stats = [
  { label: 'Total projects', value: '12', change: '+3 this month' },
  { label: 'Active projects', value: '5', change: '2 on schedule' },
  { label: 'Completed', value: '4', change: 'High momentum' },
  { label: 'Pending tasks', value: '18', change: '7 due soon' },
];

const tasks = [
  { title: 'Fix API authentication', status: 'In progress', due: 'Today' },
  { title: 'Create dashboard UI', status: 'Review', due: 'Tomorrow' },
  { title: 'Add email notifications', status: 'Todo', due: 'Fri' },
];

const deadlines = [
  'Implement authentication - Tomorrow',
  'Database integration - Sep 20',
  'Sprint review - Sep 24',
];

export function DashboardPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Dashboard</h2>
        </div>
      </header>

      <section className="stats-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <div className="muted">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="small positive">{stat.change}</div>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>My Tasks</h3>
            <button className="btn btn-secondary">View all</button>
          </div>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.title} className="task-row">
                <div>
                  <div className="task-title">{task.title}</div>
                  <div className="muted">Due {task.due}</div>
                </div>
                <span className="badge badge-neutral">{task.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Upcoming deadlines</h3>
          </div>
          <ul className="list-simple">
            {deadlines.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
