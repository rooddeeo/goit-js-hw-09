import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputText = document.querySelector('#datetime-picker'),
  startButton = document.querySelector('[data-start]');
startButton.disabled = true;

function startFlatpickr() {
  flatpickr(inputText, options);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    console.log(selectedDate);
    if (selectedDate <= options.defaultDate) {
      startButton.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      startButton.disabled = false;

      startButton.addEventListener('click', startTimer);

      function startTimer() {
        startButton.disabled = true;
        inputText.disabled = true;
        const date = new Date(selectedDate - options.defaultDate),
          ms = date.getTime();

        function convertMs(ms) {
          const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24,
            days = Math.floor(ms / day),
            hours = Math.floor((ms % day) / hour),
            minutes = Math.floor(((ms % day) % hour) / minute),
            seconds = Math.floor((((ms % day) % hour) % minute) / second);

          return { days, hours, minutes, seconds };
        }

        let { days, hours, minutes, seconds } = convertMs(ms);

        const refs = {
          days: document.querySelector('[data-days]'),
          hours: document.querySelector('[data-hours]'),
          minutes: document.querySelector('[data-minutes]'),
          seconds: document.querySelector('[data-seconds]'),
        };

        refs.seconds.textContent = seconds;
        refs.minutes.textContent = minutes;
        refs.hours.textContent = hours;
        refs.days.textContent = days;

        refs.seconds.textContent = seconds.toString().padStart(2, '0');
        refs.minutes.textContent = minutes.toString().padStart(2, '0');
        refs.hours.textContent = hours.toString().padStart(2, '0');
        refs.days.textContent = days.toString().padStart(2, '0');

        const interval = setInterval(() => {
          if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(interval);
            inputText.disabled = false;
          } else {
          if (seconds !== 0) {
            refs.seconds.textContent = seconds;
            seconds -= 1;
          } else {
            seconds = 59;
            refs.seconds.textContent = seconds;
            if (minutes !== 0) {
              minutes -= 1;
              refs.minutes.textContent = minutes;
            } else {
              minutes = 59;
              refs.minutes.textContent = minutes;
              if (hours !== 0) {
                hours -= 1;
                refs.hours.textContent = hours;
              } else {
                hours = 23;
                refs.hours.textContent = hours;
                if (days !== 0) {
                  days -= 1;
                  refs.days.textContent = days;
                }
              }
              }
              clearInterval(interval);
            }
          }
          refs.seconds.textContent = seconds.toString().padStart(2, '0');
          refs.minutes.textContent = minutes.toString().padStart(2, '0');
          refs.hours.textContent = hours.toString().padStart(2, '0');
          refs.days.textContent = days.toString().padStart(2, '0');
        }, 1000);
      }
    }
  },
};

startFlatpickr();
