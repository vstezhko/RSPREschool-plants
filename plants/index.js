console.log("все требования учтены")

window.onload = function() {

    /// menu block

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

    // service block

    const serviceButtons = document.querySelectorAll('.service .button')
    const cards = document.querySelectorAll('.service-cards .card')

    let activeService = []

    const setThirdDisabled = () => {
        if (activeService.length === 2) {
            serviceButtons.forEach(button => {
                if (!activeService.includes(button.attributes['data-service'].value)) {
                    button.disabled = true
                }
            })
        }
    }
    const removeThirdDisabled = () => {
        if (activeService.length < 2) {
            serviceButtons.forEach(button => {
                    button.disabled = false

            })
        }
    }

    serviceButtons.forEach(btn => btn.addEventListener('click', (e)=>{
        if (!activeService.includes(e.target.attributes['data-service'].value) && activeService.length<2 ) {
            btn.classList.toggle('active')
            activeService.push(e.target.attributes['data-service'].value)
        } else if (activeService.includes(e.target.attributes['data-service'].value) && activeService.length<3 ){
            btn.classList.toggle('active')
            activeService = activeService.filter(i => i !== e.target.attributes['data-service'].value)
        }

        cards.forEach(card => {
            activeService.includes(card.attributes['data-service'].value) ? card.classList.add('blur') : card.classList.remove('blur')
        })
        removeThirdDisabled()
        setThirdDisabled()
    }))

    // accordion

    const priceItems = document.querySelectorAll('.prices-list-item')
    const accordionArrow = document.querySelectorAll('.select-arrow')

    accordionArrow.forEach(item => {

        item.addEventListener('click', ()=>{
            console.log('click')
            priceItems.forEach(i => {
                if (i.classList.contains('open') && i !== item.parentElement.parentElement) {
                    i.classList.remove('open')
                }
            })

            item.parentElement.parentElement.classList.toggle('open')
        })
    })

    // select





};