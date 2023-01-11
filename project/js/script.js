let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let city = document.querySelector("#nameOfCity");
let refreshButt = document.querySelector("#refreshButt");



refreshButt.addEventListener("click", ()=>{

    hist();
    let gorod = city.value;
    console.log(city.value);
    getCoordinates(gorod)
    getNextDays(gorod)
    // hist();
    
})

let Time = new Date();
const getCoordinates = (city) => {
    fetch(`https://api.weatherbit.io/v2.0/current?lat=35.7796&city=${city}&key=e33e5abef8684a4690beb4c1d2cfc954&include=minutely`)
    .then(response => response.json())
    .then(json => {
        // console.log(json.data[0]);

        let temp = document.querySelector("#temperature");
        temp.textContent = `${Math.round(json.data[0].app_temp)} °C`;


        let weatherLike = document.querySelector("#weatherLike");
        weatherLike.textContent = json.data[0].weather.description;

        let date = document.querySelector("#date");
        date.textContent = `${json.data[0].ob_time.slice(8,10)} ${month[+json.data[0].ob_time.slice(5,7) - 1]} ${json.data[0].ob_time.slice(0,4)} `

        let location = document.querySelector("#location");
        location.textContent = `${json.data[0].city_name}, ${json.data[0].country_code}`

        let NameDay = document.querySelector("#NameDay")
        NameDay.textContent = weekdays[Time.getDay()]

        let incon = document.querySelector("#incon")
        incon.src = `https://www.weatherbit.io/static/img/icons/${json.data[0].weather.icon}.png`

        let precip = document.querySelector("#precip");
        precip.textContent = `PRECIPITATION - ${json.data[0].precip}%`

        let humid = document.querySelector("#humid");
        humid.textContent = `HUMIDITY - ${json.data[0].rh}%`

        let wind = document.querySelector("#wind");
        wind.textContent = `WIND -  ${Math.round( json.data[0].wind_spd)}m/s`

        let iconnDay1 = document.querySelector("#inconDay1");
        iconnDay1.src = `https://www.weatherbit.io/static/img/icons/${json.data[0].weather.icon}.png`

        let nameOfDay1 = document.querySelector("#nameOfDay1")
        nameOfDay1.textContent = weekdays[Time.getDay()]

        let tempOfDay1 = document.querySelector("#tempOfDay1");
        tempOfDay1.textContent = `${Math.round(json.data[0].app_temp)} °C`;

        localStorage.setItem(localStorage.length, `${json.data[0].city_name}`)

    })

    .catch(err => {
        console.log(err);
        let location = document.querySelector("#location");
        location.textContent = `Enter correct city`

        let precip = document.querySelector("#precip");
        precip.textContent = `Enter correct city`

        let humid = document.querySelector("#humid");
        humid.textContent = `Enter correct city`

        let wind = document.querySelector("#wind");
        wind.textContent = `Enter correct city`

        let temp = document.querySelector("#temperature");
        temp.textContent = `Enter correct city`


        let weatherLike = document.querySelector("#weatherLike");
        weatherLike.textContent = `Enter correct city`

        let nameOfDay1 = document.querySelector("#nameOfDay1")
        nameOfDay1.textContent = `Enter correct city`

        let tempOfDay1 = document.querySelector("#tempOfDay1");
        tempOfDay1.textContent = `Enter correct city`

        let nameOfDay2 = document.querySelector("#nameOfDay2")
        nameOfDay2.textContent = `Enter correct city`

        let tempOfDay2 = document.querySelector("#tempOfDay2");
        tempOfDay2.textContent = `Enter correct city`

        let nameOfDay3 = document.querySelector("#nameOfDay3")
        nameOfDay3.textContent = `Enter correct city`

        let tempOfDay3 = document.querySelector("#tempOfDay3");
        tempOfDay3.textContent = `Enter correct city`

        let nameOfDay4 = document.querySelector("#nameOfDay4")
        nameOfDay4.textContent = `Enter correct city`

        let tempOfDay4 = document.querySelector("#tempOfDay4");
        tempOfDay4.textContent = `Enter correct city`
    })
    // https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
}

const getNextDays = (city) => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=e33e5abef8684a4690beb4c1d2cfc954&hours=96`)
    .then(response => response.json())
    .then(json => {
        console.log(json.data[47]);
        let iconnDay2 = document.querySelector("#inconDay2");
        iconnDay2.src = `https://www.weatherbit.io/static/img/icons/${json.data[23].weather.icon}.png`

        let nameOfDay2 = document.querySelector("#nameOfDay2")
        if(Time.getDay()+1>6){
            nameOfDay2.textContent = weekdays[Time.getDay()+1 - 7]
        }else nameOfDay2.textContent = weekdays[Time.getDay()+1]
        

        let tempOfDay2 = document.querySelector("#tempOfDay2");
        tempOfDay2.textContent = `${Math.round(json.data[23].app_temp)} °C`;

        ////////////////////////////////////////////////////////////////

        let iconnDay3 = document.querySelector("#inconDay3");
        iconnDay3.src = `https://www.weatherbit.io/static/img/icons/${json.data[47].weather.icon}.png`

        let nameOfDay3 = document.querySelector("#nameOfDay3")
        if(Time.getDay()+2>6){
            nameOfDay3.textContent = weekdays[Time.getDay()+2 - 7]
        }else nameOfDay3.textContent = weekdays[Time.getDay()+2]

        let tempOfDay3 = document.querySelector("#tempOfDay3");
        tempOfDay3.textContent = `${Math.round(json.data[47].app_temp)} °C`;

        ////////////////////////////////////////////////////////////////

        let iconnDay4 = document.querySelector("#inconDay4");
        iconnDay4.src = `https://www.weatherbit.io/static/img/icons/${json.data[71].weather.icon}.png`

        let nameOfDay4 = document.querySelector("#nameOfDay4")
        if(Time.getDay()+3>6){
            nameOfDay4.textContent = weekdays[Time.getDay()+3 - 7]
        }else nameOfDay4.textContent = weekdays[Time.getDay()+3]

        let tempOfDay4 = document.querySelector("#tempOfDay4");
        tempOfDay4.textContent = `${Math.round(json.data[71].app_temp)} °C`;
    })
    .catch(err => {
        
    })
    
}


const hist = () =>{
    let history = document.querySelector(".history");
    history.innerHTML = ``;
    let conts = document.createElement("h2")
    conts.textContent = "Hisory"
    history.append(conts)
    for(let i = 0; i<localStorage.length; i++){
        let h = document.createElement("h3");
        h.style.color = "black"
        h.textContent = localStorage.getItem(i);
        h.style.cursor = "pointer"
        h.addEventListener("click",()=>{
            getCoordinates(localStorage.getItem(i))
            getNextDays(localStorage.getItem(i))
        })
        history.append(h);
    }
}


hist()