//- Elaborar um programa que resolva uma equação do 2o grau (ax2 + bx + c = 0);
let eixo1 	;
let eixo2 	;
let xVertice ;
let yVertice ;

function F05_equacaoSegGrau(){
	limparConteudo();
	titulo.innerHTML = "<h1>Equação do 2º Grau</h1>";
	titulo.innerHTML += "<span>(<b>A</b>x² + <b>B</b>x + <b>C</b>=0)</span>";
	
	conteudo.innerHTML = "<br><span class=''>Digite 3 números: </span>";
    conteudo.innerHTML += "<br><label>Valor <b>A</b>: </label><input type='number' step='0.1' value='1' id='numeroDigitadoA' class='input_num'></input>";
    conteudo.innerHTML += "<br><label>Valor <b>B</b>: </label><input type='number' step='0.1' value='-4' id='numeroDigitadoB' class='input_num'></input>";
    conteudo.innerHTML += "<br><label>Valor <b>C</b>: </label><input type='number' step='0.1' value='-12' id='numeroDigitadoC' class='input_num'></input>";

    conteudo.innerHTML += "<br><br><button class='btn-proj-gray' onClick='F05_calcular()'>Calcular</button> ";

	let camposFormulario = document.getElementsByClassName("input_num");
	let cont = 0;

	Array.from(camposFormulario).forEach(
		() => {
			camposFormulario[cont].addEventListener('change', F05_calcular);
			cont++;
		}
	);


//"Atenção: o valor do coeficiente a nunca é igual a 0, caso isso ocorra, a equação deixa de ser do 2º grau.

//y = -b +- raiz(b² - 4 a c) / 2 a
	
}

function F05_calcular(){
	let valorA = parseFloat(document.getElementById("numeroDigitadoA").value);	
	let valorB = parseFloat(document.getElementById("numeroDigitadoB").value);	
	let valorC = parseFloat(document.getElementById("numeroDigitadoC").value);
	
	if ( valorA != 0 && !isNaN(valorA) ){
		eixo1 		= Math.round( (-valorB - Math.sqrt(valorB*valorB - 4 * valorA*valorC)) / 2*valorA *100 ) /100;
		eixo2 		= Math.round( (-valorB + Math.sqrt(valorB*valorB - 4 * valorA*valorC)) / 2*valorA *100 ) /100;
		xVertice 	= Math.round( -valorB / 2*valorA  *100 ) /100;
		yVertice 	= Math.round( xVertice*xVertice+valorB*xVertice+valorC  *100 ) /100;

		resultado.innerHTML = 	"<span class='destaque'>Eixo 1: ("+ eixo1 +", 0) </span>";
		resultado.innerHTML += 	"<br><span class='destaque'>Eixo 2: ("+ eixo2 +", 0) </span>";
		
		resultado.innerHTML += "<br><span class='destaque'>Vertice : ("+ xVertice +", "+yVertice+") </span>";

		resultado.innerHTML += "<div id='curve_chart' style='width: 900px; height: 500px'></div>";

		F05_desenhaGrafico();
		
		
	}
	else {
		resultado.innerHTML = "<span class='destaque'> Valor de A não pode ser igual a 0 </span>";
	}

}

function F05_desenhaGrafico() {
	var data = google.visualization.arrayToDataTable([
	  ['x', 'y'],
	  [eixo1,  0],
	  [xVertice,  yVertice],
	  [eixo2,  0]

	]);

	var options = {
	  title: 'Equação do 2º Grau',
	  curveType: 'function',
	  legend: { position: 'bottom'}	             
	  //, vAxis: {scaleType: 'log' }
	  //, vAxis: {maxValue: 10, minValue: -10, format: '0' },
	  //hAxis: {maxValue: 10, minValue: -10, format: '0' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

	chart.draw(data, options);
  }