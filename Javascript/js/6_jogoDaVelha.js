let turno;
let jogadorJogando;
let jogadorInicia;
let jogadoresJV = Array();
let camposDisponiveis;
let campoEscolhidoPc;  
let cantos;

if (localStorage.getItem("jogadorInicia") === null) {
    parseInt(localStorage.setItem('jogadorInicia',0));
    parseInt(localStorage.setItem('jogadorJogando',0));
}

let linhasRetas = [
    [1,2,3] ,   // padrao soma 1
    [1,4,7] ,   // padrao soma 3
    [1,5,9] ,   // padrao soma 4
    [2,5,8] ,   // padrao soma 3
    [3,5,7] ,   // padrao soma 2
    [3,6,9] ,   // padrao soma 3
    [4,5,6] ,   // padrao soma 1
    [7,8,9]     // padrao soma 1
];  

class JogadorJogoDaVelha {
    constructor(peca){
        this.peca = peca;
        this.camposMarcados = Array();
        this.vezesGanhador = (localStorage.getItem(peca) == null) ? 0 : parseInt(localStorage.getItem(peca));
    }
}

function jogoDaVelha(){
    
    turno = 1;
    cantos = [1,3,7,9];
    camposDisponiveis = range(10).slice(1,10);
    jogadorInicia  =  parseInt(localStorage.getItem('jogadorInicia'));
    jogadorJogando =  parseInt(localStorage.getItem('jogadorJogando'));
    
    jogadoresJV[0] = new JogadorJogoDaVelha('x');
    jogadoresJV[1] = new JogadorJogoDaVelha('o');            
    jogadoresJV[2]  = new JogadorJogoDaVelha('empates');

    limparConteudo();
    
    let jogoDaVelha = document.createElement("div");
    jogoDaVelha.id = "jogoDaVelha";
    titulo.innerHTML = "<h1 >Jogo da Velha</h1>";
    titulo.innerHTML += '<button class="botaoMenuCalendar" onclick="comoJogar()">Como jogar?</button>';
    titulo.innerHTML += ' <button class="botaoMenuCalendar" onclick="zerarPlacar()">Zerar Placar</span></button>';
    titulo.innerHTML += ' <button class="botaoMenuCalendar" onclick="jogoDaVelha()">Novo Jogo</button>';
    titulo.innerHTML += `<span id="resposta" class="mensagem placarJogoVelha"><b>PLACAR:</b> <span class='img_jogoVelha clicou_x'> </span> Você (${jogadoresJV[0].vezesGanhador}) | (${jogadoresJV[1].vezesGanhador}) Computador <span class='img_jogoVelha clicou_o'> </span>  | Empates: ${jogadoresJV[2].vezesGanhador} </span>`;
    
    
    conteudo.appendChild(jogoDaVelha);
    
    for(let campo of range(9)){
        let campos = document.createElement("span");
        campos.className = "campo";
        campos.id = campo+1;
        
        jogoDaVelha.appendChild(campos);
    }
    
    let camposJogoDaVelha = document.getElementsByClassName("campo");
    let cont = 0;
    if(jogadorInicia == 1){        
        jogadaComputador();
    }


    Array.from(camposJogoDaVelha).forEach(() => {                           
        camposJogoDaVelha[cont].addEventListener('click', (e) =>{
            let clicado = parseInt(e.target.id);
            if(camposDisponiveis.includes(clicado)){
                marcarCasa(clicado);
                jogadorJogando == 1 ? jogadaComputador() : '';
            }
                        
        });
        cont++;
    }); 
    
    
}

