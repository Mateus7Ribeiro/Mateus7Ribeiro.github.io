import javax.swing.JOptionPane;

class CadastroPessoa{
	
	public static Pessoa pessoa[];
	
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

				simularCadastro(10);
				break;
		
		}
		/*
		*/

				
	}
	public static Pessoa criaCadastro(int temp){
		
		String nome	= JOptionPane.showInputDialog(null,"Digite o nome:","Cadastro numero: "+(int)(temp+1),3);
		int idade 	= Integer.parseInt(JOptionPane.showInputDialog(null,"Digite a idade:","Cadastro "+nome,3));
		String cpf 	= JOptionPane.showInputDialog(null,"Digite o CPF:","Cadastro "+nome,3);

		return new Pessoa(nome,idade,cpf);
	}
	
	public static int pergunta(String titulo, String questao, String[] options){
		return JOptionPane.showOptionDialog(null, questao, titulo, 0, JOptionPane.INFORMATION_MESSAGE, null, options, null);
	}
	
	public static void cadastrarEndereco(Pessoa pessoa){
		String nomePessoa = pessoa.getNome();
		Endereco pessoaEndereco = pessoa.getEndereco();

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
			
			mostrarEnderecoPessoa(pessoa);
		}
		
	}
	
	public static void instanciarPessoas(int qtd){
		
		pessoa = new Pessoa[qtd];
		
		for (int temp = 0; temp < pessoa.length; temp++){
			
			pessoa[temp] = criaCadastro(temp);
			System.out.printf(" Cadastro %d \n",temp+1);
			mostrarCadastroPessoa(pessoa[temp]);
			cadastrarEndereco(pessoa[temp]);
			
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
	
	public static void listarTodosCadastros(Pessoa[] pessoa){
		Endereco pessoaEndereco;
		String msg01 = "";
		for (int temp = 0; temp < pessoa.length; temp++){
			System.out.print(temp);
			if(pessoa[temp] != null){
				msg01 += "\n------ Cadastro "+(int)(temp+1)+" ------\n";
				msg01 += "Nome: "+pessoa[temp].getNome() +
					" \nIdade: "+pessoa[temp].getIdade()   +
					" \nCpf: "+pessoa[temp].getCpf();
				msg01 += "\n";
				pessoaEndereco = pessoa[temp].getEndereco();
				if(pessoaEndereco.getEstado() != null){
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
	
	public static void apagarCadastro(Pessoa[] pessoa){
		String selecao01 = "";
		while(selecao01 != "x"){
				
			selecao01 = JOptionPane.showInputDialog(null,"Digite o codigo do cadastro que deseja apagar\n\n(Digite 'listar' para ver os cadastros e 'x' para sair)","APAGAR CADASTRO",3);
			if (selecao01.toLowerCase().compareTo("listar")==0){
				System.out.print("LISTAR");
				listarTodosCadastros(pessoa);
			}
			else if (selecao01.toLowerCase().compareTo("x")==0 || selecao01==null){
				System.out.print("SAIR");
				break;
			}
			else 
				try{
					int indice = Integer.parseInt(selecao01)-1;
					if (pessoa[indice] != null ){
						String nomeApagado = pessoa[indice].getNome();
						pessoa[indice] = null;
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
	
	public static void simularCadastro(int qtd ){
		
		pessoa = new Pessoa[qtd];
		int sair = 1;
		
		while(sair !=0){
			
			String[] options = {"Cadastrar Pessoa", "Imprimir lista","Excluir", "Sair"};
			int primeiroVazio = 0;
			
			int selecao = pergunta("SIMULACAO CADASTRO", "Selecione a opcao desejada:", options)	;
			System.out.print(selecao);
			
			switch(selecao){
				case 0:
					for (int temp = 0; temp < pessoa.length; temp++){
						System.out.print(temp);
						if(pessoa[temp] == null){							
							pessoa[temp] = criaCadastro(temp);											
							cadastrarEndereco(pessoa[temp]);
							break;
						}
					}
					break;	
				case 1:
					listarTodosCadastros(pessoa);
					break;
				case 2:
					if(pessoa == null){
						String msg = "Cadastro esta vazio";
						JOptionPane.showMessageDialog(null,msg,"Alerta",2);
					}
					else {
						apagarCadastro(pessoa);
					}
					break;			
				case 3:
					sair = 0;
					break;
			}
		}
		
	}
	
	
}