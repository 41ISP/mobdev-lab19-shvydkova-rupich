const TimeLineItem = ({ date, completed, day, completionTime }) => {
    return (
        <div className="timeline-item">
            <div className="timeline-date">
                <div className="timeline-date-day">{day}</div>
                <div className="timeline-date-full">
                    {date}
                </div>
            </div>
            <div className="timeline-content">
                <div className="timeline-status">
                    <div className={`status-icon${completed ? " completed" : ""}`}>{completed ? "✓" : "✗"}</div>
                    <div>
                        <div className={`status-text${completed ? " completed" : ""}`}>
                            {completed ? "Completed" : "Missed"}
                        </div>
                        <div className="timeline-note">
                            Completed at {completionTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TimeLineItem