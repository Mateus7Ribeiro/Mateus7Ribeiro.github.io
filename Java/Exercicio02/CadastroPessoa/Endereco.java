public class Endereco {
	
	private String estado   ;
	private String cidade   ;
	private String bairro   ;
	private String rua      ;
	private String cep      ;
	private String telefone ;
	
	public String getEstado    (){return estado  ; }
	public String getCidade    (){return cidade  ; }
	public String getBairro    (){return bairro  ; }
	public String getRua       (){return rua     ; }
	public String getCep       (){return cep     ; }
	public String getTelefone  (){return telefone; }

	public void setEstado    (String estado  ){ this.estado   = estado  ;}
	public void setCidade    (String cidade  ){ this.cidade   = cidade  ;}
	public void setBairro    (String bairro  ){ this.bairro   = bairro  ;}
	public void setRua       (String rua     ){ this.rua      = rua     ;}
	public void setCep       (String cep     ){ this.cep      = cep     ;}
	public void setTelefone  (String telefone){ this.telefone = telefone;}
}

