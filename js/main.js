'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');

  const close = document.getElementById('close');

  const menu = document.querySelector('.humburger');

  


    // ハンバーガーメニュー

 
    open.addEventListener('click', () => {
      overlay.classList.toggle('show');
      menu.classList.toggle('active');
    });


    // モーダルウィンドウ
  

  const menuOpen = document.getElementsByClassName('menuOpen');
  
  for(let i = 0; i < menuOpen.length; i++) {
    menuOpen[i].addEventListener('click', () => {
      overlay.classList.remove('show');
      menu.classList.remove('active');
    });
  }


  // Works画像フェードイン

   const target = document.querySelectorAll('.fade')

   function callback(entries,obs) {
     console.log(entries);

     entries.forEach(entry => {
       if(!entry.isIntersecting) {
         return;
       }

       entry.target.classList.add('entry');
       obs.unobserve(entry.target);
     });
   }

   const options = {
     threshold: 1,
   };
   
   const observer = new IntersectionObserver(callback, options);

   target.forEach(target => {
     observer.observe(target);
   });

  

  
   //  アコーディオンUI　

   const querys = document.querySelectorAll('.query');



   querys.forEach(query => {
     query.addEventListener('click', () => {
       query.parentNode.classList.toggle('appear');

       querys.forEach (el => {
         if (query !== el) {
           el.parentNode.classList.remove('appear');
         }
       });
     });
   });


}

 

  




