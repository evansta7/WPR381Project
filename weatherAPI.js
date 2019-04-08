var unit = 'metric'; //Once we get the input from the user, we can change the static value
var zip = '0017'; //Need user input
var countryCode = 'za'; //User input
const fetch = require('node-fetch');

const url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + countryCode + "&appid=514f076158bda071bc7bd357e5ee4819&units=" + unit;
fetch(url)
.then(results => results.json())
.then(jsondata => {

    //Output
    var currentTemp = jsondata['main']['temp'];
    var temp_min = jsondata['main']['temp_min'];
    var temp_max = jsondata['main']['temp_max'];
    var pressure = jsondata['main']['pressure'];
    var humidity = jsondata['main']['humidity'];
    var cloudCoverage = jsondata['weather'][0]['main'];
    var weatherDescription = jsondata['weather'][0]['description'];
    var icon = jsondata['weather'][0]['icon'];
    var windDirection = jsondata['wind']['deg'];
    var windSpeed = jsondata['wind']['speed'];
    var name = jsondata['name'];
    // fetch ('http://api.openweathermap.org/img/w/'+icon+'.png', {mode:"no-cors"})
    // .then(iconResponse => iconResponse.json())
    // .then(iconContent => console.log(iconContent));
    console.log("Current Temperature: " + currentTemp);
    console.log("Min Temperature: " + temp_min);
    console.log("Max Temperature: " + temp_max);
    console.log("Pressure: "+ pressure);
    console.log("Humidity: " + humidity);
    console.log("Cloud Coverage: " + cloudCoverage);
    console.log("Weather Description: " + weatherDescription);
    console.log("Icon: " + icon);
    console.log("Wind Direction( In degrees):" + windDirection);
    console.log("Wind Speed: " + windSpeed);
    console.log("City Name: " + name);
    console.log(jsondata);
})