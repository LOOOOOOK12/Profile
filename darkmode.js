const toggle = document.querySelectorAll('#theme-toggle');
// const darkmodeOrigPic =
// const lightmodePic =


  toggle.forEach(btn=>{
    btn.addEventListener('click',() => {
      document.body.classList.toggle('change')
    });
  });

