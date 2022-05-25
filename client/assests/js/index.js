window.addEventListener('DOMContentLoaded', () => {

 console.log('content loaded successfully');
const index_url = `http://localhost:2000/api/v1/regions/`
 getWeathers(index_url)
})

const getWeathers = async (url) => {
 const  weathers = await fetch(url).then(response => response.json()).then(response => response.weathers)
 console.log(weathers)
 populateToDiv(weathers)
}

const populateToDiv = (weathers) => {
   const weathersList = document.querySelector('.grid')
   const children = []
    weathers.map(({_id, region, degrees, measure, updatedAt}) => {
        let deleteBtn = document.createElement('span');
        deleteBtn.innerText = 'X'
        deleteBtn.addEventListener('click', (e) => {
            alert(_id)
            
        })
        
        const handleDelete =(id) => {
            console.log(id)
             //TODO: call API To delete record then refresh
         }
        const div = `<div class="child">
        <div class="flex flex-row-btn">
            <span>Edit </span>
            <span onclick="handleDelete(${_id})" id="close" class="close"> <i class="fa-solid fa-xmark"></i> X </span>
        </div>
        <div class="pd-20">
            <h1 id="title"> ${region} </h1>
            <p class="conf-text" contenteditable="true">
                Degrees: ${degrees}<sup>0</sup>${measure === 'celcius'? `C`:`F`}<br />
                Last updated on: ${updatedAt}
            </p>
            <button id="btn-continue" onclick="${handleDelete(_id)}"> Continue</button>
        </div>
       </div>`
       
       children.push(div)
    })
    weathersList.innerHTML = children.join('')
}

