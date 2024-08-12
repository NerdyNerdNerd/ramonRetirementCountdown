function updateCountdown() {
    // Set the date we're counting down to
    const retirementDate = new Date('August 23, 2024 17:00:00 GMT-0700'); // Nevada time (PDT/PST)

    // Get the current date and time
    const now = new Date();

    // Calculate the time remaining
    const timeDifference = retirementDate - now;

    if (timeDifference <= 0) {
        // Time is up
        document.getElementById('timer').innerHTML = "Ramon has retired!";
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
