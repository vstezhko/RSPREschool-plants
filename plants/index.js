console.log("все требования учтены")

window.onload = function() {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav')
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    const navItems = document.querySelectorAll('nav ul li')

    const handleMenu = (type) => {
        if(window.innerWidth < 721) {
            if (type === 'toggle') {
                burger.classList.toggle('active')
                nav.classList.toggle('active')
                body.classList.toggle('lock')
            } else {
                burger.classList.remove('active')
                nav.classList.remove('active')
                body.classList.remove('lock')
            }
        }
    }

    burger.addEventListener('click', ()=> {
        handleMenu('toggle')
    })

    navItems.forEach(item => item.addEventListener('click', ()=>{
        handleMenu()
    }))

    main.addEventListener('click', ()=>{
        handleMenu()
    })

};