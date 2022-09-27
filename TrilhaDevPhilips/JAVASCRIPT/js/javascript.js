const nomesAleatorios = ["Beatriz","Luiz","Marcelo","Isabella","Heloísa","Maria Clara","João","Ana Julia","Emanuelly","Antônio","Bruno","Renan","Pedro","Maria Vitória","Bryan","Natália","Diego","Pietro","Marina","Davi","Henrique","Gabriel","Vinicius","Thiago","Alexandre","Igor","Lucas","Elisa","Manuela","Sophia","Leonardo","Sarah","Vitor","Bruna","Erick","Diogo","Caroline","Alana","Raul","Mariana","Rafael","Ana Luiza","Albert","Daniel","Sophie","Otávio","Camila","Maysa","Giovanna","Thomas","Lorena","Mateus"];
const sobrenomesAleatorios = ["Rezende","Lima","Azevedo","Melo","Gonçalves","Santos","Martins","Porto","Souza","Vieira","Ribeiro","Rodrigues","Miguel","Sales","Barbosa","Ramos","da Mata","Lopes","das Neves","Ferreira","Cunha","Viana","Cardoso","Teixeira","Moraes","Costa","da Costa","da Cruz","Gomes","Rocha","Correia","Dias","Castro","Monteiro","Almeida","Novaes","Aragão","Moreira","Henrique","Tinder","Claro","Tim"];
const objetosAleatorios = ["Abridor","Açucareiro","Adaga","Agulha","Algema","Alicate","Anel","Apito","Apontador","Bacia","Banco","Batom","Baú","Bengala","Bicicleta","Binóculo","Bisturi","Borracha","Bota","Brinco","Cadeado","Caderno","Calça","Camisa","Camiseta","Capacete","Carimbo","Chinelo","Clipe","Colchão","Colher","Desfibrilador","Desodorante","Dominó","DVD","Edredom","Envelope","Enxada","Escada","Escorredor","Escova","Escudo","Esmalte","Espanador","Espelho","Espremedor","Estetoscópio","Estilete","Estojo","Faca","Facão","Fichário","Filmadora","Fita","Flauta","Folha","Fone","Freezer","Frigideira","Furadeira","Gaita","Gargantilha","Grampo","Gravata","Grelha","Guitarra","Impressora","Ioiô","Isqueiro","Jaleco","Jogo","Joystick","Kart","Kimono","Lancheira","Lanterna","Lápis","Lapiseira","Lenço","Livro","Machado","Maiô","Mala","Maquiagem","Megafone","Meia","Microfone","Mochila","Notebook","Óculos","Panela","Pano","Papel","Pen drive","Pente","Pinça","Pincel","Pingente","Pote","Prato","Pulseira","Quebra-cabeça","Ralo","Régua","Revista","Rímel","Rodo","Saia","Sandália","Sapato","Scanner","Short","Sombrinha","Tábua","Tabuleiro","Teclado","Telefone","Televisão","Tesoura","Trena","Uniforme","Vaso","Velocímetro","Viseira","Walkie-talkie","Webcam","Xampu"]
const nomeEmpresa = ["Veterinária", "Papelaria", "Hospital", "Lan House", "Casa", "Açougue", "Luminárias", "Marketing", "Advocacia", "Churrascaria", "Mercado", "Pet Shop", "Lanchonete", "Oficina", "Hoteis", "Mecânico", "Celular", "Agência", "Banco", "Amigo", "Faculdade", "Roupas", "Búzios", "Igreja", "Salão"];
const razaoSocialEmpresa = ["","Campo", "Metrópole", "GoldenRule", "Converser", "Dedicado", "Bom preço", "Acadêmico", "Tulipa", "Inter", "Orgânico", "Town", "Grau", "Total", "Galeria", "Federal", "Evereste", "Cumulus", "Inovare", "Best Place", "Cultural Store", "Requint", "Digimund", "Universo", "Witt", "VitaSonho", "King & Queen", "Tem de Tudo", "Cadore", "QualyMec", "Dream", "Practice", "Belo Cenário", "Libra", "Previx", "Upper", "Love & Dream", "Powerful", "Mankind", "Estância", "Red & White", "Master", "Do Bom", "Soluções", "Real", "Leal"];
const dddsBrasil = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"];
const emailProvs = ["@maile.com", "@yaroot.com", "@lovesmail.com", "@tatmail.com", "@glomail.com", "@vipmail.com", "@stsmail.com", "@inlooked.com"];
const indiceNumeros = ['3','9'];


var exercicio = {

    descricao: [
        "Deseja-se fazer a emissão da folha de pagamento de uma empresa. ",
        "Crie uma simples agenda telefônica, com nome, telefone, email e talvez alguns dados a mais.",
        "Criar um controle de empréstimos",
        "A proposta é um sistema “to-do” simples, que ajuda o usuário a controlar suas tarefas, coisas para fazer.",
        "Um sistema completo para controlar contas a pagar e receber, e controlar seus gastos pessoais."
    ],

    titulos: [
        "Folha de pagamento",
        "Agenda Telefônica",
        "Coisas Emprestadas",
        "Lista de Tarefas",
        "Controle Financeiro Pessoal"]

}


function limpar(){
	document.getElementById("resultado").innerHTML = resultVazio;
}

function deletaItemArray(item,arr){
    
    for(let cont = 0; cont <arr.length; cont++){
        if(arr[cont] === item){
            arr.splice(cont,1);            
        }

    }
    return arr;
}


let abasMenu = document.getElementById("abas");
let titulo = document.getElementById("titulo");
let conteudo = document.getElementById("conteudo");
let resultado = document.getElementById("resultado");


function limparConteudo(){
    
    conteudo .innerHTML = '';
    resultado.innerHTML = '';
    resultado.setAttribute('class','');
    titulo.innerHTML = '';

    
}


let itemClicado;
function carregaMenu() {
    for (let temp = 0; exercicio.titulos.length > temp; temp++) {
        let botao = document.createElement("buttom");
        botao.textContent = exercicio.titulos[temp];
        botao.className = 'menu';
        botao.setAttribute('value',temp);
        botao.setAttribute('title',exercicio.descricao[temp]);
        abasMenu.appendChild(botao);
    }

    
    document.getElementById("abas").addEventListener('click', (e) => {
        
        itemClicado = parseInt(e.target.getAttribute("value"));    

        switch(itemClicado){

			case 0: F01_proj() ; break;
			case 1: F02_proj() ; break;
			case 2: F03_proj() ; break;
			case 3: F04_proj() ; break;
			case 4: F05_proj() ; break;	

        }    

        
    });
    
}

function formataNum(num,moeda){
    let formNum;
    if(moeda==true){
        formNum = new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' });
    }
    else {
        formNum = new Intl.NumberFormat('pt-BR');
    }
    num = Math.round(num*100)/100;
    return formNum.format(num);
    
}

function aleatorio(maximo){
    /* retorna um número entre 0 e maximo*/
    return Math.floor(Math.random()*maximo);
}

carregaMenu();
//F01_proj();
//F02_proj();
F03_proj();
//F04_proj();
//F05_proj();
