const updateTime = () => {
  //Reloj con el objeto DATE
  const now = new Date;
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  //get hour minutes and seconds
  const hour = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const year = now.getFullYear();
  const months = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');

  const timeString = `${hour}:${minutes}:${seconds}`;
  const dateString = `${day}/${months}/${year}`
  timeElement.textContent = timeString;
  dateElement.textContent = dateString;

}

updateTime();
setInterval(updateTime, 1000)
