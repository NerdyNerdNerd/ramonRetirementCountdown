function updateCountdown() {
    // ✅ Set your meeting end time here
    const meetingEndTime = new Date('2025-08-27T17:00:00'); // Example: August 27, 2025 at 5 PM

    // Get the current date and time
    const now = new Date();

    // Calculate the time remaining
    const timeDifference = meetingEndTime - now;

    if (timeDifference <= 0) {
        // Time is up
        document.getElementById('timer').innerHTML = "Meeting is over!";
        return;
    }

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

