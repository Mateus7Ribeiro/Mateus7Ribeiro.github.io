package Exercicio03;

/**
*Classe que define os atributos do cadastro Pessoa e vincula Endereço ao cadastro
*@version 1.2
*@author Mateus Ribeiro
*/
public class Pessoa{
	/** Nome da pessoa cadastrada */ 
	private String 		nome  	;
	/** Idade da pessoa cadastrada */ 
	private int 		idade 	;
	/** Cpf da pessoa cadastrada */ 
	private String 		cpf   	;
	/** Endereco da pessoa cadastrada */ 
	private Endereco 	endereco;
	/**
	* Metodo construtor de Pessoa vinculando Endereço ao cadastro
	*@param nome Nome da pessoa cadastrada.
	*@param idade Idade da pessoa cadastrada.
	*@param cpf Cpf da pessoa cadastrada.
	*/
	Pessoa(String nome , int idade, String cpf){
		this.nome  = nome  ;
		this.idade = idade ;
		this.cpf   = cpf   ;
		this.endereco = new Endereco();
	}

	/**
	* Retorna o nome da pessoa cadastrada
	*@return Nome cadastrado
	*/	
	public String	getNome 	(){return nome  	;}
	/**
	* Retorna a idade da pessoa cadastrada
	*@return Idade cadastrada
	*/	
	public int 		getIdade	(){return idade 	;}
	/**
	* Retorna o CPF da pessoa cadastrada
	*@return CPF cadastrado
	*/	
	public String 	getCpf  	(){return cpf   	;}
	/**
	* Retorna o Endereço da pessoa cadastrada
	*@return Endereço vinculado ao cadastro
	*/	
	public Endereco	getEndereco	(){return endereco	;}
	
	/**
	* Adiciona novo nome no cadastro de Pessoa
	*@param nome Nome da pessoa cadastrada.
	*/	
	public void setNome 	(String 	nome 	){this.nome  = nome  ;}
	/**
	* Adiciona nova idade no cadastro de Pessoa
	*@param idade Idade da pessoa cadastrada.
	*/
	public void setIdade	(int 		idade	){this.idade = idade ;}
	/**
	* Adiciona novo CPF no cadastro de Pessoa
	*@param cpf Cpf da pessoa cadastrada.
	*/
	public void setCpf  	(String 	cpf  	){this.cpf   = cpf   ;}
	/**
	* Adiciona novo Endereço no cadastro de Pessoa
	*@param endereco Endereço da pessoa cadastrada.
	*/
	public void setEndereco (Endereco endereco  ){this.endereco   = endereco   ;}
	
	

}