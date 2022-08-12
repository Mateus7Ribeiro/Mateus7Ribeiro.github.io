let camposForm, botoesForm, formularioExercicio, valoresSexoForm, valoresUFForm, valoresPreferencias;
function desafioFormulario(){
    limparConteudo();
    
    camposForm = {
        label: ['Nome','Endereço','UF','Email','CPF','Sexo','Preferências'],
        campo: ['Nome','Endereco','UF','Email','CPF','Sexo','Preferencias'],
        tipoElemento: ['input','input','select','input','input','input','select'],
        tipoForm: ['text','text','','email','text','radio','']
    };
    botoesForm = {
        label: ['Cancelar','Confirmar'],
        campo: ['Cancelar','Confirmar'],
        tipoElemento: ['button','button'],
        tipoForm: ['cancelaFunc();','confirmaFunc();']
    };

    valoresSexoForm = ['Masculino','Feminino','Outros'];
    valoresUFForm = {
        UF: [ "-", "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
        descricao: [ "Selecione","Acre" , "Alagoas" , "Amapá" , "Amazonas" , "Bahia" , "Ceará" , "Distrito Federal" , "Espírito Santo" , "Goiás" , "Maranhão" , "Mato Grosso" , "Mato Grosso do Sul" , "Minas Gerais" , "Pará" , "Paraíba" , "Paraná" , "Pernambuco" , "Piauí" , "Rio de Janeiro" , "Rio Grande do Norte" , "Rio Grande do Sul" , "Rondônia" , "Roraima" , "Santa Catarina" , "São Paulo" , "Sergipe" , "Tocantins" ] 
    };
    valoresPreferencias = ["Selecione",'Filme', 'Música', 'Teatro', 'Outros'];

    
    titulo.innerHTML += "<h1>DESAFIO Formulário</h1>";
    formularioExercicio = document.createElement("form");
    formularioExercicio.id = 'formulario';
    //formularioExercicio.setAttribute("method","GET");
    formularioExercicio.setAttribute("onsubmit","return false;");
 

    for(let cont of range(camposForm.campo.length)){
        if(camposForm.campo[cont] == 'Sexo'){
            mostraSexoButton();
        }
        else {

            let itemFormulario = document.createElement(camposForm.tipoElemento[cont]);
            itemFormulario.setAttribute("type",camposForm.tipoForm[cont]);
            itemFormulario.setAttribute("name",camposForm.campo[cont]);
            itemFormulario.id = camposForm.campo[cont];
    

            let labelItemFormulario = document.createElement("label");
            labelItemFormulario.innerHTML = camposForm.label[cont]+": ";
            labelItemFormulario.setAttribute("for",camposForm.campo[cont]);
            
            formularioExercicio.appendChild(labelItemFormulario);
            
        formularioExercicio.appendChild(itemFormulario);
        }
    }
    conteudo.appendChild(formularioExercicio);
    mostraPreferencias();
    mostraUnidadeFederativa();
    mostraBotoes();

}


function mostraSexoButton(){
    let divSex = document.createElement("div");
    divSex.id = 'divSex';
    for(let sexo of valoresSexoForm){
        let item = document.createElement("input");
        item.setAttribute("type","radio");
        item.setAttribute("name","sexo");
        item.id = sexo;
        
        let labelItemFormulario = document.createElement("label");
        labelItemFormulario.innerHTML = " "+sexo+" ";
        labelItemFormulario.setAttribute("for",sexo);
        
        divSex.appendChild(item);
        divSex.appendChild(labelItemFormulario);
        formularioExercicio.appendChild(divSex);

    }
}


function mostraPreferencias(){
    let form = document.getElementById('Preferencias');
    for(let Preferencia of valoresPreferencias){
        
        let item = document.createElement("option");
        item.setAttribute("value",Preferencia);         
        item.innerHTML = Preferencia;
        
        form.appendChild(item);           
        
    }
}

function mostraUnidadeFederativa(){
    let form = document.getElementById('UF');

    for(let x of range(valoresUFForm.UF.length)){                
        let item = document.createElement("option");
        item.setAttribute("value",valoresUFForm.UF[x]);         
        item.innerHTML = valoresUFForm.descricao[x];
        
        form.appendChild(item);           
        
    }
}

function mostraBotoes(){
    for(let cont of range(botoesForm.campo.length)){
        let btnFormulario = document.createElement(botoesForm.tipoElemento[cont]);
        btnFormulario.id = botoesForm.campo[cont];            
        btnFormulario.innerHTML = botoesForm.label[cont];            
        btnFormulario.setAttribute("onclick", botoesForm.tipoForm[cont]);

        formularioExercicio.appendChild(btnFormulario)

    }
}
function cancelaFunc(){

    if (confirm("Deseja limpar todos os campos preenchidos?")){
        document.forms["formulario"].reset();
        resultado.innerHTML = '';
    }


}
function confirmaFunc(){
    resultado.innerHTML = '<h2>Você digitou:</h2>';
    for(let cont of range(camposForm.campo.length)){
        resultado.innerHTML += camposForm.campo[cont]+": ";       

        if(camposForm.campo[cont] == 'Sexo'){
            let itens = document.getElementsByName('sexo');
            
            for(let item of itens){
                if(item.checked){
                    resultado.innerHTML += item.id;
                }
            }
        }

        else if(camposForm.campo[cont] == 'Preferencias'){
            let pref = document.getElementById('Preferencias');            
            resultado.innerHTML += pref.options[pref.selectedIndex].value;            

        }

       else if(camposForm.campo[cont] == 'UF'){
            let pref = document.getElementById('UF');            
            resultado.innerHTML += pref.options[pref.selectedIndex].value+" - "+pref.options[pref.selectedIndex].innerHTML;            

        }
        else {
            let campoPreenchido = document.forms["formulario"][camposForm.campo[cont]].value;
            if(campoPreenchido){    
                resultado.innerHTML += document.forms["formulario"][camposForm.campo[cont]].value;
            }
            else{
                alert(""+camposForm.label[cont]+" é um campo obrigatório");
                resultado.innerHTML = '';
                break;
            }
        }
        resultado.innerHTML += "<br>";

    }

}
