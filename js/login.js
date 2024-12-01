// // console.log('hello');

// // document.getElementById('id').addEventListener('click',function(){})


// // step 01: set event handler
// document.getElementById('button-login').addEventListener('click',function(event){
//     // step 02: prevent default behavior (reloading Browser)
//     event.preventDefault();
//     // console.log('hjjskhjk')

//     // step 03: get the phone Number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     // console.log(phoneNumber,pinNumber);

//     // step 04: valid phone number and pin number
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You Are Login');
//     }
//     else{
//         alert('wrong phone Number and Pin Number');
//     }
// })







document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumberField = document.getElementById('phone-number');
    const pinNumberField = document.getElementById('pin-number');

    const phoneNumber = phoneNumberField.value;
    const pinNumber = pinNumberField.value;

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('ok You Are is Login');
        window.location.href='/home.html';
    }
    else{
        alert('wrong phoneNumber And PinNumber');
    }

    phoneNumberField.value = '';
    pinNumberField.value = '';
})














// document.getElementById('button-login').addEventListener('click', function (event) {
//     event.preventDefault(); 

//     const phoneNumberField = document.getElementById('phone-number');
//     const pinNumberField = document.getElementById('pin-number');

//     const phoneNumber = phoneNumberField.value;
//     const pinNumber = pinNumberField.value;

//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log('OK, You Are Logged In');
//     } else {
//         alert('Wrong Phone Number and PIN Number');
//     }

//     phoneNumberField.value = '';
//     pinNumberField.value = '';
// });
