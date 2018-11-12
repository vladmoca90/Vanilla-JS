var northAmericanCountries = ["United States", "Canada", "Mexico"];

var southAmericanCountries = ["Colombia", "Bolivia", "Venezuela"];

document.getElementById("joinCountries").innerHTML = northAmericanCountries.concat(southAmericanCountries);

function AmericanCountries() {

    document.getElementById("joinCountries").innerHTML = northAmericanCountries.concat(southAmericanCountries);

}