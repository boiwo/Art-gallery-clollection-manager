document.addEventListener('DOMContentLoaded',async(event)=>{
    const cats = await Getcats() 
    displayCats(cats)
    clickDetails
 })
 
 fetch("http://localhost:3000/cats")
  .then(res => res.json())
  .then(cats =>{displayCats
     console.log(cats);
  })
 
  //frontend logic
 
  function displayCats(cats){
      return cats.map((cats)=>{
         return`
             <div class="card">
              <img src="${cats.image}" class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${cats.name}</h5>
                 <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">${cats.position}</a>
           
                 <form>
                    <button type="submit" class="btn btn-primary">click</button>
             
                 </form>
         </div>
     </div>
         `
     })
  const catsContainer = document.getElementById("all-cats")
  catsContainer.innerHTML = catsCats
  }
 
  function clickDetails(cats){
     const btnclick = document.querySelector("#cat-click")
     const ul = document.createElement('ul')
     btnclick.forEach(btn =>{
         btn.addEventListener("click", (event) => {
             const searchCat = cats.find((element) => element === event.target.id)
             p.innerHTML =`
             <li>${searchCat.name}</li>
             <li>${searchCat.position}</li>
             <li>
             <a href="${searchCat.link}"> </a>
             </li>
 
             `
             catsDetails.appendChild
         })
        
         
 
     })
  }