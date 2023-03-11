const allLinks = document.querySelectorAll(".nav-box-link")
const prices= document.querySelectorAll(".price") 

console.log(allLinks)

allLinks.forEach(e => {
    console.log(e)
    e.addEventListener("click", el =>{
        console.log(e.nextElementSibling)
        const price = e.nextElementSibling

        price.classList.toggle("show")
      
    } )
})


