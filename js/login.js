// console.log('hello');

// document.getElementById('id').addEventListener('click',function(){})


// step 01: set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // step 02: prevent default behavior (reloading Browser)
    event.preventDefault();
    console.log('hjjskhjk')

    // step 03: get the phone Number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})