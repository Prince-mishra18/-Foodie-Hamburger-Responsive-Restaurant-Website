const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const Go_top =  document.querySelector('.go-to-top')
const nav = document.querySelector('nav')





hamburgerIcon.addEventListener('click', (e)=> {
    e.stopPropagation()
     headerContent.classList.add('menu-open')
})

nav.addEventListener('click',(e) =>{
    e.stopPropagation()
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})

Go_top.addEventListener('click',()=>{
      document.querySelector("body > div").scrollTo(0,0)
})

window.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})
