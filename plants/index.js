console.log("все требования учтены")

window.onload = function() {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav')
    const body = document.querySelector('body')
    const main = document.querySelector('main')

    const navItems = document.querySelectorAll('nav ul li')
    burger.addEventListener('click', ()=> {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        body.classList.toggle('lock')
    })

    navItems.forEach(item => item.addEventListener('click', ()=>{

        burger.classList.toggle('active')
        nav.classList.toggle('active')
        body.classList.toggle('lock')
    }))

    main.addEventListener('click', ()=>{
        burger.classList.remove('active')
        nav.classList.remove('active')
        body.classList.remove('lock')
    })

};