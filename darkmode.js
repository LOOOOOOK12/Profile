const toggle = document.querySelectorAll('#theme-toggle');


const image2 = document.getElementById('theme-toggle');



  toggle.forEach(btn=>{
    btn.addEventListener('click',() => {
      document.body.classList.toggle('change');
    });
  });

