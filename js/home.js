// // step 01: add an event handler to the add money button inside the from
// document.getElementById('btn-add-money')
//     .addEventListener('click',function(event){
//         // prevent page reload after form submit 
//         event.preventDefault();
//         // step:02
//         const addMoneyInput = document.getElementById('input-add-money');
//         addMoney = parseFloat(addMoneyInput.value);
//         // console.log(addMoney);
//         const pinNumberInput = document.getElementById('input-pin-number');
//         pinNumber = pinNumberInput.value;
//         // console.log(pinNumber);
//         // step:03
//         if(pinNumber === '1234'){
//             // console.log('added the amount')
//             // step:04
//             const currentBalance = document.getElementById('balance');
//             balance = parseFloat(currentBalance.innerText);
//             // console.log(balance);
//             // STEP:05
//             const newBalance = (balance + addMoney).toFixed(2);
//             // console.log(newBalance);
//             // Step: 06
//             currentBalance.innerText = newBalance;
//         }
//         else{
//             alert('Failed to add Money! plz try again')
//         }
//         addMoneyInput.value = '';
//         pinNumberInput.value = '';
// })


document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amountInputField = document.getElementById('input-add-money');
    const amountInput = parseFloat(amountInputField.value);
    // console.log(amountInput);
    const pinNumberField = document.getElementById('input-pin-number');
    const pinNumber = pinNumberField.value;
    // console.log(pinNumber);
    if(pinNumber === '1234'){
        // console.log('added the amount')
        const balanceElementField = document.getElementById('balance');
        const balanceElement = parseFloat(balanceElementField.innerText);
        // console.log(balanceElement);
        const totalAmount = (balanceElement + amountInput).toFixed(2);
        // console.log(totalAmount);
        balanceElementField.innerText = totalAmount;
    }
    else{
        alert('Failed to add Money! plz try again');
    }
    amountInputField.value = '';
    pinNumberField.value = '';
})







