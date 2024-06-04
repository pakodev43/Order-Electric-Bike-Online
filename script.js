var navToggleBtn = document.querySelector('#navToggleBtn')
var nav = document.querySelector('#nav')

navToggleBtn.onclick = () => {
    nav.classList.toggle('active_nav')
    navToggleBtn.classList.toggle('active_nav_toggle')
}