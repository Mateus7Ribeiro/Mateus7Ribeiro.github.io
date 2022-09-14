//- Elaborar um programa que receba 3 números em qualquer ordem e apresente como resultado o maior e o m; (menor)
let numeros = [];

function F04_numeros(){
	limparConteudo();
	titulo.innerHTML = "<h1>Qual número é maior?</h1>";

	conteudo.innerHTML = " <span class=''>Digite 3 números: </span><br>";
    conteudo.innerHTML += "<input type='number' id='numeroDigitado1' class='input_num'></input>";
    conteudo.innerHTML += "<input type='number' id='numeroDigitado2' class='input_num'></input>";
    conteudo.innerHTML += "<input type='number' id='numeroDigitado3' class='input_num'></input>";

    conteudo.innerHTML += "<button class='btn-proj-gray' onClick='F04_calcular()'>Calcular</button> ";

	let camposFormulario = document.getElementsByClassName("input_num");
	let cont = 0;

	Array.from(camposFormulario).forEach(
		() => {
			camposFormulario[cont].addEventListener('change', F04_calcular);
			cont++;
		}
	);


}

function F04_calcular(){
	numeros[0] = parseFloat(document.getElementById("numeroDigitado1").value);	
	numeros[1] = parseFloat(document.getElementById("numeroDigitado2").value);	
	numeros[2] = parseFloat(document.getElementById("numeroDigitado3").value);
	
	if ( !isNaN(numeros[0]+numeros[1]+numeros[2]) ){
		numeros.sort((a, b) => a - b);
		resultado.innerHTML = "<span class='destaque'>Número maior: "+numeros[numeros.length-1]+" </span>";
		resultado.innerHTML += "<br><span class='destaque'>Número menor: "+numeros[0]+" </span>";
		
	}
	else {
		resultado.innerHTML = "<span class='destaque'> </span>";
	}
}

