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
