let qtdBotoes, premiado ;
let tentativasRestantes;
let ganhou;
function botoesDaSorte(){
    
    qtdBotoes = 100;
    ganhou = false;
    premiado = Math.floor(Math.random()*qtdBotoes);
    

    limparConteudo();
    mostraMenuCal();
    tentativasRestantes = 0;
    alteraTentativas(10);
    
    resultado.innerHTML = "";
    conteudo.innerHTML = "";

    let historico = document.createElement("div");
    historico.id = 'historico';
    historico.innerHTML = "<h2>Histórico</h2>";
    resultado.appendChild(historico);

    
    conteudo.innerHTML += "<div class='conteudoLinha'></div>";

    let contaLinha = 0;
    for(let temp = 1; temp <= qtdBotoes; temp++){       

       let divBotao = document.createElement("div");
       divBotao.setAttribute("class","conteudoCel");
       divBotao.textContent = temp;
       conteudo.childNodes[contaLinha].appendChild(divBotao);

       if(temp%10 == 0 && temp<qtdBotoes){
        let conteudoLinha = document.createElement("div");
        conteudoLinha.setAttribute("class","conteudoLinha l_"+contaLinha);
        conteudo.appendChild(conteudoLinha);
        
        contaLinha++;
        }       
    }

    let botoesDaSorte = document.getElementsByClassName("conteudoCel");
    let cont = 0;

    
Array.from(botoesDaSorte).forEach(() => {                           
        botoesDaSorte[cont].addEventListener('click', (e) =>{
            
            let valorClicado = e.target.innerHTML; 
            if(tentativasRestantes > 0){
                alteraTentativas(-1);

                if(parseInt(valorClicado)==premiado) {
                    alert("Parabéns você ganhou um SUPER PRÊMIO!!");
                    tentativasRestantes =0;
                    ganhou = true;
                    ativaInativaPainel("conteudoCel inativo");
                }
                let linha = document.createElement("span");
                linha.innerHTML = valorClicado+" - "+testaTentativasDica(valorClicado)+"<br>" ;
                historico.appendChild(linha);   
            }
            else {

                let mensagemInativo = ganhou ? "Você já ganhou! Deseja jogar novamente?" : "Poxa.. Seus créditos acabaram. Tente novamente depois! :)" ;
                alert(mensagemInativo);
                ativaInativaPainel("conteudoCel inativo");
            }        
    });
    cont++;
});  
};

function mostraMenuCal(){
    
    
    titulo.innerHTML = "<h2>100 Botões da sorte</h2>";

    
    titulo.innerHTML += '<button class="botaoMenuCalendar" onclick="alteraTentativas(1);"> + Tentativas</button>';
    titulo.innerHTML += ' <button class="botaoMenuCalendar" onclick="botaoDesistir();">Desistir</button>';
    titulo.innerHTML += ' <button class="botaoMenuCalendar" onclick="botoesDaSorte();">Novo Jogo</button>';
    titulo.innerHTML += '<span id="resposta" class="mensagem Calendar"></span>';
   
    
}

function alteraTentativas(alteracao){
    let novoResultado = tentativasRestantes+parseInt(alteracao);
    if(novoResultado>0 || novoResultado<=qtdBotoes){
        tentativasRestantes = novoResultado;
        document.getElementById("resposta").innerHTML = 'Restam <span id="tent">'+tentativasRestantes+'</span> tentativas' ;
        ativaInativaPainel("conteudoCel"); 
    }

    if(tentativasRestantes == 0){
        ativaInativaPainel("conteudoCel inativo");        
    }


}

function botaoDesistir(){
    tentativasRestantes = 0;
    document.getElementById("resposta").innerHTML = "Não conseguiu né? O número sorteado era "+ premiado + ".";

}

function ativaInativaPainel(classeNova){
    let cont = 0;        
    let botoesDaSorte = document.getElementsByClassName("conteudoCel"); 

    Array.from(botoesDaSorte).forEach(() => {
        botoesDaSorte[cont].setAttribute("class",classeNova);            
        cont++;
    });

}

function testaTentativasDica(numeroEscolhido){
    let teste = Math.abs(numeroEscolhido-premiado);
    if (numeroEscolhido==premiado){
        return "Acertou!";
    }
    if (teste < qtdBotoes*0.10){        
        return "Quente!";    }
    if (teste < qtdBotoes*0.30){
        return "Tá morno!";  
    }
    else {
        return "Está frio!"; 
    }

}