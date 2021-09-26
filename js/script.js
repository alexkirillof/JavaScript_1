'use strict';

document.addEventListener('DOMContentLoaded', () => {


  const Hlink = document.querySelector('#Hlink'),
    close = document.querySelector('#close'),
    menu = document.querySelector('#Hmenu'),
    filterClose = document.querySelector('#filter'),
    filterMenu = document.querySelector('#menu-filter');
    
 
  Hlink.addEventListener('click', () => {
   menu.classList.remove('hide');
    menu.classList.add('show');
});
  menu.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('close')) {
      menu.classList.remove('show');
      menu.classList.add('hide');
    }
});
  filterClose.addEventListener('click', () => {
   filterMenu.remove('show');
    filterMenu.add('hide');
});
  
  
    
  













});