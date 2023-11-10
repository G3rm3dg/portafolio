const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn-c')
const menu = document.querySelector('.btn-close')

btnOpen.addEventListener('click', function(){
    menu.classList.toggle('show--menu')
})

btnClose.addEventListener('click', function(){
    menu.classList.remove('show--menu')
})
