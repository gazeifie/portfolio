window.addEventListener('load', ()=>{
   const loading = document.getElementById('loading_page');
   setTimeout(() => {
      loading.classList.add('hide');
      const title_text = document.querySelector('.header_text');
      title_text.classList.add('start');
   }, 1000)

})

document.addEventListener("DOMContentLoaded",()=>{
});


//スクロール時のアニメーションイベント追加
window.addEventListener('scroll', () =>{
   const scroll_animation_element = document.querySelectorAll('.update_befor , .scroll_right');
     for (let i = 0; i < scroll_animation_element.length; i++) {
       const triggerHeight = 200;
       if (window.innerHeight > scroll_animation_element[i].getBoundingClientRect().top +triggerHeight) {
         scroll_animation_element[i].classList.add('start');
       }
     }
 });
