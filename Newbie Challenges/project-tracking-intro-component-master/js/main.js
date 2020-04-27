const navToggle = document.querySelector('.hamburger-button');
const navLink = document.querySelectorAll('.nav__list-link');

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
    console.log("done");
});

navLink.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open');
    })
});