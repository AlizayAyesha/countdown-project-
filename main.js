import chalk from 'chalk';
let interval; // Declare the interval variable
// Function to calculate the time remaining until the target date
function getTimeRemaining(targetDate) {
    const total = targetDate.getTime() - new Date().getTime();
    return {
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60)
    };
}
// Function to display the countdown
function displayCountdown(targetDate) {
    const time = getTimeRemaining(targetDate);
    console.log(chalk.blueBright(`Countdown: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`));
}
// Set the target date for the countdown
const targetDate = new Date(Date.now() + 10000); // Set target date 10 seconds from now
// Update the countdown every second
interval = setInterval(() => {
    displayCountdown(targetDate);
    if (targetDate.getTime() <= new Date().getTime()) {
        clearInterval(interval); // Stop the countdown when the target date is reached
        console.log(chalk.green("Countdown is over!"));
    }
}, 1000);
// Log the total countdown time
setTimeout(() => {
    console.log(chalk.yellow("Countdown for 10 minutes"));
}, 10000); // 10 seconds delay for 10-minute countdown message
