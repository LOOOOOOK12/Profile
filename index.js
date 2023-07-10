const nav = document.getElementById("nav-bar");
const up = document.getElementById("Up");

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

const burgir = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

var typed = new Typed(".auto-type", {
    strings: ["Coder", "Weeb", "Taga ayos ng ref" , "Web Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true
})


/*burgir Function*/
burgir.addEventListener("click", () => {
  burgir.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".links").forEach(n => n.addEventListener("click", ()=>{
  burgir.classList.remove("active");
  navMenu.classList.remove("active");

}))

// window.addEventListener('scroll', ()=>{
//     if(window.scrollY >=  50){  
//         nav.classList.add('active-nav');
//     } else{
//         nav.classList.remove('active-nav');
//     }
// });

/*up button ( to home)*/
up.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

// function activeMenu(){
//     let len = sec.length;
//     while(--len && window.scrollY+ 97 < sec[len].offsetTop){}
//     li.forEach(ltx => ltx.classList.remove("active"));
//     li[len].classList.add("active");
// }
// activeMenu();

// window.addEventListener("scroll",activeMenu);


  

  