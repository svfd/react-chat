const formatDate = (timestamp) => {

	const time = new Date(timestamp);

	let hours = time.getHours();
	let minutes = time.getMinutes();

	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;

	return {hours, minutes};
}

export default formatDate;