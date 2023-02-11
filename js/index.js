alert("Keep clicking anywhere on the screen till the animation reaches its end. Navigate to 'Bottles' tab for more.")

const cap = document.querySelector('.home .row.row1 .col-auto img')
const circle = document.querySelector('.home .row.row2 .col-auto')
const div = document.querySelectorAll('.home .row.row2 .col-auto .hidden')
const button = document.querySelector('.home .row.row2 .col-auto .btn-hidden')
const bottle = document.querySelector('.home .row.row3 .col-auto img')
const navbar = document.querySelector('header nav')
const navbarBrand = document.querySelector('header nav .navbar-brand')
const home = document.querySelector('.container.home')
const cartBtn = document.querySelector('.home .row.row3 button')
const bBackground = document.querySelector('.bottles .background')
const blueBottle = document.querySelector('.bottles .background .blue')
const greenBottle = document.querySelector('.bottles .background .green')
const blackBottle = document.querySelector('.bottles .background .black')
const redBottle = document.querySelector('.bottles .background .red')
const bottlesP = document.querySelector('.bottles p')
const bottles = document.querySelector('.bottles')
const work = document.querySelector('.work')
const testimonials = document.querySelector('.testimonials')
const tBalls = document.querySelectorAll('.testimonials .balls img')
const footer = document.querySelector('footer')
const ocean = document.querySelector('.ocean')

window.addEventListener('click', () => {
    cap.style.animation = 'cap-animation 3s forwards'
    circle.style.animation = 'circle-animation 3s forwards'
    div[0].style.animation = 'div-animation 3s forwards'
    div[1].style.animation = 'div-animation 3s forwards'
    button.style.animation = 'btn-hidden 3s forwards'
    bottle.style.animation = 'bottle-animation 3s forwards'

    if (cap.style.animation !== "") {
        setTimeout(() => {
            window.addEventListener('click', () => {
                navbar.style.animation = 'navbar-animation 2s forwards'
                navbarBrand.style.animation = 'navbar-brand-animation 2s forwards'
                home.style.animation = 'home-animation 2s forwards'
                cartBtn.style.animation = 'button-fade 5s forwards'
                bBackground.style.animation = 'background-animation 2s forwards'
                blueBottle.style.animation = 'blueB-animation 2s forwards'
                greenBottle.style.animation = 'greenB-animation 2s forwards'
                blackBottle.style.animation = 'blackB-animation 2s forwards'
                redBottle.style.animation = 'redB-animation 2s forwards'
                bottlesP.style.animation = 'bottles-p-animation 2s forwards'

                if (bottlesP.style.animation !== "") {
                    setTimeout(() => {
                        window.addEventListener('click', () => {
                            bottles.style.animation = 'bottles-animation 2s forwards'
                            work.style.animation = 'work-animation 2s forwards'

                            if (work.style.animation !== "") {
                                setTimeout(() => {
                                    window.addEventListener('click', () => {
                                        work.style.animation = 'work-animation2 1500ms forwards'
                                        testimonials.style.animation = 'testimonials-animation 1500ms forwards'
                                        for(let i = 0; i < tBalls.length; i++) {
                                            tBalls[i].style.animation = 'balls-animation 1000ms forwards'
                                        }
                                        ocean.style.animation = 'ocean-animation 1500ms forwards'
                                        footer.style.animation = 'footer-animation 1500ms forwards'
                                        
                                    }, {once: true})
                                }, 1500)
                            }
                        }, {once: true})
                    }, 2000)
                }
            }, {once: true})
        }, 3000)
    }
}, {once: true})