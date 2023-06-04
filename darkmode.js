const toggle = document.getElementById('Profile');

toggle.addEventListener('click',function(){
    if(this.classList.toggle('Profile')){
      body.style.background = 'pink';
      body.style.transition = '0.5s';
      container.style.background = 'rgb(253, 125, 146)';
      toggle.style.border = '3px solid #466DFF';
      image.src = originalImageSrc;
    }
    else{
      body.style.background='#3460ff';
      body.style.transition = '0.5s';
      container.style.background = '#3A6EA5';
      body.style.transition = '0.5s';
      toggle.style.border = '3px solid pink';
      image.src = newImageSrc;
    }

})