//- Imprimir a tabuada completa numa página HTML

let numeroDigitado;
let imprime;
let resultVazio = "";

function F01_tabuada(){
	limparConteudo();
	titulo.innerHTML = "<h1>Tabuada</h1>";
	conteudo.innerHTML = " <span class=''>Digite um número: </span>";
    conteudo.innerHTML += "<input type='number' id='numeroDigitado' class='input_num'></input>";
    conteudo.innerHTML += "<button class='btn-proj-gray' onClick='F01_calcular()	'>Calcular</button> ";
    conteudo.innerHTML += "  <button class='btn-proj-gray' onClick='F01_gerarTabuada()	'>Gerar Tabuada de 1 a 10</button> ";
    conteudo.innerHTML += "<button class='btn-proj-gray' onClick='limpar()	'>Limpar</button><br>";	
}

function F01_calcular(){

	numeroDigitado = pegarvalor();
	if(numeroDigitado != 0){
		F01_mostrarResultado(numeroDigitado);
	}
}

function pegarvalor(){
	let retornoNumeroDigitado = parseFloat(document.getElementById("numeroDigitado").value);	
	
	if (!isNaN(retornoNumeroDigitado)){
		return retornoNumeroDigitado;
	}
	else {
		alert("Por favor, digite um valor numérico");
		document.getElementById("numeroDigitado").value = 0;
		limpar();
		return 0;			
	}
}

function F01_mostrarResultado(numeroDigitado){
	let soma;
	let mult;
	imprime = "<table><tr><th colspan='4' class='titulo'>Tabuada do "+numeroDigitado+"</th></tr><tr><th>Soma</th><th>Subtração</th><th>Multiplicação</th><th>Divisão</th></tr>";
	for (let cont = 1; cont <= 10 ; cont++){
		soma = (cont+numeroDigitado);
		mult = (cont*numeroDigitado);
		imprime += "<tr>";
		imprime += "<td>"+cont+" + "+numeroDigitado+" = "+soma+"</td>";
		imprime += "<td>"+soma+" - "+numeroDigitado+" = "+(soma-numeroDigitado)+"</td>";
		imprime += "<td>"+cont+" * "+numeroDigitado+" = "+mult+"</td>";
		imprime += "<td>"+mult+" ÷ "+numeroDigitado+" = "+(mult/numeroDigitado)+"</td>";
		imprime += "</tr>";
	}
	imprime += "</table>"

	resultado.innerHTML = ""+imprime+""+resultado.innerHTML;
}

function F01_gerarTabuada(){
	for(let num = 10; num >= 1 ; num--) {
		F01_mostrarResultado(num);
	}
}