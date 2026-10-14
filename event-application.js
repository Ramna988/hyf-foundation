function getEventWeekday(daysAhead){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const today = new Date().getDay();

    const totalDays = today + daysAhead;

    const futureDayIndex = totalDays % 7;

    return days[futureDayIndex];
}

console.log(getEventWeekday(8));

console.log(getEventWeekday(5));






