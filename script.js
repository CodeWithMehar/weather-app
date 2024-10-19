let form = document.querySelector("form");
let cbtn = document.querySelector("#clear");
cbtn.style.display = 'none';
let input = document.querySelector("#input");
let url = `https://api.openweathermap.org/data/2.5/weather?q=&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
let result = document.querySelector("#result");
result.style.display ='none';
form.addEventListener("submit" , async(e)=>{
    let cityName = e.target.cityName.value;
    e.preventDefault();
let fetchData =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`);
let finalres = await fetchData.json();
console.log(finalres)
result.style.display = 'block';
result.innerHTML = `
   <h1>${'City'}  :  ${finalres.name}</h1>
    <h2>${'Country'}   :  ${finalres.sys.country}</h2>
        <h1>${'Temperature'} ${finalres.main.temp}</h1>
      <img src="https://openweathermap.org/img/w/${finalres.weather[0].icon}.png">
        
        <h3>${'wind speed'}  : ${finalres.wind.speed}</h3>
`
cbtn.style.display = 'block';
})
cbtn.addEventListener("click", ()=>{
    result.style.display ='none';
    input.value = '';
    cbtn.style.display = 'none';
  
   
})
