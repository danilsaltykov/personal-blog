let burger = document.querySelector('.burger');
let body = document.querySelector('body');



burger.onclick = function(){
    body.classList.toggle('show-sidebar');
}

