const nav = document.getElementById("nav-bar");
const up = document.getElementById("Up");

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section")

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 100){  //For nav bar
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

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY+ 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);





  

  