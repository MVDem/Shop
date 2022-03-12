let button = document.getElementById('burger');

let navigation = document.getElementById('navi');

button.addEventListener('click', function(){ 
    navigation.classList.toggle('display-block');
});