import javax.swing.*;
import java.lang.reflect.Array;
import java.util.ArrayList;

class Exercicio02MateusArr {
	
	public static ArrayList<Pessoa> listaPessoas;
	
	public static void main(String[] args){
				
		
		String[] options2 = {"Instaciar 2 Pessoas","Simulacao cadastro"};
		int selecao01 = pergunta("Exercicio 02", "Selecione a opcao desejada:", options2)	;
				
		
		switch(selecao01){
			case 0:
				System.out.println("INSTACIAR 2 PESSOAS");
				instanciarPessoas(2);
				break;
			case 1:
				
				System.out.println("SIMULACAO CADASTRO");

				simularCadastro();
				break;
		
		}
		/*
		*/

				
	}
	public static void simularCadastro(){
		
		listaPessoas = new ArrayList<>();
		int sair = 1;
		
		while(sair !=0){
			
			String[] options = {"Cadastrar Pessoa", "Imprimir lista","Excluir", "Sair"};
			int primeiroVazio = 0;
			
			int selecao = pergunta("SIMULACAO CADASTRO", "Selecione a opcao desejada:", options)	;
			System.out.print(selecao);
			
			switch(selecao){
				case 0:
					Pessoa pessoa = criaCadastro(listaPessoas.size());
					Endereco endereco = cadastrarEndereco(pessoa.getNome());
					pessoa.setEndereco(endereco);
					listaPessoas.add(pessoa);
					break;
				case 1:
					listarTodosCadastros(listaPessoas);
					break;
				case 2:
					if(listaPessoas.size()>0){
						String msg = "Cadastro esta vazio";
						JOptionPane.showMessageDialog(null,msg,"Alerta",2);
					}
					else {
						apagarCadastro(listaPessoas);
					}
					break;			
				case 3:
					sair = 0;
					break;
			}
		}
		
	}
	
	public static void instanciarPessoas(int qtd){
		
		listaPessoas = new ArrayList<>();

		for (int temp = 0; temp < qtd; temp++){

			Pessoa pessoa = criaCadastro(temp);
			Endereco endereco = cadastrarEndereco(pessoa.getNome());
			pessoa.setEndereco(endereco);
			listaPessoas.add(pessoa);


		}
		listarTodosCadastros(listaPessoas);
		
	}
	public static Pessoa criaCadastro(int temp){
		
		String nome	= JOptionPane.showInputDialog(null,"Digite o nome:","Cadastro numero: "+(int)(temp+1),3);
		int idade 	= Integer.parseInt(JOptionPane.showInputDialog(null,"Digite a idade:","Cadastro "+nome,3));
		String cpf 	= JOptionPane.showInputDialog(null,"Digite o CPF:","Cadastro "+nome,3);

		return new Pessoa(nome,idade,cpf);
	}
	
	
	public static Endereco cadastrarEndereco(String nomePessoa){
		Endereco pessoaEndereco = new Endereco();

		String[] options2 = {"Sim","Nao"};
		int selecao01 = pergunta("CADASTRO ENDERECO", "Deseja cadastrar um endereco para "+nomePessoa+"?", options2)	;
		if(selecao01 == 0){
			String estado  	= JOptionPane.showInputDialog(null,"Digite o Estado  ","Cadastro "+nomePessoa,3);
			String cidade  	= JOptionPane.showInputDialog(null,"Digite a Cidade  ","Cadastro "+nomePessoa,3);
			String bairro  	= JOptionPane.showInputDialog(null,"Digite o Bairro  ","Cadastro "+nomePessoa,3);
			String rua     	= JOptionPane.showInputDialog(null,"Digite a Rua     ","Cadastro "+nomePessoa,3);
			String cep     	= JOptionPane.showInputDialog(null,"Digite o Cep     ","Cadastro "+nomePessoa,3);
			String telefone	= JOptionPane.showInputDialog(null,"Digite o Telefone","Cadastro "+nomePessoa,3);
			pessoaEndereco.setEstado	(estado  );
			pessoaEndereco.setCidade	(cidade  );
			pessoaEndereco.setBairro	(bairro  );
			pessoaEndereco.setRua		(rua     );
			pessoaEndereco.setCep		(cep     );
			pessoaEndereco.setTelefone	(telefone);

			return pessoaEndereco;
		} else {
			return new Endereco();
		}
	}
		
