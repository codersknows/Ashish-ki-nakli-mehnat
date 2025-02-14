let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')
menu.onclick =() => {
    menu.classList.toggle('move');
    navbar.classList.toggle('opne-menu');
}

window.onscroll = () => {
    menu.classList.remove('move');
    navbar.classList.remove('opne-menu');
}
const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '100',
    delay: '100',
});
animate.reveal('.home-text', {origin:'left'});
animate.reveal('.home-img', {origin:'top'});
animate.reveal('.heading ,.newsletter h2', {origin:'top'});
animate.reveal('.menu-mask 2.gif', {origin:'left'});
animate.reveal('header,.feature-box,.feature-menu-box,.item-box,.m-item-box,.newsletter', {interval: 700});