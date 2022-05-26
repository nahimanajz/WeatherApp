window.addEventListener('DOMContentLoaded', () => {
var btnSubmit = document.querySelector('#submit');
 const measure = document.querySelector('#measure').value
 const region = document.querySelector('#region')
 const degrees = document.querySelector("#degree");


 btnSubmit.addEventListener('click', (e) => {
     e.preventDefault();
     const data = {measure, region: region.value, degrees: degrees.value}
     console.log(data)
     const headers = {
        'Content-Type': 'application/json'
     }
     if(localStorage.getItem('weather')) {
        const { _id } = JSON.parse(localStorage.getItem('weather'))
        const url = `https://blooming-inlet-03785.herokuapp.com/api/v1/regions/${_id}` // TODO: Append id right here,
        return fetch(url, {method: 'PUT', headers, body: JSON.stringify(data)}).then(res => res.json()).then(res=> {
  
            localStorage.clear()
            window.location.href = "weathers.html";
        })
     }
     const url = 'https://blooming-inlet-03785.herokuapp.com/api/v1/regions/store'
     return fetch(url, {method: 'POST', headers, body: JSON.stringify(data)}).then(res=> res.json()).then(res =>{
        window.location.href = "weathers.html";
        return console.log(res)
     })
 })
 // set default value in case update is pending
 if(localStorage.getItem('weather')) {
    const {region, degrees} = JSON.parse(localStorage.getItem('weather'))
    document.getElementById("region").value = region
    document.getElementById("degree").value = degrees
   
 }

})