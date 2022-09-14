public class Pessoa {
	
	private String nome     ;
	private String idade    ;
	private String cpf      ;
	private Endereco endereco;
	
	public Pessoa(String nome    , String idade   , String cpf  ){
		this.nome     = nome    ;
		this.idade    = idade   ;
		this.cpf      = cpf     ;
		this.endereco = new Endereco();
	}
	
	public void setNome      (String nome    ){ this.nome     = nome    ;}
	public void setIdade     (String idade   ){ this.idade    = idade   ;}
	public void setCpf    	 (String cpf     ){ this.cpf      = cpf     ;}
	
	public void setEndereco  (Endereco endereco){this.endereco = endereco;}
	
	public String getNome      (){return nome    ; }
	public String getIdade     (){return idade   ; }
	public String getCpf       (){return cpf     ; }
	
	public Endereco getEndereco (){ return endereco ; }
}