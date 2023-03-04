function setTime() {
	const now = new Date();
    const timeZoneOffset = now.getTimezoneOffset() / 60;
    const hour = now.getHours() - timeZoneOffset;
	const minute = now.getMinutes();
	const second = now.getSeconds();
	
	const hourDegree = (hour / 12) * 360 + (minute / 60) * 30 - 90;
	const minuteDegree = (minute / 60) * 360 + (second / 60) * 6 - 90;
	const secondDegree = (second / 60) * 360 - 90;
	
	document.querySelector('.hour-hand').style.transform = `rotate(${hourDegree}deg)`;
	document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegree}deg)`;
	document.querySelector('.second-hand').style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(setTime, 1000);
