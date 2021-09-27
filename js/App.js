'use strict';



  const block = document.querySelector('.third-section-cards'),
        cardHeader = document.querySelectorAll('.ts-Card-header'),
        cardPrice = document.querySelectorAll('.card-price'),
        btns = block.querySelectorAll('.add-cart-link'),
        openBasketBtn = document.querySelector('.Cart'),
        basketEl = document.querySelector('.basket'),
        cartCount = document.querySelector('.Cart-items'),
        basketTotalEl = document.querySelector('.basketTotal'),
        basketTotalValueEl = document.querySelector('.basketTotalValue');

       

  let cart = {};  
    

        openBasketBtn.addEventListener('click', function (event) {
          event.preventDefault();
          basketEl.classList.toggle('hide');
      });

        
   btns.forEach(item => {
     item.addEventListener('click',e=>{
       e.preventDefault;
      const productId = e.currentTarget.getAttribute('data-productId');
      addProductIntoCart(productId);
      })
   });
  
   

   function addProductToObject(productId) {
    if (!(productId in cart)) {
        cart[productId] = 1;
    } else {
        cart[productId]++;
    }
  }
  function delProductToObject(productId) {
    if (!(productId in cart)) {
        cart[productId] = 1;
    } else {
        cart[productId]--;
    }
  }
  
  function renderProductInCart(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        changeProductCountBtns(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInCart(productId);
        changeProductCountBtns(productId);
    }
}


function renderNewProductInCart(productId) {
    let productRow = `
        <div class="basketRow" data-productId="${productId}">
            <div>${cardHeader[productId-1].innerText}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>${cardPrice[productId-1].innerText}</div>
            <div>
                 <span class="productTotalRow" data-productId="${productId}">${cardPrice[productId-1].innerText}</span>
            </div>
            <button class="plus" data-productId="${productId}">+</button>
            <button class="minus" data-productId="${productId}">-</button>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
    

function increaseProductCount(productId) {
  const  productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
  productCountEl.textContent++;
}
    
function recalculateSumForProduct(productId) {
  const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
  let ItemPrice = cardPrice[productId-1].innerText;
  let totalPriceForRow = (cart[productId] * (ItemPrice.match(/[0-9/.]+/)[0])).toFixed(2);
  productTotalRowEl.textContent = totalPriceForRow;
}


function changeProductCountBtns(productId) {
  const  productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`),
         plusBtn = document.querySelector(`.plus[data-productId="${productId}"]`),
         minusBtn = document.querySelector(`.minus[data-productId="${productId}"]`),
         busketRow = document.querySelector(`.basketRow[data-productId="${productId}"]`),
         productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
     
         function Items(productId){
          const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
          let ItemPrice = cardPrice[productId-1].innerText;
          let totalPriceForRow = ((productCountEl.textContent) * (ItemPrice.match(/[0-9/.]+/)[0])).toFixed(2);
          productTotalRowEl.textContent = totalPriceForRow;
         }; 
        
  plusBtn.onclick=plusItem;
  minusBtn.onclick=minusItem;
  function plusItem() {
    cartCount.textContent++;
    productCountEl.textContent++;
    Items(productId);
    addProductToObject(productId);
    calculateAndRenderTotalBasketSum();

  }
  function minusItem() {
    cartCount.textContent--;
    productCountEl.textContent--;
    Items(productId);
    delProductToObject(productId);
    calculateAndRenderTotalBasketSum();
    if(productCountEl.textContent==0){
      busketRow.remove();
    }
  }
}

function calculateAndRenderTotalBasketSum() {
    
  let totalSum = 0;
  for (let productId in cart) {
      totalSum += cart[productId] * (cardPrice[productId-1].innerText.match(/[0-9/.]+/)[0]);
  }
  basketTotalValueEl.textContent = totalSum.toFixed(2);
 
  
}


    
    function cartCountPlus(){
      cartCount.textContent++;
    }
    function addProductIntoCart(productId){
      cartCountPlus();
      addProductToObject(productId);
      renderProductInCart(productId);
      calculateAndRenderTotalBasketSum();
    }













    
  
  
    
  













