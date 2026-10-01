const projects = [
  { name: 'Website redesign', status: 'Active', progress: 68 },
  { name: 'Mobile app beta', status: 'Planning', progress: 32 },
  { name: 'Analytics dashboard', status: 'Completed', progress: 100 },
];

export function ProjectsPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>Projects</h2>
        </div>
        <button className="btn btn-primary">New project</button>
      </header>

      <section className="panel">
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-card-header">
                <h3>{project.name}</h3>
                <span className="badge badge-neutral">{project.status}</span>
              </div>
              <p className="muted">Product team planning and execution</p>
              <div className="progress-block">
                <div className="progress-labels">
                  <span>Progress</span>
                  <strong>{project.progress}%</strong>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${project.progress}%` }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
