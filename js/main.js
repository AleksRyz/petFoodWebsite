//_______login-form___start__________
let loginForm = document.querySelector('#login-form');  //возвращает первый элемент документа, который соответствует указанному селектору 
document.querySelector('#login-btn').onclick = () =>{  //реакция на клик по #login-btn
   loginForm.classList.toggle('active');  //classList - геттер,toggle-Если класс у элемента отсутств
   headerMenu.classList.remove('active');
}
//_______login-form___end__________

//_______menu-burger___start__________
let headerMenu = document.querySelector('#header__menu');  //возвращает первый элемент документа, который соответствует указанному селектору 
document.querySelector('#menu-btn').onclick = () =>{  //реакция на клик по #menu-btn
   headerMenu.classList.toggle('active');  //classList - геттер,toggle-Если класс у элемента отсутств
   loginForm.classList.remove('active');
   
}
//_______menu-burger___end__________

window.onscroll = () =>{
   loginForm.classList.remove('active');
   headerMenu.classList.remove('active');

   if(window.scrollY>0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}

window.onload = () =>{
 
   if(window.scrollY>0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}