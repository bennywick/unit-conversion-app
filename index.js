const unitInputEl = document.getElementById("unit-value");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length-results");
const volume = document.getElementById("volume-results");
const mass = document.getElementById("mass-results");

function render(valueToCovert) {
	// Length conversions
	const convertedToFeet = valueToCovert * 3.2808398950131;
	const convertedToMeters = valueToCovert * 0.3048000000000022;
	// Volume conversions
	const convertedToGallons = valueToCovert * 0.264172;
	const convertedToLiters = valueToCovert * 3.78541;
	// Mass conversions
	const convertedToPounds = valueToCovert * 2.20462;
	const convertedToKilograms = valueToCovert * 0.453592;

	length.textContent = `${valueToCovert} meter(s) = ${convertedToFeet.toFixed(
		3
	)} feet | ${valueToCovert} feet = ${convertedToMeters.toFixed(3)} meter(s)`;
	volume.textContent = `${valueToCovert} liter(s) = ${convertedToGallons.toFixed(
		3
	)} gallon(s) | ${valueToCovert} gallon(s) = ${convertedToLiters.toFixed(
		3
	)} liter(s)`;
	mass.textContent = `${valueToCovert} kilo(s) = ${convertedToPounds.toFixed(
		3
	)} pound(s) | ${valueToCovert} pounds = ${convertedToKilograms.toFixed(
		3
	)} kilo(s)`;
}

convertBtn.addEventListener("click", function () {
	const valueToCovert = unitInputEl.value;
	render(valueToCovert);
});
