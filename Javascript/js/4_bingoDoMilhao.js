let camposDaCartela
let jogadores;
let numerosJaSorteados;
let ganhouBingo;
let sorteioAtivo;
let divJogadores, divHistorico;
let numeroMax = 99;
let qtdParticipantes = 10;
let numerosNaCartela = 24;
let ganhadores = Array();
let velocidadeSorteio = 500;
let sortAutomaticoAtivo;

const nomesAleatorios = ["Beatriz","Luiz","Marcelo","Isabella","Heloísa","Maria Clara","João","Ana Julia","Emanuelly","Antônio","Bruno","Renan","Pedro","Maria Vitória","Bryan","Natália","Diego","Pietro","Marina","Davi","Henrique","Gabriel","Vinicius","Thiago","Alexandre","Igor","Lucas","Elisa","Manuela","Sophia","Leonardo","Sarah","Vitor","Bruna","Erick","Diogo","Caroline","Alana","Raul","Mariana","Rafael","Ana Luiza","Albert","Daniel","Sophie","Otávio","Camila","Maysa","Giovanna","Thomas","Lorena","Mateus"];
const sobrenomesAleatorios = ["Rezende","Lima","Azevedo","Melo","Gonçalves","Santos","Martins","Porto","Souza","Vieira","Ribeiro","Rodrigues","Miguel","Sales","Barbosa","Ramos","da Mata","Lopes","das Neves","Ferreira","Cunha","Viana","Cardoso","Teixeira","Moraes","Costa","da Costa","da Cruz","Gomes","Rocha","Correia","Dias","Castro","Monteiro","Almeida","Novaes","Aragão","Moreira","Henrique"];

class Jogador {
    constructor(nomeJogador) {
        if(nomeJogador === undefined){
            this.nome = nomesAleatorios[Math.floor(Math.random()*nomesAleatorios.length)]; 
            this.nome += " "+sobrenomesAleatorios[Math.floor(Math.random()*sobrenomesAleatorios.length)]; 
        }
        else{
            this.nome =nomeJogador;
        }

        this.cartela = criaCartela();
        this.cartelaConferencia = Array();
    }

}



function bingoDoMilhao(){
    jogadores = [];
    ganhadores = Array();
    numerosJaSorteados = Array();
    ganhouBingo = false;
    sortAutomaticoAtivo = false;

    clearInterval(sorteioAtivo);
    limparConteudo();    
    mostraMenuBingo();
 
    campoSorteados.innerHTML = "<div class='SorteadosTitulo'>Sorteados:</div><div id='sorteadosConteudo'></div>";
    campoSorteados.setAttribute("class","bingoDoMilhao");
    
    jogadores[qtdParticipantes] = new Jogador("Você");

    desenhaCartelaJogador();
    


    divJogadores = document.createElement("div");
    divJogadores.id = "jogadores";
    resultado.appendChild(divJogadores);
    
    divHistorico = document.createElement("div");
    divHistorico.id = "historicoBingo";
    resultado.appendChild(divHistorico);


    divHistorico.innerHTML = '<h2>Números sorteados</h2>';
    

    for(let cont of range(qtdParticipantes)){
        jogadores[cont] = new Jogador();

    }
    

    for(let jogador of jogadores){

        let divJogador = document.createElement("div");
        divJogador.className = "divJogador";
        divJogador.innerHTML = "<div class='NmJogador'>"+jogador.nome+"</div>";
        let divJogadorCartela = document.createElement("div");
        divJogadorCartela.className = "divJogadorCartela";

        for(let numeroCartela of jogador.cartela){
            let divNumero = document.createElement("span");
            divNumero.className = "n_"+numeroCartela;
            divNumero.innerHTML = numeroCartela;
            divJogadorCartela.appendChild(divNumero);
        }

        
        divJogador.appendChild(divJogadorCartela);
        divJogadores.appendChild(divJogador);
    }
    
    let camposCartela = document.getElementsByClassName("NumeroCartela");
    let cont = 0;
    
        Array.from(camposCartela).forEach(() => {                           
        camposCartela[cont].addEventListener('click', (e) =>{
            
            e.target.setAttribute("class",e.target.className+" sorteado");            
            
         });
        cont++;
    }); 

}


function mostraMenuBingo(){    
    
    titulo.innerHTML = "<h2>Bingo do milhão</h2>";    
    titulo.innerHTML += '<button class="botaoMenuCalendar" onclick="sortearMultiplosNumeros(10);"> Sortear 10 Números</button>';
    titulo.innerHTML += ' <button class="botaoMenuCalendar" onclick="iniciarSorteio();">Sorteio Automatico <span id="botaoPlayPause" class="play"></span></button>';
    titulo.innerHTML += ' <button class="botaoMenuCalendar" onclick="ganhouBingo=false;clearInterval(sorteioAtivo);bingoDoMilhao();">Novo Jogo</button>';
    titulo.innerHTML += '<span id="resposta" class="mensagem Calendar"></span>';
   
    
}

