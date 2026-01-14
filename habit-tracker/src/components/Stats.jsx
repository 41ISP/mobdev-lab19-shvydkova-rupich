export const Stats = ({habits}) => {
    return (
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-value">{habits.length}</div>
                <div className="stat-label">Active Habits</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">87%</div>
                <div className="stat-label">Completion Rate</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">{habits.sort((a, b) => b.streak - a.streak)[0].streak}</div>
                <div className="stat-label">Day Streak</div>
            </div>
        </div>
    )
}