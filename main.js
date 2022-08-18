// function for changing item count
function itemCount(inputId, increment){
    const countInput = document.getElementById(inputId);
    let inputValue = parseInt(countInput.value);
    if(increment){
        inputValue++;
        countInput.value = inputValue;
    }
    else {
        if(inputValue !== 0) {
            inputValue--;
            countInput.value = inputValue;
        }
    }
    return inputValue;
}

// function for counting price
function priceCount(priceId, itemCount, pricePerItem){
    const price = document.getElementById(priceId);
    const totalPrice = itemCount * pricePerItem;
    price.innerText = totalPrice;
    return totalPrice;
}

// function for calculating price 
function calculatePrice() {
    let phonePrice = document.getElementById('phone-price');
    phonePrice = parseFloat(phonePrice.innerText);
    let casePrice = document.getElementById('case-price');
    casePrice = parseFloat(casePrice.innerText);

    const subtotal = phonePrice + casePrice;
    const tax = subtotal / 10;
    const total = subtotal + tax;

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

// ================= Click Event Handlers ===============
document.getElementById('phone-plus-button').addEventListener('click', function(){
    const totalItem = itemCount('phone-input', true);
    priceCount('phone-price', totalItem, 1219);
    calculatePrice();
});

document.getElementById('phone-minus-button').addEventListener('click', function(){
    const totalItem = itemCount('phone-input', false);
    priceCount('phone-price', totalItem, 1219);
    calculatePrice();
});

document.getElementById('case-plus-button').addEventListener('click', function(){
    const totalItem = itemCount('case-input', true);
    priceCount('case-price', totalItem, 59);
    calculatePrice();
});

document.getElementById('case-minus-button').addEventListener('click', function(){
    const totalItem = itemCount('case-input', false);
    priceCount('case-price', totalItem, 59);
    calculatePrice();
});