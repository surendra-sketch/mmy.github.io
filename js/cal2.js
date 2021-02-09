//  var buttons = document.querySelectorAll('.btn');
//  var screen = document.querySelector('.screen');
//  var matherror = false;
//  var cursor = '<span class="cursor">|</span>';


// buttons.forEach(function(button) {
//    button.addEventListener("click", enterValue);
    
// });


function calcu(numeric) {
document.querySelector(".screen").value = document.querySelector(".screen").value + numeric;
}
function val() {
document.querySelector(".screen").value = eval(document.querySelector(".screen").value);
}
function cl() {
document.querySelector(".screen").value = "";
}