function jogadaComputador(){
     
    if(turno<=2){
        campoEscolhidoPc = cantos[aleatorio(cantos.length)];
    }
    else {
        let encontraJogada;
        encontraJogada = ondejogar(jogadoresJV[1].camposMarcados);
        campoEscolhidoPc = encontraJogada ? encontraJogada :  ondejogar(jogadoresJV[0].camposMarcados);
        campoEscolhidoPc = campoEscolhidoPc ? campoEscolhidoPc : camposDisponiveis[aleatorio(camposDisponiveis.length)];
    }
    marcarCasa(campoEscolhidoPc);
    
}
function ondejogar(jogoVerificar){
    let jogadasPossiveis = Array();   

    for(let x of range(linhasRetas.length)){  

        let ItensEmComum = linhasRetas[x].filter(value => jogoVerificar.indexOf(value) !== -1);
        
        if(ItensEmComum.length==2 ){
            let ItemAMarcar = linhasRetas[x].filter(value => jogoVerificar.indexOf(value) == -1);
            jogadasPossiveis = jogadasPossiveis.concat(ItemAMarcar);
        }
    }
    jogadasPossiveis = camposDisponiveis.filter(value => jogadasPossiveis.indexOf(value) !== -1);
    //referencia https://pt.wikihow.com/Ganhar-no-Jogo-da-Velha
    //TODO verificar jogadas possiveis em linhas removendo possibilidades com casas vazias que não contenham 'x' E 'o'
    //pode aumentar a dificuldade do jogo
    return jogadasPossiveis[0];

}



let verificaLinha;
function verificaGanhador(){
   let nenhumGanhador = true;
    for(let x of range(linhasRetas.length)){ 

        verificaLinha = jogadoresJV[jogadorJogando].camposMarcados.filter(value => linhasRetas[x].indexOf(value) !== -1).length == 3;      
        if (verificaLinha){
            
            resultado.className = 'ganhadorJogoDaVelha';
            resultado.innerHTML = "Jogador <span class='img_jogoVelha clicou_"+jogadoresJV[jogadorJogando].peca+"'></span> ganhou!";
            fimDeJogo(jogadorJogando);
            nenhumGanhador = false;            
            break;
        }
         

    } 

    if (nenhumGanhador){
        alteraTurno();
    }


}

function marcarCasa(casaMarcada){
    //resultado.innerHTML += `<br>turno ${turno} - jogadorJogando ${jogadorJogando} - jogadorInicia ${jogadorInicia} - casaMarcada ${casaMarcada}`;
    let campoTemp = document.getElementById(casaMarcada);
    campoTemp.className = "campo clicou_"+jogadoresJV[jogadorJogando].peca;
    removeItemDaLista(camposDisponiveis, casaMarcada);
    removeItemDaLista(cantos, casaMarcada);
    jogadoresJV[jogadorJogando].camposMarcados.push(casaMarcada);
    verificaGanhador();
    
}

function fimDeJogo(ganhou){
    localStorage.setItem(jogadoresJV[ganhou].peca, (jogadoresJV[ganhou].vezesGanhador) +=1);
    jogadorInicia = jogadorInicia == 0 ? 1 : 0;
    

    localStorage.setItem('jogadorInicia',jogadorInicia);
    localStorage.setItem('jogadorJogando',jogadorInicia);    
    
    jogadorJogando = '';

    //setTimeout(() => {
    //    jogoDaVelha();      
    //}, 1000);      

}


function alteraTurno(){
    jogadorJogando = jogadorJogando==0 ? 1 : 0;
    turno++;

    if(camposDisponiveis.length <=0){

        resultado.className = 'empateJogoDaVelha';
        resultado.innerHTML = "Acabaram as jogadas: Empate";
        fimDeJogo(2);        
        
    }
}

function removeItemDaLista(lista, item){
    if(lista.indexOf(item)>=0){
        lista.splice(lista.indexOf(item),1);
    }
}

function zerarPlacar(){
    alert('Placar zerado');
    for(let x of range(3)){
        localStorage.setItem(jogadoresJV[x].peca,0);

    }
    localStorage.setItem('jogadorInicia',0);
    localStorage.setItem('jogadorJogando',0);

    jogoDaVelha();
}

function comoJogar(){
    alert("Você joga marcando com o 'X' e o computador com '○'. \nEscolha um espaço que não esteja marcado para colocar a sua peça. \n\nO primeiro que conseguir marcar 3 casas em sequência ganha. \n\nBoa Sorte!!!");
}