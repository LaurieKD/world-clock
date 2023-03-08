function updateTime() {
	// Los Angeles
	let losAngelesElement = document.querySelector("#los-angeles");
	let losAngelesDateElement = losAngelesElement.querySelector(".date");
	let losAngelesTimeElement = losAngelesElement.querySelector(".time-element");
	let losAngelesAmPmElement = losAngelesElement.querySelector(".am-pm");

	losAngelesDateElement.innerHTML = moment().format("MMMM Do, YYYY");
	losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("HH:mm:ss");
	losAngelesAmPmElement.innerHTML = moment().tz("America/Los_Angeles").format("A");

	// Sydney
	let sydneyElement = document.querySelector("#sydney");
	let sydneyDateElement = sydneyElement.querySelector(".date");
	let sydneyTimeElement = sydneyElement.querySelector(".time-element");
	let sydneyAmPmElement = sydneyElement.querySelector(".am-pm");

	sydneyDateElement.innerHTML = moment().format("MMMM Do, YYYY");
	sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("HH:mm:ss");
	sydneyAmPmElement.innerHTML = moment().tz("Australia/Sydney").format("A");
}

setInterval(updateTime, 1000);
