const nav = document.getElementById("nav-bar");

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 50){  //For nav bar
        nav.classList.add('active-nav');
    } else{
        nav.classList.remove('active-nav');
    }
});