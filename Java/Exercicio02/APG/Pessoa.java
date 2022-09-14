class Pessoa{
	private String 		nome  	;
	private int 		idade 	;
	private String 		cpf   	;
	private Endereco 	endereco;

	Pessoa(String nome , int idade, String cpf){
		this.nome  = nome  ;
		this.idade = idade ;
		this.cpf   = cpf   ;
		this.endereco = new Endereco();
	}

	public String	getNome 	(){return nome  	;}
	public int 		getIdade	(){return idade 	;}
	public String 	getCpf  	(){return cpf   	;}
	public Endereco	getEndereco	(){return endereco	;}

	public void setNome 	(String 	nome 	){this.nome  = nome  ;}
	public void setIdade	(int 		idade	){this.idade = idade ;}
	public void setCpf  	(String 	cpf  	){this.cpf   = cpf   ;}
	public void setEndereco (Endereco endereco  ){this.endereco   = endereco   ;}
	
	

}