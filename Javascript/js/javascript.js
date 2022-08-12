const diasSemana = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const diasSemanaExtenso = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const unidade = ["", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", 
    "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
			 
const dezena = ["", "", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

var exercicio = {

    descricao: [
        "1.    Desenhe (monte) um calendário na tela do mês de junho/2022. Ao clicar num dos dias, imprima abaixo do calendário o nome do dia por extenso.",
        "2.    Desenhe a tabela periódica química usando apenas comandos JavaScript",
        "3.    Crie um código JavaScript que insira 100 botões na tela. Um desses botões, ao ser clicado, deve informar para o usuário que ele ganhou um prêmio.",
        "4.    Desenhe na tela uma cartela de bingo. Ao clicar em cima do número, mude de cor, como se o usuário estivesse marcando um dos números que foi chamado.",
        "5.    Insira 10 botões e uma caixa de texto na tela. Cada botão deve ter um número de modo que o primeiro tenha o número 1 e o último o número 10. Sempre que o usuário clicar num botão a caixa de texto deve ser atualizada com a soma deste botão e dos demais que já foram clicados.",
        "6.    Crie um jogo da velha em JavaScript",
        "DESAFIO\n\
Desenvolva um formulário de cadastro em HTML. O formulário deve conter os campos:\n\
Nome, Endereço, UF, Email, CPF, Sexo (M, F, O), Preferências (Filme, Música, Teatro, Outros).\n\
O formulário também deve conter dois botões: \n\
Cancelar (se clicado pergunta se o usuário quer limpar os campos, se confirmado, limpa todos os campos na tela) \n\
Confirmar (se clicado imprime os dados de cada campo na tela para o usuário ver)"
    ],

    titulos: [
        "Calendário",
        "Tabela periódica",
        "100 Botões da sorte",
        "Bingo do milhão",
        "Soma de Botões",
        "Jogo da Velha",
        "DESAFIO Formulário"],

    arquivosCodigo: [
        "1_calendario.js",
        "2_tabelaPeriodica.js",
        "3_botoesDaSorte.js",
        "4_bingoDoMilhao.js",
        "5_somaDeBotoes.js",
        "6_jogoDaVelha.js",
        "7_desafioFormulario.js"]



}


let abasMenu = document.getElementById("abas");
let titulo = document.getElementById("titulo");
let conteudo = document.getElementById("conteudo");
let resultado = document.getElementById("resultado");
let campoSorteados = document.getElementById("campoSorteados");

function limparConteudo(){
    
    conteudo .innerHTML = '';
    resultado.innerHTML = '';
    resultado.setAttribute('class','');
    titulo.innerHTML = '';
    campoSorteados.innerHTML = '';
    campoSorteados.setAttribute('class','');
    
}

let itemClicado;
function carregaMenu() {
    for (let temp = 0; exercicio.titulos.length > temp; temp++) {
        let botao = document.createElement("buttom");
        botao.textContent = exercicio.titulos[temp];
        botao.className = 'menu';
        botao.setAttribute('value',temp);
        botao.setAttribute('title',exercicio.descricao[temp]);
        abasMenu.appendChild(botao);
    }

    
    document.getElementById("abas").addEventListener('click', (e) => {
        
        itemClicado = parseInt(e.target.getAttribute("value"));    

        switch(itemClicado){
            case 0: calendario(); break;
            case 1: tabelaPeriodica(); break;
            case 2: botoesDaSorte(); break;
            case 3: bingoDoMilhao(); break;
            case 4: somaDeBotoes(); break;
            case 5: jogoDaVelha(); break;
            case 6: desafioFormulario(); break;
        }    

        
    });


    
}

function aleatorio(maximo){
    /* retorna um número entre 0 e maximo*/
    return Math.floor(Math.random()*maximo);
}

function range(numero){
     /* retorna um array com 'numero' casas numericas sequenciais começando do 0*/
    return [...Array(numero).keys()].slice(0);
}

function ArrayIguais(a, b) {
    a.sort();
    b.sort();
    return Array.isArray(a) && Array.isArray(b) &&  a.length === b.length && a.every((val, index) => val === b[index]);
}

/*
function criaModal(conteudo){

  let modal = "    <div id=\"id01\" class=\"w3-modal\">\
  <div class=\"w3-modal-content\">\
    <div class=\"w3-container\">\
      <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"w3-button w3-display-topright\">&times;</span>\
      <p>Some text. Some text. Some text.</p>\
      <p>Some text. Some text. Some text.</p>\
    </div>\
  </div>\
</div>\
</div>";

}
*/
carregaMenu();
calendario();
//botoesDaSorte();
//bingoDoMilhao();
//somaDeBotoes();
//jogoDaVelha();
//desafioFormulario();
//tabelaPeriodica();