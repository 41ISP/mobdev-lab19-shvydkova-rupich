import { useEffect, useState } from "react"
import { checkComleted, daysSince, formatDateShort, mapDays } from "../utils/utils"
import { getObject } from "../storage"
import TimeLineItem from "./TimeLineItem"

const DaysList = ({ id }) => {
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
        <div className="list-view">
            {habit && mapDays(habit.startDate, (el) => <TimeLineItem day={el.toLocaleDateString("en-US",
                { weekday: "long" }
            )}
                date={formatDateShort(el)} 
                completed={checkComleted(el, habit.history)} />
            )}
        </div>
    )
}
export default DaysList