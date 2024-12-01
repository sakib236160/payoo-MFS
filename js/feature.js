document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    // console.log('clicked');

    // step: 02
    document.getElementById('cash-out-form').classList.remove('hidden');
    // step: 03
    document.getElementById('add-money-form').classList.add('hidden');
})


document.getElementById('btn-show-add-money').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
})