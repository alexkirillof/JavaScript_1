'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let cartCount = document.querySelector('.Cart-items');
 let cart = {};

 function addProductToObject(productId) {
  if (!(productId in cart)) {
      cart[productId] = 1;
  } else {
      cart[productId]++;
  }
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function cartCountPlus(){
    cartCount.textContent++;
  }
  function addProductIntoCart(productId){
    cartCountPlus();
    addProductToObject(productId);
  }

  

  
    
  













});