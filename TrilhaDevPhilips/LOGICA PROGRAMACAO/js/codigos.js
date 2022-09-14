
var exercicio = {

    descricao: [
		"Imprimir a tabuada completa numa página HTML",
		"Soma: receba dois números num formulário HTML e apresente o resultado da soma desses números para o ; (usuário)",
		"Elaborar um programa que leia o nome e as 4 notas de um aluno e apresente como resultado o nome e a ; (média)",
		"Elaborar um programa que receba 3 números em qualquer ordem e apresente como resultado o maior e o m; (menor)",
		"Elaborar um programa que resolva uma equação do 2o grau (ax2 + bx + c = 0);"
    ],

    titulos: [
		"Tabuada Completa", 
		"Soma dos números", 
		"Notas Aluno", 
		"Ordem dos números", 
		"Equação do 2ºGrau"],

    arquivosCodigo: [
		"01_tabuada.js", 
		"02_soma.js", 
		"03_notas.js", 
		"04_numeros.js", 
		"05_equacaoSegGrau.js"]

}


function limpar(){
	document.getElementById("resultado").innerHTML = resultVazio;
}


let abasMenu = document.getElementById("abas");
let titulo = document.getElementById("titulo");
let conteudo = document.getElementById("conteudo");
let resultado = document.getElementById("resultado");


function limparConteudo(){
    
    conteudo .innerHTML = '';
    resultado.innerHTML = '';
    resultado.setAttribute('class','');
    titulo.innerHTML = '';

    
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

			case 0: F01_tabuada() ; break;
			case 1: F02_soma() ; break;
			case 2: F03_notas() ; break;
			case 3: F04_numeros() ; break;
			case 4: F05_equacaoSegGrau() ; break;

        }    

        
    });
    
}

carregaMenu();
F01_tabuada();
//F02_soma();
//F03_notas();
//F04_numeros();
//F05_equacaoSegGrau();