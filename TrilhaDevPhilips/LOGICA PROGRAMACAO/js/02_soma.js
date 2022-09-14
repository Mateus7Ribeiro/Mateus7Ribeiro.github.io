//- Soma: receba dois números num formulário HTML e apresente o resultado da soma desses números para o ; (usuário)

function F02_soma(){
	limparConteudo();
	titulo.innerHTML = "<h1>Soma de dois números</h1>";

	conteudo.innerHTML = " <span class=''>Digite dois números: </span>";
    conteudo.innerHTML += "<input type='number' id='numeroDigitado1' class='input_num' placeholder=''></input>";
    conteudo.innerHTML += "<input type='number' id='numeroDigitado2' class='input_num' placeholder=''></input>";
    conteudo.innerHTML += "<button class='btn-proj-gray' onClick='F02_calcular()'>Calcular</button> ";

	conteudo.innerHTML += "<button class='btn-proj-gray' onClick='limpar()'>Limpar</button><br>";
}

function F02_calcular(){
	let numeroDigitado1 = parseFloat(document.getElementById("numeroDigitado1").value);	
	let numeroDigitado2 = parseFloat(document.getElementById("numeroDigitado2").value);	
	if ( !isNaN(numeroDigitado1+numeroDigitado2) ){
		resultado.innerHTML += "Soma: "+numeroDigitado1+" + "+numeroDigitado2+" = "+(numeroDigitado1+numeroDigitado2)+"<br>";
	}
	else {
		resultado.innerHTML += "<span class='destaque'> Digite um número válido </span><br>";
	}
}


