let somaTotal;
let displaySoma = 'aaa';

function somaDeBotoes(){
    limparConteudo();
    somaTotal = 0;
    
    conteudo.innerHTML += "<h1>Soma de Botões!</h1>";
    
    let showSoma = document.createElement("div");
    showSoma.id = 'mensagem';

    showSoma.innerHTML = "<span class='botaoMenuCalendar'>Soma dos botões clicados: <span id='somaTotal'>0</span></span>";
    showSoma.innerHTML += "<span class='botaoMenuCalendar' onclick='zerarSoma();'>Zerar</span>";
    

    conteudo.appendChild(showSoma);

    //conteudo

    for(let x of range(10)){
        let criaBotao = document.createElement("span");
        criaBotao.className = 'botoesSoma';
        criaBotao.id = (x+1);
        criaBotao.innerHTML = "Botão "+(x+1);
        resultado.appendChild(criaBotao);        
    }

    let botoesSoma = document.getElementsByClassName("botoesSoma");
    let cont = 0;
    
        Array.from(botoesSoma).forEach(() => {                           
        botoesSoma[cont].addEventListener('click', (e) =>{
            somaTotal += parseInt(e.target.id);            
      
            document.getElementById("somaTotal").innerHTML = somaTotal;
            
         });
        cont++;
        }); 

}

function zerarSoma(){
    somaTotal=0;
    document.getElementById("somaTotal").innerHTML = somaTotal;
}