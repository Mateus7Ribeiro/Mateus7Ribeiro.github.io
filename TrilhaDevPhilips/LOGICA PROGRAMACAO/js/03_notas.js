//- Elaborar um programa que leia o nome e as 4 notas de um aluno e apresente como resultado o nome e a ; (média)
let aluno;

function alunoObj(nome,notas) {
	this.nome = nome,
	this.notas = notas,
	this.media = function(){
		if(this.notas.length > 0){
			let somaNotas = 0;
			for(let i = 0; i<this.notas.length; i++){
				somaNotas += this.notas[i];				
			}
			return Math.round( somaNotas/this.notas.length * 100 ) /100;
		}
		else {
			alert('Digite as notas');
		}
	}
	
};

function F03_notas(){
	limparConteudo();
	
	titulo.innerHTML = "<h1>Calcular notas</h1>";

	conteudo.innerHTML = "<span class=''>Digite o nome do aluno: </span>";
    conteudo.innerHTML += "<input type='text' id='nomeAluno' class=''></input>";
    conteudo.innerHTML += "<input type='submit' value='Gravar' class='btn-proj-gray' onClick='F03_captaNotas()'></input><br>";

}


function F03_captaNotas(){
	let alunoNome = document.getElementById("nomeAluno").value;
	let alunoNotas = [];
	aluno = new alunoObj(alunoNome,alunoNotas);

	conteudo.innerHTML = " <span class=''>Digite as 4 notas de <b>"+aluno.nome+"</b>: </span><br>";
    conteudo.innerHTML += "<input type='number' min='0' max='10' id='numeroDigitado1' class='input_num'></input>";
    conteudo.innerHTML += "<input type='number' min='0' max='10' id='numeroDigitado2' class='input_num'></input>";
    conteudo.innerHTML += "<input type='number' min='0' max='10' id='numeroDigitado3' class='input_num'></input>";
    conteudo.innerHTML += "<input type='number' min='0' max='10' id='numeroDigitado4' class='input_num'></input>";
    conteudo.innerHTML += "<button class='btn-proj-gray' onClick='F03_calcular()'>Calcular</button> ";

}

function F03_calcular(){
	aluno.notas[0] = parseFloat(document.getElementById("numeroDigitado1").value);	
	aluno.notas[1] = parseFloat(document.getElementById("numeroDigitado2").value);	
	aluno.notas[2] = parseFloat(document.getElementById("numeroDigitado3").value);	
	aluno.notas[3] = parseFloat(document.getElementById("numeroDigitado4").value);	

	resultado.innerHTML = "<span class='destaque'>Média de "+aluno.nome+": "+(aluno.media())+"</span>";
}