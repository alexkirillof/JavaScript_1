'use strict';

document.addEventListener('DOMContentLoaded', () => {


  const filterClose = document.querySelector('#filter'),
    filterMenu = document.querySelector('.filter-menu'),
    filterShow = document.querySelector('.filter-name');
 
  filterClose.addEventListener('click', () => {
    filterMenu.classList.add('hide');
  
  });
filterShow.addEventListener('click', () => {
  if (filterMenu.classList.contains('hide')) {
      filterMenu.classList.remove('hide');
    }
 });

  
  
    
  













});