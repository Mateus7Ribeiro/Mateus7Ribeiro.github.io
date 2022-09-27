const SALARIO_MINIMO_VIGENTE = 1212;
let contentFuncionarios;
class objFuncionario {
    constructor(nome, salario, horaExtraDia, horaExtraNoite, dependentes, horaFaltas, descontosEventuais, refeicao, vales) {
        this.nome = (nome || 'Nome funcionário');
        this.vlrSalario = (salario || 0);
        this.horaExtraDia = (horaExtraDia || 0);
        this.horaExtraNoite = (horaExtraNoite || 0);
        this.qtDependentes = (dependentes || 0);
        this.horaFaltas = (horaFaltas || 0);
        this.vlrDescontosEventuais = (descontosEventuais || 0);
        this.vlrRefeicao = (refeicao || 0);
        this.vlrVales = (vales || 0);

        this.vlrHora = this.vlrSalario / 160;
        this.inss = this.vlrSalario * 0.08;
        this.vlrFaltas = this.horaFaltas * this.vlrHora;        
        this.vlrHorasExtras =  this.horaExtraDia * this.vlrHora + this.horaExtraNoite * 1.2 * this.vlrHora;        
        this.vlrSalarioFamilia = this.qtDependentes * 0.05 * SALARIO_MINIMO_VIGENTE;
        this.vlrSalarioBruto = this.vlrSalario + this.vlrHorasExtras + this.vlrSalarioFamilia;      
        this.vlrImpostoRenda = this.vlrSalarioBruto * 0.08;        
        this.vlrSalarioLiquido = this.vlrSalarioBruto + (-this.inss - this.vlrFaltas - this.vlrRefeicao - this.vlrVales - this.vlrDescontosEventuais - this.vlrImpostoRenda);
        

    }
};


function F01_proj(){
    
    limparConteudo();
    F01_geraPopup();
	titulo.innerHTML = `
        <style>.container{width:100%}</style>
        <h1>Folha de pagamento</h1>`;
    
    conteudo.innerHTML += `
    <table class='table table-sm table-striped' id='tbFuncionarios'>
        <thead>
            <tr>
                <th scope='col' class='tbNome'>Nome Funcionário</th>
                <th scope='col' class='tbSal'>Salário</th>
                <th scope='col'>H.Extra (Dia)</th>
                <th scope='col'>H.Extra (Noite)</th>
                <th scope='col'>Dependentes</th>
                <th scope='col'>Faltas (horas)</th>
                <th scope='col'>Outros descontos</th>
                <th scope='col'>Gasto Refeição</th>
                <th scope='col'>Vales</th>

                <th scope='col'>Valor/Hora</th>
                <th scope='col'>INSS</th>
                <th scope='col'>Faltas</th>
                <th scope='col'>Horas Extras</th>
                <th scope='col'>Salário Família</th>
                <th scope='col'>Salário Bruto</th>
                <th scope='col'>Imposto Renda</th>
                <th scope='col'>Total</th>
            </tr>
        </thead>
        <tbody id='contentFuncionarios'>
        </tbody>
    </table>
    <label for="ctrl-modal" class='btn-proj-gray' onClick=''>+ Novo</label>    `;

    contentFuncionarios = document.getElementById("contentFuncionarios");
    
    
    fetch("arquivos/funcionarios.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {  
        
        for (let ponteiro = 0; ponteiro < data.length; ponteiro++) {
            let func = new objFuncionario(
                data[ponteiro].nome              , 
                data[ponteiro].salario           , 
                data[ponteiro].horaExtraDia      , 
                data[ponteiro].horaExtraNoite    , 
                data[ponteiro].dependentes       , 
                data[ponteiro].horaFaltas        , 
                data[ponteiro].descontosEventuais, 
                data[ponteiro].refeicao          , 
                data[ponteiro].vales             , 
                );
            F01_CriaNovaEntrada(func);
        }        
    })
}

