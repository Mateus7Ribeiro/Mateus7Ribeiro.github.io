
package Exercicio03;

import javax.swing.*;
import java.util.ArrayList;

/**
*Classe que engloba os dois comportamentos de cadastro solicitados no exercício realizado no curso "Philips Desenvolve - Java" ministrado pelo Professor Albert Eije.
*@version 1.2
*@author Mateus Ribeiro
*/
public class Exercicio02MateusArr {
	/** Cria um Array contendo Pessoa para incluir os cadastros */
	public static ArrayList<Pessoa> listaPessoas;
	
	/** Método principal que inicializa o programa 
	*@param args permite inicializar o programa passando parâmetros */
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
	
	/** Método que cria um menu para manipular o cadastro de pessoas
	 */
	public static void simularCadastro(){
		
		listaPessoas = new ArrayList<>();
		int sair = 1;
		
		while(sair !=0){
			
			String[] options = {"Cadastrar Pessoa", "Imprimir lista","Excluir", "Sair"};
			
			int selecao = pergunta("SIMULACAO CADASTRO", "Selecione a opcao desejada:", options)	;
			System.out.print(selecao);
			
			switch(selecao){
				case 0:
					Pessoa pessoa = criaCadastro();
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
	/** Método que instancia o cadastro de pessoas 
	* @param qtd Quantidade de pessoas a serem instaciadas
	 */
	public static void instanciarPessoas(int qtd){
		
		listaPessoas = new ArrayList<>();

		for (int temp = 0; temp < qtd; temp++){

			Pessoa pessoa = criaCadastro();
			Endereco endereco = cadastrarEndereco(pessoa.getNome());
			pessoa.setEndereco(endereco);
			listaPessoas.add(pessoa);


		}
		listarTodosCadastros(listaPessoas);
		
	}
	/** Método que coleta informações e cadastra dados pessoais do usuário
	* @return Objeto Pessoa Cadastro
	
	*/
	public static Pessoa criaCadastro(){
		
		String nome	= JOptionPane.showInputDialog(null,"Digite o nome:","Cadastro", JOptionPane.QUESTION_MESSAGE);
		int idade 	= Integer.parseInt(JOptionPane.showInputDialog(null,"Digite a idade:","Cadastro "+nome, JOptionPane.QUESTION_MESSAGE));
		String cpf 	= JOptionPane.showInputDialog(null,"Digite o CPF:","Cadastro "+nome, JOptionPane.QUESTION_MESSAGE);

		return new Pessoa(nome,idade,cpf);
	}
	
	/** Método que coleta informações e cadastra endereço do usuário
	*@param nomePessoa String contendo o nome da pessoa para evitar erros de preenchimento
	* @return Objeto Endereco Cadastro
	*/
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
	

	
	/** Método que exibe em tela informações dos cadastros de Pessoa
	*@param list Objeto cadastro Pessoa a ser listado
	*/
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

	/** Método que mostra opções para apagar algum cadastro de Pessoa
	*@param list Objeto cadastro Pessoa a ser alterado
	*/
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
	
	/** Método que padroniza a coleta de informações em tela para o usuário
	*@param titulo Título da tela exibida
	*@param questao Pergunta/Orientação para o usuário 
	*@param options Opções listadas para o usuário preencher
	*@return Número inteiro com a opção selecionada pelo usuário
	*/
	public static int pergunta(String titulo, String questao, String[] options){
		return JOptionPane.showOptionDialog(null, questao, titulo, 0, JOptionPane.INFORMATION_MESSAGE, null, options, null);
	}
	
	
}