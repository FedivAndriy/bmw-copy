let checkBtn = document.querySelectorAll('.cmp-modelfilter__input--checkbox')

if(checkBtn.checked){
    let body = document.getElementById('body').style.background = 'yellow'
}else{
    body.style.background = 'white'
}