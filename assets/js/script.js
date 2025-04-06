window.addEventListener('scroll', function(){
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem', window.scrollY >= 200)
}) //rolagem que gera o menu fixo com bg branco
