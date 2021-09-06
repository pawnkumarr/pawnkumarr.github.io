const humburger = document.querySelector(`.humburger`);
const navlinks = document.querySelector(`.navlinks`);


// navlinks

humburger.addEventListener('click', () =>{
    navlinks.classList.toggle(`open`);
})
