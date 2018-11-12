var asianCountries = ["Japan", "Taiwan", "South Korea", "Vietnam", "Thailand"];

document.getElementById("countriesPush").innerHTML = asianCountries;

function asianCountriesPush() {

    asianCountries.push("Russia");

    document.getElementById("countriesPush").innerHTML = asianCountries;

}