function F01_CriaNovaEntrada(funcionarioObj){    

    let linha = `
    <tr><td>    ${ funcionarioObj.nome                                  }
    </td><td class=''>   ${ formataNum(funcionarioObj.vlrSalario           ,1   )}
    </td><td class=''>   ${ formataNum(funcionarioObj.horaExtraDia              )}
    </td><td class=''>   ${ formataNum(funcionarioObj.horaExtraNoite            )}
    </td><td class=''>   ${ formataNum(funcionarioObj.qtDependentes             )}
    </td><td class=''>   ${ formataNum(funcionarioObj.horaFaltas                )}
    </td><td class='deb'>   ${ formataNum(funcionarioObj.vlrDescontosEventuais,1   )}
    </td><td class='deb'>   ${ formataNum(funcionarioObj.vlrRefeicao          ,1   )}
    </td><td class='deb'>   ${ formataNum(funcionarioObj.vlrVales             ,1   )}   

    </td><td class=''>   ${ formataNum(funcionarioObj.vlrHora             ,1  )}	
    </td><td class='deb'>   ${ formataNum(funcionarioObj.inss                ,1  )}
    </td><td class='deb'>   ${ formataNum(funcionarioObj.vlrFaltas           ,1  )}
    </td><td class='cred'>   ${ formataNum(funcionarioObj.vlrHorasExtras      ,1  )}
    </td><td class='cred'>   ${ formataNum(funcionarioObj.vlrSalarioFamilia   ,1  )}
    </td><td class=''>   ${ formataNum(funcionarioObj.vlrSalarioBruto     ,1  )}
    </td><td class='deb'>   ${ formataNum(funcionarioObj.vlrImpostoRenda     ,1  )}
    </td><td class='total'>   ${ formataNum(funcionarioObj.vlrSalarioLiquido   ,1  )}

    </td></tr>`;     
    
    contentFuncionarios.innerHTML += linha;
    
}

function F01_PegaValoresForm(){
    let func = new objFuncionario(
               document.forms["formFuncionario"].nom.value , 
    parseFloat(document.forms["formFuncionario"].sal.value ), 
    parseFloat(document.forms["formFuncionario"].dia.value ), 
    parseFloat(document.forms["formFuncionario"].noi.value ), 
    parseInt(document.forms["formFuncionario"].dep.value ), 
    parseFloat(document.forms["formFuncionario"].hor.value ), 
    parseFloat(document.forms["formFuncionario"].des.value ), 
    parseFloat(document.forms["formFuncionario"].ref.value ), 
    parseFloat(document.forms["formFuncionario"].val.value ), 
    );
    F01_CriaNovaEntrada(func);
}

function F01_geraPopup(){
    document.getElementById("conteudo-popup").innerHTML =  `
    <label for="ctrl-modal" class="btn-proj-gray fright">x</label>
    <h1 class="destaque center">Cadastrar Funcionário</h1>
    <form id="formFuncionario">
        <span class="linha"><label for="nom">Nome Funcionário: </label><input type="text" name="nom" id="nom"></span>
        <span class="linha"><label for="sal">Salário: </label><input type="text" name="sal" id="sal" placeholder="R$"></span>
        <span class="linha"><label for="dia">Hora Extra (Dia): </label><input type="text" name="dia" id="dia"></span>
        <span class="linha"><label for="noi">Hora Extra (Noite): </label><input type="text" name="noi" id="noi"></span>
        <span class="linha"><label for="dep">Dependentes: </label><input type="text" name="dep" id="dep"></span>
        <span class="linha"><label for="hor">Faltas (horas): </label><input type="text" name="hor" id="hor" ></span>
        <span class="linha"><label for="des">Outros descontos: </label><input type="text" name="des" id="des" placeholder="R$"></span>
        <span class="linha"><label for="ref">Gasto com Refeição: </label><input type="text" name="ref" id="ref" placeholder="R$"></span>
        <span class="linha"><label for="val">Vales e Adiantamentos: </label><input type="text" name="val" id="val" placeholder="R$"></span>
        <label for="" class="btn-proj-gray btcenter" onClick='F01_PegaValoresForm()'>Cadastrar</label>
    </form>`;
}

/*
## Projeto 01 - Folha de pagamento
Deseja-se fazer a emissão da folha de pagamento de uma empresa. 
Para cada um dos n funcionários da empresa são dadas as seguintes informações:

- NOME
- SAL (salário)
- HED (horas extras diurnas)
- HEN (horas extras noturnas)
- ND (número de dependentes)
- FAL (faltas em horas)
- DE (descontos eventuais)
- REF (gastos com refeições feitas na empresa)
- VAL (vales retirados durante o mês).

Emitir as seguintes informações:

- nome,
- salário,
- horas extras = HED SAL/160 + HEN 1.2 SAL/160,
- salário família = ND 0.05 * salário mínimo vigente,
- salário bruto = salário + horas extras + salário família.

Descontos efetuados:

- INSS = 0.08 SAL,
- faltas = FAL SAL/160,
- refeições,
- vales,
- descontos eventuais,
- imposto de renda = 0.08 * salário bruto.

Salário líquido = salário bruto - desconto total.
 */