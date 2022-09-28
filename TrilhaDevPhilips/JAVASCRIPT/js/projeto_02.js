
let IDs_02;
let contentAgenda;
let campoPesquisa;
let modalSwitch;

class objContato {
    constructor(nome,telefone,empresa,email,id){
        
        this.id = (id == null || id == "") ? this.id = (IDs_02.length > 0 ? Math.max(...IDs_02)+1 : 1) : id.replace(/a_/g,'');
        this.id = 'a_'+this.id;
        this.nome = nome;
        this.telefone = telefone;
        this.empresa = empresa;
        this.email = email;
        
        F02_addIdAgenda(this.id);
        
    }
}


function F02_proj(){
    limparConteudo();

    IDs_02 = (localStorage.getItem("ID") !== null) ? localStorage.getItem("ID").replace(/a_/g,'').split(',') : [];

	titulo.innerHTML    =  "<h1>Agenda telefônica</h1>";
    conteudo.innerHTML += ``;
    conteudo.innerHTML += `
    <label for="ctrl-modal" class='btn-proj-gray' onClick='F02_LimparNovoRegistro()'>+ Novo</label>
    <label class='btn-proj-gray' onClick='F02_GeraDadosAleatórios(1)'>Gerar contato Aleatório</label>
    <label class='btn-proj-gray' onClick='F02_LimpaAgendaCompleta()'>Apagar tudo</label>
    <input type='text' placeholder='Pesquisar' id='campoPesquisa'/>
    <table class='table table-sm table-striped' id='tbAgenda'>
        <thead>
            <tr>
                <th class='col'>Nome</th>
                <th class='col'>Telefone</th>
                <th class='col'>Organização</th>
                <th class='col' colspan='3'>E-mail</th>
            </tr>
        </thead>
        <tbody id='contentAgenda'>
        </tbody>
    </table>
    `;
    campoPesquisa = document.getElementById('campoPesquisa');
    campoPesquisa.addEventListener('keyup',F02_pesquisa);

    //F02_pesquisa(campoPesquisa.value);
    F02_geraPopup();

    contentAgenda = document.getElementById("contentAgenda");
    modalSwitch = document.getElementById("ctrl-modal");
    modalSwitch.checked = false;
    F02_RecuperaDadosSalvos();
}


function F02_addIdAgenda(id){
    id = id.replace(/a_/g,"");
    if(IDs_02.indexOf(id)<0){
        IDs_02.push(id.replace(/a_/g,""));
        localStorage.setItem("ID",IDs_02);
    }
}


function F02_CriaNovaEntrada(objContato){
    let linha = `
    <tr>
    <td class=''>${objContato.nome}</td>
    <td class=''>${objContato.telefone}</td>
    <td class=''>${objContato.empresa}</td>
    <td class=''>${objContato.email}</td>
    <td class=''>
        <span class='edit' onClick='F02_editarContato("${objContato.id}")'> </span>
        <span class='del' onClick='F02_apagarContato("${objContato.id}")'> </span>
    </td>
    
    </tr>
    `;
    contentAgenda.innerHTML += linha;
}

function F02_LimparNovoRegistro(){  
    
    document.forms["formContato"].reset();
}

function F02_apagarContato(id){
    let confApaga = confirm('Deseja realmente apagar?');
    if(confApaga == true) {

        IDs_02 = deletaItemArray(id.replace(/a_/g,''),IDs_02);
        localStorage.removeItem(id);
        localStorage.setItem("ID",IDs_02);
        F02_proj();

    }
}

function F02_editarContato(id){
    
    let valorRecuperado = localStorage.getItem(id);
    let valorItem = JSON.parse(valorRecuperado);

        
    document.forms["formContato"].nom.value   = valorItem.nome;
    document.forms["formContato"].tel.value   = valorItem.telefone ;
    document.forms["formContato"].organ.value = valorItem.empresa ;
    document.forms["formContato"].mail.value  = valorItem.email ;
    document.forms["formContato"].numId.value = valorItem.id ;
    //console.log(valorItem.id);
    
    modalSwitch.checked = true;
    
}

