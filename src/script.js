function updateTime() {
	// Los Angeles
	let losAngelesElement = document.querySelector("#los-angeles");
	if (losAngelesElement) {
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
}

function updateCity(event) {
	let cityTimeZone = event.target.value;
	let city = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(`${cityTimeZone}`).format("HH:mm:ss");
	let cityDate = moment().tz(`${cityTimeZone}`).format("MMMM Do, YYYY");
	let cityAmPmElement = moment().tz(`${cityTimeZone}`).format("A");

	let citiesElement = document.querySelector("#cities");

	citiesElement.innerHTML = `
  <div
						class="row justify-content-between"
				
					>
						<div class="city col-7">
							<h2>${city}</h2>
							<div class="date">${cityDate}</div>
						</div>
						<div class="time col-5">
							<span class="time-element">${cityTime}</span><small> <span class="am-pm">${cityAmPmElement}</span></small>
						</div>
					</div>
  
  `;
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
