const index_url = `https://blooming-inlet-03785.herokuapp.com/api/v1/regions/`

window.addEventListener('DOMContentLoaded', () => {

 console.log('content loaded successfully');
 getWeathers(index_url)

})
const newTag=(tagName)=> document.createElement(tagName);
const getTag=(parentElementClass,childTag)=> document.getElementsByClassName(parentElementClass)[0].appendChild(childTag)

const getWeathers = async (url) => {
 const  weathers = await fetch(url).then(response => response.json()).then(response => response.weathers)
 if(weathers.length) {
    document.getElementById("loader").style.display ="none"
 }
 populateToDiv(weathers)
}

const populateToDiv = (weathers) => {
   const weathersList = document.querySelector('.grid')

    weathers.map(({_id, region, degrees, measure, updatedAt}, index) => {

        let child = newTag("div")       
        let flex = newTag("div")  
        let div2 = newTag("div")     
        let span1 = newTag("span")
        let img = newTag("img")
        img.src = "https://t3.ftcdn.net/jpg/03/73/50/00/240_F_373500029_TSJ1vErHtB2nUtHoAtaFAwe47fqSJbEd.jpg"
        span1.appendChild(img)
        span1.addEventListener('click', () => {
            localStorage.setItem('weather', JSON.stringify(weathers[index]))
            window.location.href = "AddOrEdit.html";
        })  

        let span2 = newTag("span")
        child.classList.add("child")
        span2.innerText = 'X'

        span2.addEventListener('click', () => handleDelete(_id))  

        flex.classList.add("flex")     
        flex.classList.add("flex-row-btn")
        flex.appendChild(span1)
        flex.appendChild(span2)

        div2.innerHTML= ` <div class="pd-20">
        <h1 id="title"> ${region} </h1>
        <p class="conf-text" contenteditable="true">
            Degrees: ${degrees}<sup>0</sup>${measure === 'celcius'? `C`:`F`}<br />
            Last updated on: ${new Date(updatedAt).toLocaleDateString()}
        </p>
    </div>`

        child.appendChild(flex)
        child.appendChild(div2)
        weathersList.appendChild(child)

    })
    
}

const handleDelete = (id) => {
    console.log(id)
    fetch(`${index_url}${id}`, {
        method: 'DELETE',
      })
      .then(res => {
          localStorage.clear('')
        return res.text()
      }) // or res.json()
      .then(res => console.log(res))
      //TODO: Add functionality to display alert
 }
const saveToUpdate =(weather) => { // save temporary
 console.log(weather)
 localStorage.setItem('weather', weather)
}

