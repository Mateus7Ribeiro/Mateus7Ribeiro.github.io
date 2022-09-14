import javax.swing.*;
import java.util.ArrayList;

class Exercicio02MateusArr {
	
	public static ArrayList<Pessoa> listaPessoas;
	
	public static void main(String[] args){
				
		
		String[] options2 = {"Instaciar 2 Pessoas","Simulacao cadastro"};
		int selecao01 = pergunta("Exercicio 02", "Selecione a opcao desejada:", options2)	;


		switch (selecao01) {
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
					if(listaPessoas.size()==0){
						String msg = "Cadastro esta vazio";
						JOptionPane.showMessageDialog(null,msg,"Alerta", JOptionPane.WARNING_MESSAGE);
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
		
		String nome	= JOptionPane.showInputDialog(null,"Digite o nome:","Cadastro numero: "+(temp+1), JOptionPane.QUESTION_MESSAGE);
		int idade 	= Integer.parseInt(JOptionPane.showInputDialog(null,"Digite a idade:","Cadastro "+nome, JOptionPane.QUESTION_MESSAGE));
		String cpf 	= JOptionPane.showInputDialog(null,"Digite o CPF:","Cadastro "+nome, JOptionPane.QUESTION_MESSAGE);

		return new Pessoa(nome,idade,cpf);
	}
	
	
	public static Endereco cadastrarEndereco(String nomePessoa){
		Endereco pessoaEndereco = new Endereco();

		String[] options2 = {"Sim","Nao"};
		int selecao01 = pergunta("CADASTRO ENDERECO", "Deseja cadastrar um endereco para "+nomePessoa+"?", options2)	;
		if(selecao01 == 0){
			String estado  	= JOptionPane.showInputDialog(null,"Digite o Estado  ","Cadastro "+nomePessoa,JOptionPane.QUESTION_MESSAGE);
			String cidade  	= JOptionPane.showInputDialog(null,"Digite a Cidade  ","Cadastro "+nomePessoa,JOptionPane.QUESTION_MESSAGE);
			String bairro  	= JOptionPane.showInputDialog(null,"Digite o Bairro  ","Cadastro "+nomePessoa,JOptionPane.QUESTION_MESSAGE);
			String rua     	= JOptionPane.showInputDialog(null,"Digite a Rua     ","Cadastro "+nomePessoa,JOptionPane.QUESTION_MESSAGE);
			String cep     	= JOptionPane.showInputDialog(null,"Digite o Cep     ","Cadastro "+nomePessoa,JOptionPane.QUESTION_MESSAGE);
			String telefone	= JOptionPane.showInputDialog(null,"Digite o Telefone","Cadastro "+nomePessoa,JOptionPane.QUESTION_MESSAGE);
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
		StringBuilder msg01 = new StringBuilder();
		if (list.size() == 0){
			msg01 = new StringBuilder("Nao existem cadastros no sistema");
		}
		else {
			Endereco pessoaEndereco;

			for (int temp = 0; temp < list.size(); temp++) {
				System.out.print(temp);
				if (list.get(temp) != null) {
					msg01.append("\n------ Cadastro ").append(temp + 1).append(" ------\n");
					msg01.append("Nome: ").append(list.get(temp).getNome()).append(" \nIdade: ").append(list.get(temp).getIdade()).append(" \nCpf: ").append(list.get(temp).getCpf());
					msg01.append("\n");
					pessoaEndereco = list.get(temp).getEndereco();
					if (pessoaEndereco.getEstado() != null) { //proximas atualizacoes varrer array completo
						msg01.append("-ENDERECO:");
						msg01.append("\nEstado: ").append(pessoaEndereco.getEstado()).append("\nCidade: ").append(pessoaEndereco.getCidade()).append("\nBairro: ").append(pessoaEndereco.getBairro()).append("\nRua: ").append(pessoaEndereco.getRua()).append("\nCep: ").append(pessoaEndereco.getCep()).append("\nTelefone: ").append(pessoaEndereco.getTelefone());
						msg01.append("\n");
					}
				}

			}
		}
		
		JOptionPane.showMessageDialog(null, msg01.toString(),"LISTA CADASTROS",1);
		
	}

	
	public static void apagarCadastro(ArrayList<Pessoa> list){
		String selecao01 = "";
		while(!selecao01.equals("x")){
				
			selecao01 = JOptionPane.showInputDialog(null,"Digite o codigo do cadastro que deseja apagar\n\n(Digite 'listar' para ver os cadastros e 'x' para sair)","APAGAR CADASTRO",3);
			if (selecao01==null || selecao01.toLowerCase().equals("x")){ //TODO Falta analizar daqui pra baixo
				System.out.print("SAIR");
				break;
			} else if (selecao01.toLowerCase().equals("listar")){
				System.out.print("LISTAR");
				listarTodosCadastros(list);
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