import { useEffect, useState } from "react"
import { daysSince } from "../utils/utils"
import { getObject } from "../storage"

const TableGrid = ({id}) => {
    const [habit, setHabit] = useState(undefined)
    const days = habit && daysSince(habit.startDate)
    console.log(days)
    useEffect(() => {
        const getHabit = async () => {
            const habits = await getObject("habits")
            setHabit(habits.find((el) => el.id == id))
        }
        getHabit()
    }, [])
    return (
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
    )
}
export default TableGrid