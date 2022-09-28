
let IDs_04;
let contentControleTarefas_04;
let campoPesquisa_04;
let modalSwitch_04;
let btDevolucao_04;
const statusTarefas = ["Pendente","Finalizada"];

class objToDoList {
    constructor(nome,status,DescricaoTarefa,dataInicio,dataFinaliza,id){
        

        this.id = (id == null || id == "") ? this.id = (IDs_04.length > 0 ? Math.max(...IDs_04)+1 : 1) : id.replace(/c_/g,'');
        this.id = 'c_'+this.id;
        this.nome = nome;
        this.status = status;
        this.DescricaoTarefa = DescricaoTarefa;
        this.dataInicio = new Date(new Date(dataInicio).setHours(24));
        this.dataFinaliza =  new Date(new Date(dataFinaliza).setHours(24));         

        this.marcarComoRealizada = function(){
            this.status = statusTarefas[1];
            alert('Mais uma tarefa realizada! Parabéns');
        }

        F04_addIdControleTarefas(this.id);
        
    }
}

function F04_proj(){
    limparConteudo();
    IDs_04 = (localStorage.getItem("ID-04") !== null) ? localStorage.getItem("ID-04").replace(/c_/g,'').split(',') : [];
    
	titulo.innerHTML = "<h1>Lista de Tarefas (To Do List)</h1>";

    conteudo.innerHTML += ``;
    conteudo.innerHTML += `
    <label for="ctrl-modal" class='btn-proj-gray' onClick="F04_LimparNovoRegistro()">+ Novo</label>
    <label class='btn-proj-gray' onClick='F04_GeraDadosAleatórios(1)'>Gerar Tarefa Aleatória</label>
    <label class='btn-proj-gray' onClick='F04_LimpaControleTarefasCompleta()'>Apagar tudo</label>
    <input type='text' placeholder='Pesquisar' id='campoPesquisa_04'/>
    <table class='' id='tbControleTarefas'>
        <thead>
            <tr>
                <th class='col'>Tarefa | Ações</th>
            </tr>
        </thead>
        <tbody id='contentControleTarefas_04'>
        </tbody>
    </table>
    <br>
    *Reordene as tarefas arrastando os cards.
    <!--<icon class='realizado'>Realizado</icon> -->

    `;
    campoPesquisa_04 = document.getElementById('campoPesquisa_04');
    campoPesquisa_04.addEventListener('keyup',F04_pesquisa);
    
    //F04_pesquisa(campoPesquisa_04.value);
    F04_geraPopup();
    
    contentControleTarefas_04 = document.getElementById("contentControleTarefas_04");
    modalSwitch_04 = document.getElementById("ctrl-modal");
    modalSwitch_04.checked = false;

    btDevolucao_04 = document.getElementById('btDevolucao_04');
    
    F04_RecuperaDadosSalvos();
    dragAndDrop();

}


function F04_addIdControleTarefas(id){
    id = id.replace(/c_/g,"");
    if(IDs_04.indexOf(id)<0){
        IDs_04.push(id);
        localStorage.setItem("ID-04",IDs_04);
        
    }
}

function F04_salvarOrdemTasks(){
    IDs_04 = [];
    for(let x of document.getElementsByClassName("ordemTasks")){
        let item = x.innerHTML.replace('c_','');
        IDs_04.push(item);        
    }
    localStorage.setItem("ID-04",IDs_04);
    
}

function F04_LimparNovoRegistro(){    
    btDevolucao_04.style.display = 'none';
    document.forms["formTasks"].reset();

    document.forms["formTasks"].dataIni.valueAsDate  =   new Date() ; 
    document.forms["formTasks"].dataFim.valueAsDate  =   new Date() ;
}

function F04_CriaNovaEntrada(objToDoList){

    let hoje = new Date();
    let dataFinaliza = new Date(objToDoList.dataFinaliza);

    let classe = (dataFinaliza > hoje) ? '-' : 'atrasado';    
    let diasParaFinalizar = parseInt((dataFinaliza-hoje)/(24*3600*1000));
    
    if(diasParaFinalizar < 0){        
        classe = 'atrasado';
    } else if(diasParaFinalizar<=10){
        classe = 'alertadata';
    }
    else {
        classe = 'ok';
    }  
    if (objToDoList.status == statusTarefas[1]){
        classe = 'finalizado';
    } 
    //objToDoList.status
    //let dataIni = new Date(objToDoList.dataInicio);

    let linha = `
    <tr class="task" draggable="true"  >
    <td draggable="true" class='${classe}' title='Faltam ${diasParaFinalizar} dias para o prazo final desta tarefa'>
    <span style="display:none" class='ordemTasks'>${objToDoList.id}</span>        
        <label style="display:none">${classe}</label>
        ${objToDoList.nome} 
        <br>        
        ${objToDoList.DescricaoTarefa}  
    
    
        <span class='edit' onClick='F04_preencheFormPopup("${objToDoList.id}")'> </span>
        <span class='del' onClick='F04_apagarEmprestimo("${objToDoList.id}")'> </span>
    </td>
    
    </tr>
    `;
    contentControleTarefas_04.innerHTML += linha;
    dragAndDrop();
}

function F04_apagarEmprestimo(id){
    let confApaga = confirm('Deseja realmente apagar?');
    if(confApaga == true) {
        IDs_04 = deletaItemArray(id.replace(/c_/g,''),IDs_04);
        localStorage.removeItem(id);
        localStorage.setItem("ID-04",IDs_04);
        F04_proj();
    }
}

