window.addEventListener('DOMContentLoaded', () => {

 console.log('content loaded successfully');
const index_url = `https://blooming-inlet-03785.herokuapp.com/api/v1/regions/`
 getWeathers(index_url)
})
const newTag=(tagName)=> document.createElement(tagName);
const getTag=(parentElementClass,childTag)=> document.getElementsByClassName(parentElementClass)[0].appendChild(childTag)

const getWeathers = async (url) => {
 const  weathers = await fetch(url).then(response => response.json()).then(response => response.weathers)
 populateToDiv(weathers)
}

const populateToDiv = (weathers) => {
   const weathersList = document.querySelector('.grid')
    weathers.map(({_id, region, degrees, measure, updatedAt}) => {
        let deleteBtn = newTag('span');
        deleteBtn.innerText = 'X'
        deleteBtn.addEventListener('click', (e) => {
            alert(_id)
            
        })
        // weathersList.appendChild(deleteBtn)
        let child = newTag("div")       
        let flex = newTag("div")  
        let div2 = newTag("div")     
        let span1 = newTag("span")
        span1.innerText = 'Edit'
        let span2 = newTag("span")
        child.classList.add("child")
        span2.innerText = 'X'

        span2.addEventListener('click', ()=> alert(_id))  
        flex.classList.add("flex")     
        flex.classList.add("flex-row-btn")
        flex.appendChild(span1)
        flex.appendChild(span2)
        div2.innerHTML= ` <div class="pd-20">
        <h1 id="title"> ${region} </h1>
        <p class="conf-text" contenteditable="true">
            Degrees: ${degrees}<sup>0</sup>${measure === 'celcius'? `C`:`F`}<br />
            Last updated on: ${updatedAt}
        </p>
        <button id="btn-continue" onclick="${handleDelete(_id)}"> Continue</button>
    </div>`
         
        child.appendChild(flex)
        child.appendChild(div2)
        weathersList.appendChild(child)

    })
    
}


const handleDelete =(id) => {
    console.log(id)
     //TODO: call API To delete record then refresh
 }
