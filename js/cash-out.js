document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const inputCashOutField = document.getElementById('input-cash-out');
    const inputCashOut = inputCashOutField.value;

    const inputCashOutPinField = document.getElementById('input-cash-out-pin');
    const inputCashOutPin = inputCashOutPinField.value;

    if(inputCashOutPin === '1234'){
        const balanceElementField = document.getElementById('balance');
        const balanceElement = balanceElementField.innerText;
        const cashOutAmount = balanceElement - inputCashOut;
        // console.log(cashOutAmount);
        balanceElementField.innerText = cashOutAmount;
    
    }
    else{
        alert('Failed to add Money! plz try again')
    }
    inputCashOutField.value = '';
    inputCashOutPinField.value = '';
})