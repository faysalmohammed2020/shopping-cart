function updateCart(product,price,isIncreasing){
    const inputField = document.getElementById(product +'-input');
    let cartInput = inputField.value;

    if(isIncreasing == true){
        cartInput = parseInt(cartInput) + 1;
    
    }
    else if(cartInput > 0){
        cartInput = parseInt(cartInput) - 1;
    }
    inputField.value = cartInput;
    //update the price of cart on html

      const cartPrice = document.getElementById(product +'-price');
      cartPrice.innerText = cartInput * price;
    
    //calculateTotal
    calculateTotal();
    
}

function getInputValue(product){
    const inputField = document.getElementById(product +'-input');
    const cartInput = parseInt(inputField.value);
    return cartInput;
}

function calculateTotal(){
    const phonePrice = getInputValue('phone')*1219;
    const casePrice = getInputValue('case')*59;

    const subTotal = phonePrice + casePrice;
    const tax = subTotal/10;
    const totalPrice = subTotal + tax;
    //update on html
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total-price').innerText = totalPrice;
}


//handle phone cart events 

document.getElementById('phone-plus').addEventListener('click',function(){
/* const inputField = document.getElementById('cart-input');
const cartInput = inputField.value;*/
updateCart('phone',1219,true);
});
document.getElementById('phone-minus').addEventListener('click',function(){
/*const inputField = document.getElementById('cart-input');
const cartInput = inputField.value;*/
updateCart('phone',1219,false);

});

//handle case cart events

document.getElementById('case-plus').addEventListener('click',function(){
    updateCart('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateCart('case',59,false);
});

document.getElementById('check-out').addEventListener('click' , function(){
    alert('Checkout Successfull');
})