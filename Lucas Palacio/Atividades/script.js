document.addEventListener('DOMContentLoaded',function(){
    const imagem = document.getElementById('minhaImagem');
    const botao = document.getElementById('toggleBnt');
botao.addEventListener('click',function(){
    imagem.classList.toggle('hidden');

    if (imagem.classList.contains('hidden')) {
        botao.textContent = 'Show';
        botao.classList.add('show-mode');
    } else {
        botao.textContent ='Hide';
        botao.classList.remove('show-mode');
    }
});
});

document.addEventListener('DOMContentLoaded',function(){
    const imagem2 = document.getElementById('minhaImagem2');
    const botao2 = document.getElementById('toggleBnt2');
botao2.addEventListener('click',function(){
    imagem2.classList.toggle('hidden');

    if (imagem2.classList.contains('hidden')) {
        botao2.textContent = 'Show';
        botao2.classList.add('show-mode');
    } else {
        botao2.textContent ='Hide';
        botao2.classList.remove('show-mode');
    }
});
<<<<<<< HEAD
});

=======
});
>>>>>>> 11e63403101468934ad064afe24359754668b149
