'use strict';

//after going to the moon and back trying to relearn JS, it took about an hour to do. 

let submitButton = document.getElementById('submit');
document.querySelector('.submit').addEventListener('click', function(){
    let numberCustomers = Number(document.querySelector('#numberCustomers').value);
    let tip = Number(document.querySelector('#tipMenu').value / 100);
    let tipTotal = Number(document.querySelector('#billAmount').value * tip);
    let billTotal = (Number(document.querySelector('#billAmount').value) + Number(tipTotal));
    let customerTotalAmount =Number(billTotal / numberCustomers);
    //next two round the numbers to two decimal places. 
    let roundTipTotal = tipTotal.toFixed(2);
    let roundCustomerAmount = customerTotalAmount.toFixed(2);
    // console.log(numberCustomers, typeof numberCustomers);
    // console.log(tip, typeof tip);
    // console.log(tipTotal, typeof tipTotal);
    // console.log(billTotal, typeof billTotal);
    // console.log(customerTotalAmount, typeof customerTotalAmount);
    //tip amount
    document.querySelector('#tip-amount-number').textContent = `$ ${roundTipTotal}`;
    document.querySelector('#total-amount-number').textContent = `$ ${roundCustomerAmount}`;

})


//percentage = tipAmount /100


//actualBillAmount = billAmount (billAmount * (percentage + 1));
//numCustomers
//tipAmount = billAmount * (percentage  + 1);
//totalAmount = actualBillAmount / numCustomers