	public static void mostrarCadastroPessoa(Pessoa pessoa){
			//console
			System.out.println(" Nome:\t"+pessoa.getNome());
			System.out.println(" Idade:\t"+pessoa.getIdade());
			System.out.println(" Cpf:\t"+pessoa.getCpf());
			System.out.printf("---------------------------\n");			
			
			//mensagem
			String msg01 = "Nome: "+pessoa.getNome() +
						   " \nIdade: "+pessoa.getIdade()   +
						   " \nCpf: "+pessoa.getCpf() + "\n";
			
			
			JOptionPane.showMessageDialog(null,msg01,"Cadastrado com Sucesso",1);
	}
	
	public static void listarTodosCadastros(ArrayList<Pessoa> list){
		Endereco pessoaEndereco;
		String msg01 = "";
		for (int temp = 0; temp < list.size(); temp++){
			System.out.print(temp);
			if(list.get(temp) != null){
				msg01 += "\n------ Cadastro "+(int)(temp+1)+" ------\n";
				msg01 += "Nome: "+list.get(temp).getNome() +
					" \nIdade: "+list.get(temp).getIdade()   +
					" \nCpf: "+list.get(temp).getCpf();
				msg01 += "\n";
				pessoaEndereco = list.get(temp).getEndereco();
				if(pessoaEndereco.getEstado() != null){ //proximas atualizacoes varrer array completo
					msg01 += "-ENDERECO:";
					msg01 += "\nEstado: " + pessoaEndereco.getEstado()   +
						"\nCidade: " + pessoaEndereco.getCidade()   +
						"\nBairro: " + pessoaEndereco.getBairro()   +
						"\nRua: " + pessoaEndereco.getRua()      +
						"\nCep: " + pessoaEndereco.getCep()      +
						"\nTelefone: " + pessoaEndereco.getTelefone();
					msg01 += "\n";
				}
			}
						
		}
		if (msg01 == ""){
			msg01 = "Nao existem cadastros no sistema";
		}
		
		JOptionPane.showMessageDialog(null,msg01,"LISTA CADASTROS",1);
		
	}
	
	public static void mostrarEnderecoPessoa(Pessoa pessoa){
			
			Endereco pessoaEndereco = pessoa.getEndereco();
			String msg01 = "Estado: " + pessoaEndereco.getEstado()   +
			"\nCidade: " + pessoaEndereco.getCidade()   +
			"\nBairro: " + pessoaEndereco.getBairro()   +
			"\nRua: " + pessoaEndereco.getRua()      +
			"\nCep: " + pessoaEndereco.getCep()      +
			"\nTelefone: " + pessoaEndereco.getTelefone();
			
			JOptionPane.showMessageDialog(null,msg01,"Endereco cadastrado | "+pessoa.getNome(),1);
		
			
	}
	
	public static void apagarCadastro(ArrayList<Pessoa> list){
		String selecao01 = "";
		while(!selecao01.equals("x")){
				
			selecao01 = JOptionPane.showInputDialog(null,"Digite o codigo do cadastro que deseja apagar\n\n(Digite 'listar' para ver os cadastros e 'x' para sair)","APAGAR CADASTRO",3);
			if (selecao01.toLowerCase().equals("listar")){
				System.out.print("LISTAR");
				listarTodosCadastros(list);
			}
			else if (selecao01.toLowerCase().equals("x") || selecao01==null){ //TODO Falta analizar daqui pra baixo
				System.out.print("SAIR");
				break;
			}
			else 
				try{
					int indice = Integer.parseInt(selecao01)-1;
					if (list.get(indice) != null ){
						String nomeApagado = list.get(indice).getNome();
						list.remove(indice);
						JOptionPane.showMessageDialog(null,"Cadastro apagado | "+nomeApagado,"Sucesso",1);
					}
					else {
						JOptionPane.showMessageDialog(null,"Selecione um cadastro valido","Alerta",3);
					}
				}
				catch (Exception e){
					JOptionPane.showMessageDialog(null,"Selecione um cadastro valido","Alerta",3);
				}
				

			System.out.print(selecao01+"\n");
		}
	}
	
	
	public static int pergunta(String titulo, String questao, String[] options){
		return JOptionPane.showOptionDialog(null, questao, titulo, 0, JOptionPane.INFORMATION_MESSAGE, null, options, null);
	}
	
	
}