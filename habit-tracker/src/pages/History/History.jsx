import { useEffect, useState } from "react"
import "./History.css"
import { useNavigate, useParams } from "react-router-dom"
import { getObject } from "../../storage"
import { formatDate } from "../../utils/formatters"
const History = () => {
    const { id } = useParams()
    const [habit, setHabit] = useState(undefined)
    useEffect(() => {
        const loadHabits = async () => {
            const habits = await getObject("habits")
            setHabit(habits.find((el) => el.id == id))
        }
        loadHabits()
    }, [])
    const navigate = useNavigate()
    return habit && (
        <div className="container">
            <header>
                <button className="back-btn" onClick={() => navigate("/")}>← Back to Dashboard</button>
                <h1>📊 Progress Timeline</h1>
            </header>

            <div className="filter-section">
                <div className="filter-group">
                    {habit.name}
                </div>
                <div className="filter-group">
                    <label>Time Period:</label>
                    <select>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                        <option>All Time</option>
                    </select>
                </div>
            </div>

            <div className="habit-detail-card">
                <div className="habit-header">
                    <div className="habit-title-section">
                        <div className="habit-title">{habit.name}</div>
                        <div className="habit-subtitle">
                            Started on {formatDate(habit.startDate)} • {habit.frequency} at {habit.notificationTime}
                        </div>
                    </div>
                    <div className="habit-stats-grid">
                        <div className="stat-box">
                            <div className="stat-box-value">{habit.streak}</div>
                            <div className="stat-box-label">Current Streak</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-box-value">23</div>
                            <div className="stat-box-label">Best Streak</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-box-value">89%</div>
                            <div className="stat-box-label">Success Rate</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-box-value">47</div>
                            <div className="stat-box-label">Total Days</div>
                        </div>
                    </div>
                </div>

                <div className="chart-container">
                    <div className="chart-title">30-Day Overview</div>
                    <div className="progress-bar-container">
                        <div className="progress-label">
                            <span>Completion Rate</span>
                            <span><strong>27/30 days</strong></span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                    </div>
                    <div className="legend">
                        <div className="legend-item">
                            <div
                                className="legend-color"></div>
                            <span>Completed (27 days)</span>
                        </div>
                        <div className="legend-item">
                            <div
                                className="legend-color"></div>
                            <span>Missed (3 days)</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-section">
                    <div className="timeline-header">
                        <div className="timeline-title">Activity Timeline</div>
                        <div className="view-toggle">
                            <button className="view-btn active">Calendar</button>
                            <button className="view-btn">List</button>
                        </div>
                    </div>

                    <div className="calendar-grid">
                        <div className="calendar-header">Sun</div>
                        <div className="calendar-header">Mon</div>
                        <div className="calendar-header">Tue</div>
                        <div className="calendar-header">Wed</div>
                        <div className="calendar-header">Thu</div>
                        <div className="calendar-header">Fri</div>
                        <div className="calendar-header">Sat</div>

                        <div className="calendar-day completed">
                            <div className="calendar-day-number">29</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">30</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">31</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">1</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">2</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day missed">
                            <div className="calendar-day-number">3</div>
                            <div>✗</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">4</div>
                            <div>✓</div>
                        </div>

                        <div className="calendar-day completed">
                            <div className="calendar-day-number">5</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">6</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day missed">
                            <div className="calendar-day-number">7</div>
                            <div>✗</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">8</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">9</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">10</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">11</div>
                            <div>✓</div>
                        </div>

                        <div className="calendar-day completed">
                            <div className="calendar-day-number">12</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">13</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day completed">
                            <div className="calendar-day-number">14</div>
                            <div>✓</div>
                        </div>
                        <div className="calendar-day pending">
                            <div className="calendar-day-number">15</div>
                            <div>○</div>
                        </div>
                        <div className="calendar-day future">
                            <div className="calendar-day-number">16</div>
                        </div>
                        <div className="calendar-day future">
                            <div className="calendar-day-number">17</div>
                        </div>
                        <div className="calendar-day future">
                            <div className="calendar-day-number">18</div>
                        </div>
                    </div>

                    <div className="list-view">
                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Tuesday</div>
                                <div className="timeline-date-full">
                                    Jan 14, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon completed">✓</div>
                                    <div>
                                        <div className="status-text completed">
                                            Completed
                                        </div>
                                        <div className="timeline-note">
                                            Completed at 7:15 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Monday</div>
                                <div className="timeline-date-full">
                                    Jan 13, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon completed">✓</div>
                                    <div>
                                        <div className="status-text completed">
                                            Completed
                                        </div>
                                        <div className="timeline-note">
                                            Completed at 7:05 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Sunday</div>
                                <div className="timeline-date-full">
                                    Jan 12, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon completed">✓</div>
                                    <div>
                                        <div className="status-text completed">
                                            Completed
                                        </div>
                                        <div className="timeline-note">
                                            Completed at 8:30 AM - Late start
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Saturday</div>
                                <div className="timeline-date-full">
                                    Jan 11, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon completed">✓</div>
                                    <div>
                                        <div className="status-text completed">
                                            Completed
                                        </div>
                                        <div className="timeline-note">
                                            Completed at 7:00 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Friday</div>
                                <div className="timeline-date-full">
                                    Jan 10, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon completed">✓</div>
                                    <div>
                                        <div className="status-text completed">
                                            Completed
                                        </div>
                                        <div className="timeline-note">
                                            Completed at 6:45 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Thursday</div>
                                <div className="timeline-date-full">
                                    Jan 9, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon completed">✓</div>
                                    <div>
                                        <div className="status-text completed">
                                            Completed
                                        </div>
                                        <div className="timeline-note">
                                            Completed at 7:20 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Wednesday</div>
                                <div className="timeline-date-full">
                                    Jan 8, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon completed">✓</div>
                                    <div>
                                        <div className="status-text completed">
                                            Completed
                                        </div>
                                        <div className="timeline-note">
                                            Completed at 7:10 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">
                                <div className="timeline-date-day">Tuesday</div>
                                <div className="timeline-date-full">
                                    Jan 7, 2026
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-status">
                                    <div className="status-icon missed">✗</div>
                                    <div>
                                        <div className="status-text missed">
                                            Missed
                                        </div>
                                        <div className="timeline-note">
                                            Woke up late
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

}
export default History