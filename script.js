const countdownElement = document.getElementById('timer');
const birthdayDate = new Date('2024-04-15').getTime(); // Set the target date here

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerText = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;

    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerText = "It's Party Time!";
    }
};

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
