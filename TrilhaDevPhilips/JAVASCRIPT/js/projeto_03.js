
let IDs_03;
let contentControleEmprestimo_03;
let campoPesquisa_03;
let modalSwitch_03;
let btDevolucao;
class objEmprestimo {
    constructor(nome,telefone,itemEmprestado,dataEmprestimo,dataCombinada,id){
        

        this.id = (id == null || id == "") ? this.id = (IDs_03.length > 0 ? Math.max(...IDs_03)+1 : 1) : id.replace(/b_/g,'');
        this.id = 'b_'+this.id;
        this.nome = nome;
        this.telefone = telefone;
        this.itemEmprestado = itemEmprestado;
        this.dataEmprestimo = new Date(new Date(dataEmprestimo).setHours(24));
        this.dataCombinada =  new Date(new Date(dataCombinada).setHours(24)); 
        //this.dataDevolucao = dataDevolucao; //criar função devolver

        this.marcarComoDevolvido = function(){
            this.dataDevolucao = new Date();
            alert('Item devolvido com sucesso!');
        }

        F03_addIdControleEmprestimo(this.id);
        
    }
}

function F03_proj(){
    limparConteudo();
    IDs_03 = (localStorage.getItem("ID-03") !== null) ? localStorage.getItem("ID-03").replace(/b_/g,'').split(',') : [];
    
	titulo.innerHTML = "<h1>Controle de Empréstimos</h1>";

    conteudo.innerHTML += ``;
    conteudo.innerHTML += `
    <label for="ctrl-modal" class='btn-proj-gray' onClick="btDevolucao.style.display = 'none'">+ Novo</label>
    <label class='btn-proj-gray' onClick='F03_GeraDadosAleatórios(1)'>Gerar Empréstimo Aleatório</label>
    <label class='btn-proj-gray' onClick='F03_LimpaControleEmprestimoCompleta()'>Apagar tudo</label>
    <input type='text' placeholder='Pesquisar' id='campoPesquisa_03'/>
    <table class='table table-sm table-striped' id='tbControleEmprestimo'>
        <thead>
            <tr>
                <th class='col'></th>
                <th class='col'>Nome</th>
                <th class='col'>Item Emprestado</th>
                <th class='col'>Telefone</th>
                <th class='col'>Data Emprestimo</th>
                <th class='col'>Ações</th>
            </tr>
        </thead>
        <tbody id='contentControleEmprestimo_03'>
        </tbody>
    </table>
    Legenda: <icon class='devolvido'>Devolvido</icon> <icon class='atrasado'>Atrasado</icon> <icon class='alertadata'>Alerta</icon>
    `;
    campoPesquisa_03 = document.getElementById('campoPesquisa_03');
    campoPesquisa_03.addEventListener('keyup',F03_pesquisa);
    
    //F03_pesquisa(campoPesquisa_03.value);
    F03_geraPopup();
    
    contentControleEmprestimo_03 = document.getElementById("contentControleEmprestimo_03");
    modalSwitch_03 = document.getElementById("ctrl-modal");
    modalSwitch_03.checked = false;

    btDevolucao = document.getElementById('btDevolucao');
    
    F03_RecuperaDadosSalvos();


}


function F03_addIdControleEmprestimo(id){
    id = id.replace(/b_/g,"");
    if(IDs_03.indexOf(id)<0){
        IDs_03.push(id);
        localStorage.setItem("ID-03",IDs_03);
        
    }
}

function F03_CriaNovaEntrada(objEmprestimo){

    let hoje = new Date();
    let dataCombinada = new Date(objEmprestimo.dataCombinada);
    let dataDevolucao = new Date(objEmprestimo.dataDevolucao);

    let classe = (dataCombinada > hoje) ? '-' : 'atrasado';    
    let diasParaDevolver = parseInt((dataCombinada-hoje)/(24*3600*1000));
    
    if(diasParaDevolver < 0){        
        classe = 'atrasado';
    } else if(diasParaDevolver<=10){
        classe = 'alertadata';
    }

    
    if (objEmprestimo.dataDevolucao != undefined){
        classe = 'devolvido';
    } 

    let dataEmp = new Date(objEmprestimo.dataEmprestimo);

    let linha = `
    <tr class='${classe}' title='Faltam ${diasParaDevolver} dias para o prazo final deste empréstimo'>
    <td class=''>○<label style="display:none">${classe}</label></td>
    <td class=''>${objEmprestimo.nome}</td>
    <td class=''>${objEmprestimo.itemEmprestado}</td>
    <td class=''>${objEmprestimo.telefone}</td>    
    <td class=''>${FormataData( dataEmp )}</td>
    
    
    <td class=''>
        <span class='edit' onClick='F03_preencheFormPopup("${objEmprestimo.id}")'> </span>
        <span class='del' onClick='F03_apagarEmprestimo("${objEmprestimo.id}")'> </span>
    </td>
    
    </tr>
    `;
    contentControleEmprestimo_03.innerHTML += linha;
}

function F03_apagarEmprestimo(id){
    let confApaga = confirm('Deseja realmente apagar?');
    if(confApaga == true) {
        IDs_03 = deletaItemArray(id.replace(/b_/g,''),IDs_03);
        localStorage.removeItem(id);
        localStorage.setItem("ID-03",IDs_03);
        F03_proj();
    }
}

