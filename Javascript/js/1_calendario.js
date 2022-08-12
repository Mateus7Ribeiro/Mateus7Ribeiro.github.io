
let mesVisualizado, anoVisualizado;
let divCalendario;
function calendario(){    
    
    if(mesVisualizado == null){
        mesVisualizado = new Date().getMonth()+1;
    }
    if(anoVisualizado == null){
        anoVisualizado = new Date().getFullYear();
    }
    divCalendario = document.createElement("div");
    divCalendario.setAttribute("id","divCalendario");

    desenhaCalendario(anoVisualizado,mesVisualizado);
    
}

function mostraMenu(){
    
        //alert('Calendario carregou na funcao!');
        titulo.innerHTML = "<h2>Calendário</h2>";
        if (mesVisualizado>12){
            mesVisualizado = 1;
            anoVisualizado++;
        }
        if (mesVisualizado<1){
            mesVisualizado = 12;
            anoVisualizado--;
        }
        
        let controlesCalendario = document.createElement("div");
        controlesCalendario.id = "controlesCalendario";
        
        
        //controlesCalendario.innerHTML += "<div id='controlesCalendario'>";
        controlesCalendario.innerHTML += '<button class="botaoMenuCalendar" onclick="mesVisualizado--;desenhaCalendario('+(anoVisualizado)+','+(mesVisualizado-1)+');">< Voltar</button>';
        controlesCalendario.innerHTML += '<span class="mensagem Calendar">'+meses[mesVisualizado-1]+" - "+(anoVisualizado)+'</span>';
        controlesCalendario.innerHTML += '<button class="botaoMenuCalendar" onclick="mesVisualizado++;desenhaCalendario('+(anoVisualizado)+','+(mesVisualizado+1)+');">Avançar > </button>';
        //conteudo.innerHTML += "</div>";
        
        divCalendario.appendChild(controlesCalendario);
}

function desenhaCalendario(ano,mes){
    limparConteudo();
    divCalendario.innerHTML = '';
    mostraMenu();     
    
    

    let totalDiasMes = new Date(ano, mes, 0).getDate();
    let diasVaziosPrimeiraLinha = new Date(ano, mes-1, 1).getDay();
    let diasVaziosUltimaLinha = 6 - new Date(ano, mes-1, totalDiasMes).getDay();


    let camposCalendario = Array(diasVaziosPrimeiraLinha).concat([...Array(totalDiasMes+1).keys()].slice(1),Array(diasVaziosUltimaLinha));

    
    let tabelaCalendario = document.createElement("table");
    tabelaCalendario.setAttribute("id","calendario");



    divCalendario.appendChild(tabelaCalendario);
    conteudo.appendChild(divCalendario);

    let linhaTabela = document.createElement("tr");
   

    for(let dia of diasSemana){
        let cabecalhoTabela = document.createElement("th");
        cabecalhoTabela.textContent = dia;
        linhaTabela.appendChild(cabecalhoTabela);
    }

    tabelaCalendario.appendChild(linhaTabela);

    //constroi campos calendario dinamicamente

    let campo;
    let linhaAppend = 0;
    divCalendario.innerHTML += "" ; //
    for(let temp = 0; temp<camposCalendario.length;temp++){
        
        let tabelaCalendario = document.getElementsByTagName("tbody");
        
        campo = camposCalendario[temp];

        let celulaTabela = document.createElement("td");

        if(campo === undefined){
            campo = '';
            celulaTabela.setAttribute('class','desabilitado');
        };

        if((temp)%7==0 ){            
            tabelaCalendario[0].appendChild(document.createElement("tr")); //nova linha
            linhaAppend++;
        }
        

        
        
        celulaTabela.textContent = campo;

        tabelaCalendario[0].childNodes[linhaAppend].appendChild(celulaTabela);   

    }
    
    acoesBotoes(ano,mes);

}
function acoesBotoes(ano,mes){


let botoesCalendario = document.getElementsByTagName("td");
let cont = 0;

function limpaClasse(classe){
    let cont = 0;
    let objLimpar = document.getElementsByClassName(classe);
    Array.from(objLimpar).forEach(() => {
        objLimpar[cont].classList.remove(classe);
        cont++;
    });

};


Array.from(botoesCalendario).forEach(
    () => {
        
    botoesCalendario[cont].classList.remove("clicado");
   
    botoesCalendario[cont].onclick = function (e) {
        let valorClicado = e.target.innerHTML;
        if(valorClicado != ''){
            limpaClasse("clicado");
            e.target.className = 'clicado';
            resultado.setAttribute('class','resultadoPreenchido');
            //alert()

            let diaDaSemanaNumero = new Date(anoVisualizado, mesVisualizado-1, valorClicado).getDay()
            let dataFormatada = ( diasSemanaExtenso[diaDaSemanaNumero]+ " - " + numeroPorExtenso(valorClicado) + " de " + meses[mesVisualizado-1] + " de " + anoVisualizado);
            resultado.innerHTML = dataFormatada ; 
        }
       
    };
;
    cont++;
});
}

function numeroPorExtenso(valorClicado){
    if(valorClicado > 19){
        let clickDezena = Math.floor(valorClicado/10);        
        let clickUnidade = valorClicado%10;
        let uniaoE = clickUnidade>0 ? " e " : "";

        return  dezena[clickDezena]+uniaoE+unidade[clickUnidade].toLowerCase()
    }
    else {
        return unidade[(valorClicado)];
    }
    

    
}