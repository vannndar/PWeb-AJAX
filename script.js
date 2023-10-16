//JSON
$(document).ready(function() {


    $('form').submit(function() {
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + $('#weather_input').val() + '&appid=2a6969bf1b08c48c4792b6af3e0f1166', function(weather) {
            console.log(weather);
            
            $('#lat').text(weather.coord.lat);
            $('#long').text(weather.coord.lon);
            $('#kota').text(weather.name+"-"+weather.sys.country);
            $('#min_temp').text(weather.main.temp_min+" °F");
            $('#max_temp').text(weather.main.temp_max+" °F");
            $('#temp').text(weather.main.temp+" °F");
            $('#humid').text(weather.main.humidity+"%");
            $('#pres').text(weather.main.pressure+" hPa");
            $('#cloud').text(weather.weather[0].description);
            $('#wind').text(weather.wind.speed+" m/s");
            
        }, "json");
        return false;
    });

});

// // XML
// $(document).ready(function() {


//     $('form').submit(function() {

//         var link = 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#weather_input').val() + '&mode=xml&appid=2a6969bf1b08c48c4792b6af3e0f1166&lang=id&units=metric';

//         $.get(link, function(weather) {
//             // const parser = new DOMParser();
//             // const xmlDoc = parser.parseFromString(weather, "text/xml");
//             console.log(weather);
            
//             $('#lat').text(weather.querySelector("coord").getAttribute("lat"));
//             $('#long').text(weather.querySelector("coord").getAttribute("lon"));
//             $('#kota').text(weather.querySelector("city").getAttribute("name")+"-"+weather.querySelector("country").textContent);
//             $('#min_temp').text(weather.querySelector("temperature").getAttribute("min")+" °C");
//             $('#max_temp').text(weather.querySelector("temperature").getAttribute("max")+" °C");
//             $('#temp').text(weather.querySelector("temperature").getAttribute("value")+" °C");
//             $('#humid').text(weather.querySelector("humidity").getAttribute("value")+"%");
//             $('#pres').text(weather.querySelector("pressure").getAttribute("value")+" hPa");
//             $('#cloud').text(weather.querySelector("clouds").getAttribute("name"));
//             $('#wind').text(weather.querySelector("speed").getAttribute("value")+" m/s");
            
//         }, "xml");
//         return false;
//     });

// });