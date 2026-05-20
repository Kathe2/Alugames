
function alterarStatus(x){
    let botao = document.getElementById(`game-${x}`);
    let alugado = document.getElementById(`card-${x}`);
    if(botao.classList.contains('btn-alugar')){
        botao.classList.remove('btn-alugar');
        botao.classList.add('btn-devolver');
        botao.innerText = 'Devolver';
        alugado.classList.add('alugado');
    }
    else{
        botao.classList.add('btn-alugar');
        botao.classList.remove('btn-devolver');
        botao.innerText = 'Alugar'
        alugado.classList.remove('alugado');
    }

}