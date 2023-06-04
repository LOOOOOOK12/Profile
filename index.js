const nav = document.getElementById("nav-bar");
const up = document.getElementById("Up");

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 50){  //For nav bar
        nav.classList.add('active-nav');
    } else{
        nav.classList.remove('active-nav');
    }
});

up.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });