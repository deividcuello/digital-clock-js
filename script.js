const hour = document.querySelector('.hour'),
minute = document.querySelector('.minute'),
second = document.querySelector('.second'),
time = new Date(),
seconds = time.getSeconds(),
minutes = time.getMinutes(),
hours = time.getHours();
second.textContent = seconds.toLocaleString().length == 2 ? seconds : `0${seconds}`;
minute.textContent = minutes.toLocaleString().length == 2 ? `${minutes}:` : `0${minutes}:`; `0${minutes}:`;
hour.textContent = hours.toLocaleString().length == 2 ? `${hours}:` : `0${hours}`; `0${hours}:`;

setInterval(() =>{
    const time = new Date(),
    seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours();
    second.textContent = seconds.toLocaleString().length == 2 ? seconds : `0${seconds}`;
    minute.textContent = minutes.toLocaleString().length == 2 ? `${minutes}:` : `0${minutes}:`; `0${minutes}:`;
    hour.textContent = hours.toLocaleString().length == 2 ? `${hours}:` : `0${hours}`; `0${hours}:`;
}, 1000);