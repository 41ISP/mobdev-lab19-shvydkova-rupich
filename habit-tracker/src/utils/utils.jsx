export const isEqToday = (date) => {
    const today = new Date()
    return today.getFullYear() == new Date(date).getFullYear() &&
    today.getMonth() == Date(date).getMonth() &&
    today.getDate() == Date(date).getDate()
}

export const daysSince = (date) => {
    return Math.floor((new Date() - new Date(date)) 
    / (1000 * 60 * 60 * 24))
}