const schedule = {
    "Monday": "Closed",
    "Tuesday": "Closed",
    "Wednesday": "Closed",
    "Thursday": "Closed",
    "Friday": "Closed",
    "Saturday": "Closed",
    "Sunday": "Closed"
};

function updateSchedule() {
    const days = Object.keys(schedule);
    const scheduleContainer = document.getElementById('schedule');

    days.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        
        if (schedule[day] === 'Closed') {
            dayElement.innerHTML = `<strong>${day}</strong>: <span class="closed">NO LOADSHEDDING</span>`;
        } else {
            dayElement.innerHTML = `<strong>${day}</strong>: ${schedule[day]}`;
        }

        scheduleContainer.appendChild(dayElement);
    });
}

updateSchedule();
