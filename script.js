
        const apikey = "326fba40ba9d4bbb97362137242611&q";
        const apiUrl ="http://api.weatherapi.com/v1/current.json?key= 326fba40ba9d4bbb97362137242611&aqi=yes&q=";

        const searchBox =document.querySelector('.search input');
        const searchBtn =document.querySelector('.search button');
        const weatherIcon =document.querySelector('.weather-icon');


        async function checkWeather(city) {
            const reponse = await fetch(apiUrl + city + `&appid=${apikey}`)      /*check $ remove*/
            var data = await reponse.json();

            console.log(data);

            document.querySelector('.city').innerHTML = data.location.name;
            document.querySelector('.temp').innerHTML = data.current.temp_c + "°c"
            ;
            document.querySelector('.humidity').innerHTML = data.current.humidity + "%"
            ;
            document.querySelector('.wind').innerHTML = data.current.wind_kph + "kph "
            ;

             /*if(data.text =="Mist"){
                weatherIcon.src = "//cdn.weatherapi.com/weather/64x64/day/143.png" }
                else if(data.text =="Sunny"){
                    weatherIcon.src = ".../" }
                    else if(data.text =="cloudy"){
                    weatherIcon.src = ".../" } */   
           


            
            
            
        }
        searchBtn.addEventListener('click', () =>{

            checkWeather(searchBox.value);
        });

        
        