function criaCartela(){
    let cartela = [];
    let contador = 0;

    while(contador<numerosNaCartela){
        let numero = Math.floor(Math.random()*numeroMax);
        if (!cartela.includes(numero) && numero!=0){
            cartela[contador] = numero;
            contador++;
        }
        
    }

    return cartela.sort(function(a, b){return a-b});
}


function pintaCartelasAuto(numeroSorteado){
    let listaCampos = document.getElementsByClassName("n_"+numeroSorteado);
    if(listaCampos.length>0){  
        for(let campo of listaCampos){
            campo.setAttribute("class",campo.className+" sorteado");
        }   
 
    }

}

function sorteiaNumero(){
    let sorteado = Math.floor(Math.random()*numeroMax);
    //console.log(sorteado);
    if (!numerosJaSorteados.includes(sorteado) && sorteado!=0){
        numerosJaSorteados.push(sorteado);
        pintaCartelasAuto(sorteado);
        confereCartela(sorteado);
        
        atualizaPainelSorteados();
        printaHistorico(sorteado);
        return sorteado;
    }
    else {
        sorteiaNumero();
    }
}

function printaHistorico(numero){
    divHistorico.innerHTML += `<span>${numero}</span>`;
}

function iniciarSorteio(){
    let botao = document.getElementById("botaoPlayPause");

    if(sortAutomaticoAtivo) {
        sortAutomaticoAtivo = false;
        clearInterval(sorteioAtivo);
        botao.className = 'play';
    }
    else {
        sortAutomaticoAtivo = true;
        botao.className = 'pause';
        sorteioAtivo = setInterval(function()
        {

            if(ganhouBingo){
                sortAutomaticoAtivo = false;
                clearInterval(sorteioAtivo); 
            }
            else {
                sorteiaNumero();
            }           
        
        },velocidadeSorteio);
    }
}

function sortearMultiplosNumeros(qtd){
    for(let cont = 0; cont < qtd; cont++){
        if(!ganhouBingo){
            sorteiaNumero();
        }
    }   
}



function apuraGanhadores(jogadorGanhador){
        
    ganhadores.push(jogadorGanhador);
    let verboGanhar = ganhadores.length > 1 ? ". Ganharam!!!" : " ganhou!!!" ;

    document.getElementById("resposta").innerHTML = ganhadores.join(' | ')+ verboGanhar+ " Parabéns!";
    
}


function confereCartela(numero){
    for(let jog of jogadores){
        if(jog.cartela.includes(numero)){
            jog.cartelaConferencia.push(numero);

        }
        if(ArrayIguais(jog.cartela, jog.cartelaConferencia)){
            apuraGanhadores(jog.nome);
            ganhouBingo = true;
        }
    }
}

function criaCampoSorteados(){
    let campoSorteados = document.createElement("div");
    campoSorteados.id = 'campoSorteados';

    campoSorteados.innerHTML = "<div class='SorteadosTitulo'>Sorteados:</div><div id='sorteadosConteudo'></div>";

    document.getElementsByTagName("body")[0].insertBefore(campoSorteados,titulo);
}



function atualizaPainelSorteados(){
    let sorteadosConteudo = document.getElementById("sorteadosConteudo");
    let tamArr = numerosJaSorteados.length;
    let qtdNumerosMostrar = 20;
    let numerosMostrar = tamArr > qtdNumerosMostrar ? numerosJaSorteados.slice(tamArr-qtdNumerosMostrar,tamArr) : numerosJaSorteados;
    sorteadosConteudo.innerHTML = '';
    for(let num of numerosMostrar){
        let divNumerosSorteados = document.createElement("span");
        divNumerosSorteados.innerHTML = num;
        
        sorteadosConteudo.appendChild(divNumerosSorteados);
    }
}

function desenhaCartelaJogador(){
    let cartela  = document.createElement("div");
    cartela.id = 'cartelaJogador';
    let cont = 1;

    let TituloCartela = document.createElement("div");
        TituloCartela.className = "TituloCartela";
        
        TituloCartela.innerHTML = "★ Bingo ★";
        cartela.appendChild(TituloCartela);

    for(let numero of jogadores[qtdParticipantes].cartela){     

        let divNumeroCartela = document.createElement("div");
        divNumeroCartela.className = "NumeroCartela n_"+numero;
        divNumeroCartela.id = "qd_"+cont;
        divNumeroCartela.innerHTML = numero;


        cartela.appendChild(divNumeroCartela);
        cont++;
    }

    conteudo.appendChild(cartela);
    
    let divSeparadorCartela = document.createElement("div");
    divSeparadorCartela.className = "SeparadorCartela qd_sep";
    divSeparadorCartela.innerHTML = "♣";
    cartela.insertBefore(divSeparadorCartela,document.getElementById("qd_13"));

    
    
}



 