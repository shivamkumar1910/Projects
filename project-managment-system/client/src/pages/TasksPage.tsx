const columns = [
  { title: 'TODO', tasks: ['Draft sprint plan', 'QA checklist'] },
  { title: 'In Progress', tasks: ['Fix auth flow', 'Review onboarding'] },
  { title: 'In Review', tasks: ['Polish dashboard'] },
  { title: 'Done', tasks: ['Setup workspace', 'Ship first iteration'] },
];

export function TasksPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Workflow</p>
          <h2>My Tasks</h2>
        </div>
        <button className="btn btn-primary">Create task</button>
      </header>

      <section className="kanban-board">
        {columns.map((column) => (
          <div key={column.title} className="kanban-column">
            <div className="kanban-header">
              <h3>{column.title}</h3>
              <span>{column.tasks.length}</span>
            </div>
            <div className="kanban-list">
              {column.tasks.map((task) => (
                <div key={task} className="task-card">
                  <div className="task-card-title">{task}</div>
                  <div className="task-card-meta">High priority • Due tomorrow</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