function F02_PegaValoresForm(){
    let registro = new objContato(
        document.forms["formContato"].nom.value,
        document.forms["formContato"].tel.value,
        document.forms["formContato"].organ.value,
        document.forms["formContato"].mail.value,
        document.forms["formContato"].numId.value
    );
    F02_CriaNovaEntrada(registro);
    F02_SalvaLocalStorage(registro);
    F02_proj();
}

function F02_geraPopup(){
    document.getElementById("conteudo-popup").innerHTML =  `
    <label for="ctrl-modal" class="btn-proj-gray fright">x</label>
    <h1 class="destaque center">Novo Contato</h1>
    <form id="formContato">
        <span class="linha"><label for="nom">Nome: </label><input type="text" name="nom" id="nom"></span>
        <span class="linha"><label for="tel">Telefone: </label><input type="text" name="tel" id="tel"></span>
        <span class="linha"><label for="organ">Organização: </label><input type="text" name="organ" id="organ"></span>
        <span class="linha"><label for="mail">E-mail: </label><input type="email" name="mail" id="mail"></span>
        <input type="hidden" name="numId" id="numId"></span>

        <label for="" class="btn-proj-gray btcenter" onClick='F02_PegaValoresForm()'>Cadastrar</label>
    </form>`;
}


function F02_GeraDadosAleatórios(qtd){

    for(let x = 1; x<= qtd; x++){        

        let nome = nomesAleatorios[aleatorio(nomesAleatorios.length)];
        let registro = new objContato(
            `${nome} ${sobrenomesAleatorios[aleatorio(sobrenomesAleatorios.length)]}`,
            `0${dddsBrasil[aleatorio(dddsBrasil.length)]} ${indiceNumeros[aleatorio(indiceNumeros.length)]}${aleatorio(9999999)}`,
            `${nomeEmpresa[aleatorio(nomeEmpresa.length)]} ${razaoSocialEmpresa[aleatorio(razaoSocialEmpresa.length)]}`,
            `${nome.normalize('NFD').replace(/[^a-zA-Z\s]/g, "").split(" ")[0]}_${aleatorio(999)}${emailProvs[aleatorio(emailProvs.length)]}`
        );

        F02_CriaNovaEntrada(registro);
        F02_SalvaLocalStorage(registro);
    }
}

function F02_SalvaLocalStorage(objContato){
    localStorage.setItem(objContato.id, JSON.stringify(objContato) );
}

function F02_RecuperaDadosSalvos(){
    //for (let i = 0; i < localStorage.length; i++) {
    //    let key = localStorage.key(i);
    //    let val = localStorage.getItem(key);
    //    
    //    if(key != "ID" && key.indexOf("b_") < 0){
    //        F02_CriaNovaEntrada(JSON.parse(val));
    //    }
    //    
    //}

    for(let x of IDs_02){
        let val = localStorage.getItem('a_'+x);
        F02_CriaNovaEntrada(JSON.parse(val));
    } 

}

function F02_LimpaAgendaCompleta(){
    let confApaga = confirm('Deseja realmente apagar toda a base da agenda?');
    if(confApaga == true) {
        for(let x of IDs_02){
            localStorage.removeItem('a_'+x);
        }

        IDs_02 = [];         
        localStorage.removeItem("ID");    
        F02_proj();
    }
    
}


function F02_pesquisa(){
    var tbAgenda = document.getElementById('tbAgenda');
    let linhasTabela = tbAgenda.tBodies[0].rows;
    
    for(let cont = 0; cont < linhasTabela.length;cont++){
        
        if(linhasTabela[cont].textContent.toLowerCase().indexOf(campoPesquisa.value.toLowerCase()) !== -1){
            linhasTabela[cont].style.display = '';
        }
        else{
            linhasTabela[cont].style.display = 'none';
        }

    }

}
/*
## Projeto 02 - Agenda Telefônica

Crie uma simples agenda telefônica, com nome, telefone, email e talvez alguns dados a mais.

Características do sistema:

- O usuário acessa e seus dados ficam salvos

- Deve ser possível realizar buscas por qualquer campo
*/