function F03_preencheFormPopup(id){
    
    let valorRecuperado = localStorage.getItem(id);
    let valorItem = JSON.parse(valorRecuperado);

    let dataEmp = new Date(valorItem.dataEmprestimo); 
    let dataFim = new Date(valorItem.dataCombinada); 
        
    document.forms["formEmprestimo"].nom.value   = valorItem.nome ;
    document.forms["formEmprestimo"].tel.value   = valorItem.telefone ;
    document.forms["formEmprestimo"].item.value = valorItem.itemEmprestado ;
    
    document.forms["formEmprestimo"].dataEmp.valueAsDate  =   dataEmp ; 
    document.forms["formEmprestimo"].dataFim.valueAsDate  =   dataFim ;
    document.forms["formEmprestimo"].numId.value = valorItem.id ;
    console.log(valorItem.id);
    
    modalSwitch_03.checked = true;
    btDevolucao.style.display = 'block';
}

function F03_salvaValoresForm(acao){

    let registro = new objEmprestimo(
        document.forms["formEmprestimo"].nom.value,
        document.forms["formEmprestimo"].tel.value,
        document.forms["formEmprestimo"].item.value,
        document.forms["formEmprestimo"].dataEmp.value,
        document.forms["formEmprestimo"].dataFim.value,
        document.forms["formEmprestimo"].numId.value
    );
    //(acao == 'devolucao') ? registro.marcarComoDevolvido  : '' ;
    if (acao == 'devolucao' && registro.nome != "" && registro.itemEmprestado != "") {
     registro.marcarComoDevolvido();
    }

    F03_CriaNovaEntrada(registro);
    F03_SalvaLocalStorage(registro);
    F03_proj();
}

function F03_geraPopup(){
    document.getElementById("conteudo-popup").innerHTML =  `
    <label for="ctrl-modal" class="btn-proj-gray fright">x</label>
    <h1 class="destaque center">Empréstimo</h1>
    <form id="formEmprestimo">
        <span class="linha"><label for="nom">Nome: </label><input type="text" name="nom" id="nom"></span>
        <span class="linha"><label for="tel">Telefone: </label><input type="text" name="tel" id="tel"></span>
        <span class="linha"><label for="item">Item Emprestado: </label><input type="text" name="item" id="item"></span>
        <span class="linha"><label for="dataEmp">Data Empréstimo: </label><input type="date" name="dataEmp" id="dataEmp"></span>
        <span class="linha"><label for="dataFim">Data Final: </label><input type="date" name="dataFim" id="dataFim"></span>
        <input type="hidden" name="numId" id="numId"></span>

        <label for="" class="btn-proj-gray btcenter" id="btDevolucao" onClick='F03_salvaValoresForm("devolucao")'>Marcar como devolvido</label>
        <label for="" class="btn-proj-gray btcenter" onClick='F03_salvaValoresForm()'>Cadastrar</label>
    </form>`;
}

function F03_marcarDevolvido(){
    
}

function F03_GeraDadosAleatórios(qtd){

    
    for(let x = 1; x<= qtd; x++){        
        
        let dataEmprestimo = new Date(new Date().setDate(-aleatorio(40)+30));        
        let dataCombinada = new Date(new Date(dataEmprestimo.valueOf()).setDate(aleatorio(80)+30));

        
        let nome = nomesAleatorios[aleatorio(nomesAleatorios.length)];

        let registro = new objEmprestimo(
            `${nome} ${sobrenomesAleatorios[aleatorio(sobrenomesAleatorios.length)]}`,
            `0${dddsBrasil[aleatorio(dddsBrasil.length)]} ${indiceNumeros[aleatorio(indiceNumeros.length)]}${aleatorio(9999999)}`,
            `${objetosAleatorios[aleatorio(objetosAleatorios.length)]}`,
            dataEmprestimo,
            dataCombinada,
            ''
        );

        F03_CriaNovaEntrada(registro);
        F03_SalvaLocalStorage(registro);
    }
}

function F03_SalvaLocalStorage(objEmprestimo){
    localStorage.setItem(objEmprestimo.id, JSON.stringify(objEmprestimo) );
}

function F03_RecuperaDadosSalvos(){

    for(let x of IDs_03){
        let val = localStorage.getItem('b_'+x);
        F03_CriaNovaEntrada(JSON.parse(val));
    } 
}

function F03_LimpaControleEmprestimoCompleta(){
    let confApaga = confirm('Deseja realmente apagar toda a base da ControleEmprestimo?');
    if(confApaga == true) {
        for(let x of IDs_03){
          
            localStorage.removeItem('b_'+x);
        }

        IDs_03 = [];
        localStorage.removeItem("ID-03");
        F03_proj();
    }
    
}

function F03_pesquisa(){
    var tbControleEmprestimo = document.getElementById('tbControleEmprestimo');
    let linhasTabela = tbControleEmprestimo.tBodies[0].rows;
    
    for(let cont = 0; cont < linhasTabela.length;cont++){
        
        if(linhasTabela[cont].textContent.toLowerCase().indexOf(campoPesquisa_03.value.toLowerCase()) !== -1){
            linhasTabela[cont].style.display = '';
        }
        else{
            linhasTabela[cont].style.display = 'none';
        }

    }
}

function FormataData(date){    

    return date.toLocaleString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric"

    });

    
}