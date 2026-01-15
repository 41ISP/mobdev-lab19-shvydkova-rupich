export const HabitForm = ({ form, handleFormChange, handleFormSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormSubmit()
    }

    return (
        <div className="add-habit-section">
            <h2>➕ Add New Habit</h2>
            <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                    <label for="habit-name">Habit Name</label>
                    <input
                        onChange={handleFormChange}
                        type="text"
                        id="habit-name"
                        value={form.habitName}
                        name="habitName"
                        placeholder="e.g., Morning Exercise" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label for="frequency">Frequency</label>
                        <select id="frequency"
                            name="frequency"
                            value={form.frequency}
                            onChange={handleFormChange}>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="weekdays">Weekdays</option>
                            <option value="weekends">Weekends</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="notification-time">
                            Notification Time
                        </label>
                        <input
                            onChange={handleFormChange}
                            type="time"
                            name="notificationTime"
                            id="notification-time"
                            value={form.notificationTime} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Color Theme</label>
                    <div className="color-picker">
                        <div
                            className="color-option selected"></div>
                        <div
                            className="color-option"></div>
                        <div
                            className="color-option"></div>
                        <div
                            className="color-option"></div>
                        <div
                            className="color-option"></div>
                        <div
                            className="color-option"></div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Add Habit
                </button>
            </form>
        </div>
    )
}