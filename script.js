var jogadornome;
var pontosJogador=0;
var pontosComputador=0;
//sorteia entre dois npumeros
function sortear(min,max) {
    return Math.floor(Math.random() * (max-min+1))+ min 
}
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML=texto;
}
function nomej(nome) {
document.getElementById('jogador-nome').innerHTML=nome;
}
function calcularescolha(jogador,computador) {
    if (jogador==jpedra && computador==1) {
        return 0;

    }
    else if (jogador==jpedra && computador==2) {
        return 2;
    }
    else if (jogador==jpedra && computador==3) {

        return 1;
    }
    else if (jogador==jpapel && computador==1) {
        return 1;
    }
    else if (jogador==jpapel && computador==2) {
        return 0;
    }
    else if (jogador==jpapel && computador==3) {
        return 2;
    }
    else if (jogador==jtesoura && computador==1) {
        return 2;
    }
    else if (jogador==jtesoura && computador==2) {
        return 1;
    }
    else if (jogador==jtesoura && computador==3) {
        return 0;
    }
}
function somaJogador() {
    pontosJogador++
    document.getElementById('pontosJogador').innerHTML=pontosJogador
}
function somaComputador() {
    pontosComputador++
    document.getElementById('pontosComputador').innerHTML=pontosComputador
}


function jogar(escolha) {
    jogadorEscolha=escolha
   
    
    //sortear a jogada do computador
    computadorEscolha=sortear(1,3)
    
    //calcular quem ganhou
    //0 empate
    //1 jogador
    //2 computador
    var ganhador=calcularescolha(jogadorEscolha,computadorEscolha)
    if (ganhador==0) {
        mensagem('Empate')
    }
    else if (ganhador==1) {
        mensagem('Ponto para '+jogadornome)
        somaJogador()
    }
    else if (ganhador==2) {
        mensagem('Ponto para computador')
        somaComputador()
    }

    
}

  document.getElementById('jpedra').onclick=function() {
   jogar(jpedra);
};
document.getElementById('jpapel').onclick=function() {
   jogar(jpapel);
};
document.getElementById('jtesoura').onclick=function() {
   jogar(jtesoura);
};
    nomej(jogadornome=prompt('Diga-me seu nome'))

mensagem(`Bem vindo ${jogadornome}, está preparado? Escolha uma opção acima...`);  