function F04_preencheFormPopup(id){
    
    let valorRecuperado = localStorage.getItem(id);
    let valorItem = JSON.parse(valorRecuperado);        
    
    let dataIni = new Date(valorItem.dataInicio); 
    let dataFim = new Date(valorItem.dataFinaliza); 
    
    document.forms["formTasks"].nom.value   = valorItem.nome ;
    document.getElementById("sts").value   = valorItem.status ;
    document.forms["formTasks"].descr.value = valorItem.DescricaoTarefa ;
    
    document.forms["formTasks"].dataIni.valueAsDate  =   dataIni ; 
    document.forms["formTasks"].dataFim.valueAsDate  =   dataFim ;
    document.forms["formTasks"].numId.value = valorItem.id ;         

    modalSwitch_04.checked = true;
    btDevolucao_04.style.display = 'block';
}

function F04_salvaValoresForm(acao){

    let registro = new objToDoList(
        document.forms["formTasks"].nom.value,
        document.getElementById("sts").value,
        document.forms["formTasks"].descr.value,
        document.forms["formTasks"].dataIni.value,
        document.forms["formTasks"].dataFim.value,
        document.forms["formTasks"].numId.value
    );
    
    if (acao == 'realizado' && registro.nome != "" && registro.DescricaoTarefa != "") {
        
        confirm('Deseja marcar tarefa como realizada?') ? registro.marcarComoRealizada() : none;

    }
    else {
        F04_CriaNovaEntrada(registro);
    }
    F04_SalvaLocalStorage(registro);
    F04_proj();
}

function F04_geraPopup(){
    document.getElementById("conteudo-popup").innerHTML =  `
    <label for="ctrl-modal" class="btn-proj-gray fright">x</label>
    <h1 class="destaque center">Empréstimo</h1>
    <form id="formTasks">
        <span class="linha"><label for="nom">Atividade: </label><input type="text" name="nom" id="nom"></span>
        <span class="linha"><label for="sts">Status: </label>
            <select type="text" name="sts" id="sts">
            <option value="Pendente">Pendente</option>
            <option value="Finalizada">Finalizada</option>
            </select>
        </span>
        <span class="linha"><label for="descr">Descrição Atividade: </label><input type="text" name="descr" id="descr"></span>
        <span class="linha"><label for="dataIni">Data Inicial: </label><input type="date" name="dataIni" id="dataIni"></span>
        <span class="linha"><label for="dataFim">Data Final: </label><input type="date" name="dataFim" id="dataFim"></span>
        <input type="hidden" name="numId" id="numId">
        <span class="botoes">
        <button for="" class="btn-proj-gray btcenter" id="btDevolucao_04" onClick='F04_salvaValoresForm("realizado")'>Marcar como Realizada</button>
        <button for="" class="btn-proj-gray btcenter" onClick='F04_salvaValoresForm()'>Salvar</button>
        </span>
    </form>`;
}


function F04_GeraDadosAleatórios(qtd){
    
    for(let x = 1; x<= qtd; x++){        
        
        let dataInicio = new Date(new Date().setDate(-aleatorio(40)+30));        
        let dataFinaliza = new Date(new Date(dataInicio.valueOf()).setDate(aleatorio(80)+30));
     
        let numAleatorioAtividade = aleatorio(atividadesAleatorias.length);
        let registro = new objToDoList(
            `${atividadesAleatorias[numAleatorioAtividade]}`,
            statusTarefas[0],
            `${descricaoAtividades[numAleatorioAtividade]}`,
            dataInicio,
            dataFinaliza,
            ''
        );

        F04_CriaNovaEntrada(registro);
        F04_SalvaLocalStorage(registro);
    }
}

function F04_SalvaLocalStorage(objToDoList){
    localStorage.setItem(objToDoList.id, JSON.stringify(objToDoList) );
}

function F04_RecuperaDadosSalvos(){

    for(let x of IDs_04){
        let val = localStorage.getItem('c_'+x);
        F04_CriaNovaEntrada(JSON.parse(val));
    } 
}

function F04_LimpaControleTarefasCompleta(){
    let confApaga = confirm('Deseja realmente apagar toda a base da ControleTarefas?');
    if(confApaga == true) {
        for(let x of IDs_04){
          
            localStorage.removeItem('c_'+x);
        }

        IDs_04 = [];
        localStorage.removeItem("ID-04");
        F04_proj();
    }
    
}

function F04_pesquisa(){
    var tbControleTarefas = document.getElementById('tbControleTarefas');
    let linhasTabela = tbControleTarefas.tBodies[0].rows;
    
    for(let cont = 0; cont < linhasTabela.length;cont++){
        
        if(linhasTabela[cont].textContent.toLowerCase().indexOf(campoPesquisa_04.value.toLowerCase()) !== -1){
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


/* Essa parte foi adaptada de um tutorial Drag and Drop da internet */
var from;

const dragAndDrop = () => {
F04_salvarOrdemTasks();
const cells = document.querySelectorAll('.task')
const dragStart = function (event) {
    from = event.target;
    setTimeout(() => {
        this.classList.add('hide');
    }, 0)
};
const dragEnd = function () {
    this.classList.remove('hide');
    
};

const dragOver = function (evt) {
    evt.preventDefault();
};

const dragDrop = function (event) {
    event.stopImmediatePropagation(); 
    let to = event.target;
    if (to.nodeName == "td")
        to = to.parentNode;
    if (from == to) 
        return false;
    let CopyTo = to.cloneNode(true);
    let CopyFrom = from.cloneNode(true);
    to.parentNode.replaceChild(CopyFrom, to);
    from.parentNode.replaceChild(CopyTo, from);
    dragAndDrop();
};

cells.forEach((cell) => {
    cell.addEventListener('dragstart', dragStart);
    cell.addEventListener('dragend', dragEnd);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', dragDrop);
});
}

/* Essa parte foi adaptada de um tutorial da internet - FIM */