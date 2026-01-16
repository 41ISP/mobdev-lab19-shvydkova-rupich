import { useState } from "react"
import "./Main.css"
import { HabitCard } from "../../components/HabitCard"
import { HabitForm } from "../../components/HabitForm"
import { Stats } from "../../components/Stats"
import { nanoid } from "nanoid"
const initialHabits = [
    {
        id: nanoid(),
        name: "Изучить React",
        notificationTime: "7:00PM",
        frequncy: "daily",
        streak: 100,
        isToday: true,
        color: "green"
    },
    {
        id: nanoid(),
        name: "Прочитать войну и мир",
        notificationTime: "9:00PM",
        frequncy: "weekly",
        streak: 21,
        isToday: false,
        color: "red"
    }
]

const Main = () => {
    const [habits, setHabits] = useState(initialHabits)
    const [form, setForm] = useState({
        habitName: "as",
        frequency: "weekly",
        notificationTime: "07:00"
    })
    const handleFormChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleFormSubmit = (e) => {
        const newHabit = {
            id: nanoid(),
            name: form.habitName,
            notificationTime: form.notificationTime,
            frequncy: form.frequency,
            streak: 0,
            isToday: false,
            color: "red"
        }
        setHabits((val) => [...val, newHabit])
    }
    const toggleToday = (id) => {
        const oldHabit = habits.find((el) => el.id === id)
        const newHabit = {...oldHabit, isToday: !oldHabit.isToday, streak:  oldHabit.isToday ? oldHabit.streak - 1 : oldHabit.streak + 1} 
        setHabits((state) => state.map((el) => el.id === id ? newHabit : el))
    }
    return (
        <div className="container">
            <header>
                <h1>🎯 Smart Habit Tracker</h1>
                <p className="subtitle">Build better habits, one day at a time</p>
            </header>

            <Stats habits={habits} />
            <HabitForm form={form} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
            <div className="habits-section">
                <h2>📋 Today's Habits</h2>
                {habits.sort((a, b) => b.streak - a.streak).map((el) => <HabitCard {...el} toggleToday={() => toggleToday(el.id)} />)}
            </div>
        </div>
    )
}
export default Main