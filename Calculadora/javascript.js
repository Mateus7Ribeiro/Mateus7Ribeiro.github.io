
let result;
let display = document.getElementById("displayCalc");
let displayHistorico = document.getElementById("historico");
let displayMemory = document.getElementById("calcMemory");
var memory = 0;



function totalizarCalculo(temp, elementId) {
	let simbHistAntes = '';
	let simbHistDepois = '';
	temp = temp.replaceAll('x','*');
	temp = temp.replaceAll('÷','/');
	temp = temp.replaceAll('%','/100');
	
	
	if (elementId == '√'){		
		temp = Math.sqrt(eval(temp.replaceAll('√','')));
		simbHistAntes  = '√(';
		simbHistDepois = ')';
	}
	if (elementId == 'M-' || elementId == 'M+'){
		simbHistAntes  = elementId+" ("+memory+")  →  ";
		display.innerHTML = '';
	}

	if (isNaN(eval(temp))) {	result = '';	}
	
	else {
		if (eval(temp)%1 != 0) {
			
			result = (Math.round(eval(temp)*100)/100).toFixed(3);
			}
		else {
			result = eval(temp).toFixed(0);
		}
		
		addHistorico(display.innerHTML,result,simbHistAntes,simbHistDepois);
	}
	return parseFloat(result);
}

function proibeElementoConsecutivo(temp){
	let carateresNaoConsecutivos = ['.','+','-','x','÷','='];
	if (carateresNaoConsecutivos.includes(temp) && display.innerHTML[display.innerHTML.length-1] == temp){
		return '';
	}
	else {
		return temp;
	}
	
}

document.getElementById("botoes").addEventListener('click', (e) =>
  {
    
    let elementId = e.target.innerHTML;
	switch(elementId) {
		case '√': display.innerHTML = totalizarCalculo(display.innerHTML, elementId); break;
		case '=': display.innerHTML = totalizarCalculo(display.innerHTML, elementId); break;
		case 'CE':
			 if (display.innerHTML.length > 0){
			 display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-1);
			 }
			 break;
		 case 'ON/C':
			 memory = 0;
			 display.innerHTML = '';
			 displayHistorico.innerHTML = '<h2>Histórico</h2><hr>';
			 break;
		case 'MC':
			memory = 0;
			display.innerHTML = '';
			document.getElementById("memButton").innerHTML = 'MR';
			break;
		case 'MR': 
			display.innerHTML = memory;
			document.getElementById("memButton").innerHTML = 'MC';
			break;
		case 'M-': 
			memory -= totalizarCalculo(display.innerHTML, elementId);
			document.getElementById("memButton").innerHTML = 'MR';
			display.innerHTML = '';
			break;
		case 'M+': 
			memory += totalizarCalculo(display.innerHTML, elementId);
			document.getElementById("memButton").innerHTML = 'MR';
			display.innerHTML = '';
			break;
		default: 
			display.innerHTML += proibeElementoConsecutivo(elementId);
			
	}

  }
);



document.onkeydown  = function(e) {
     
	 let tamanhoResult = display.innerHTML.length;
	 //alert(e.keyCode);
	 //alert(e.key);
	 if((e.keyCode == 37 || e.keyCode == 8 ) && tamanhoResult>0){
		 display.innerHTML = display.innerHTML.slice(0,tamanhoResult-1);
		 
	 }
	 if(e.keyCode >= 96 && e.keyCode <= 105 ){
	
		display.innerHTML += e.key;
	 }
	 switch(e.keyCode ) {
		 case 111 : display.innerHTML += '÷'; break;
		 case 106 : display.innerHTML += 'x'; break;
		 case 109 : display.innerHTML += e.key; break;
		 case 107 : display.innerHTML += e.key; break;
		 case 194 : display.innerHTML += e.key; break;
		 case 110 : display.innerHTML += '.'; break;
		 case 13  : display.innerHTML = totalizarCalculo(display.innerHTML); break;
	 }
	 

}; 

function addHistorico(hist,resultado,simbHistAntes,simbHistDepois){

	displayHistorico.innerHTML += "<p>"+simbHistAntes+" "+hist+" "+simbHistDepois+" = "+ resultado+"</p>";
}