import java.util.ArrayList;

public class UnidadeFederativa{
	
private int 	id     		;
private String 	abreviacao  ;
private String 	descricao   ;

public UnidadeFederativa(String abreviacao,String descricao){
	this.abreviacao = abreviacao 	;
    this.descricao  = descricao  	;
}
public UnidadeFederativa(int id, String abreviacao,String descricao){
	this.id = id;
	this.abreviacao = abreviacao 	;
	this.descricao  = descricao  	;
}

public static ArrayList<UnidadeFederativa> retornarUF(){
	ArrayList<UnidadeFederativa> array = new ArrayList<>();
	array.add(new UnidadeFederativa(1  ,"AC","Acre"));
	array.add(new UnidadeFederativa(2  ,"AL","Alagoas 			") );
	array.add(new UnidadeFederativa(3  ,"AP","Amapá") );
	array.add(new UnidadeFederativa(4  ,"AM","Amazonas") );
	array.add(new UnidadeFederativa(5  ,"BA","Bahia") );
	array.add(new UnidadeFederativa(6  ,"CE","Ceará") );
	array.add(new UnidadeFederativa(7  ,"DF","Distrito Federal") );
	array.add(new UnidadeFederativa(8  ,"ES","Espírito Santo") );
	array.add(new UnidadeFederativa(9  ,"GO","Goiás") );
	array.add(new UnidadeFederativa(10 ,"MA","Maranhão") );
	array.add(new UnidadeFederativa(11 ,"MT","Mato Grosso") );
	array.add(new UnidadeFederativa(12 ,"MS","Mato Grosso do Sul") );
	array.add(new UnidadeFederativa(13 ,"MG","Minas Gerais") );
	array.add(new UnidadeFederativa(14 ,"PA","Pará") );
	array.add(new UnidadeFederativa(15 ,"PB","Paraíba") );
	array.add(new UnidadeFederativa(16 ,"PR","Paraná") );
	array.add(new UnidadeFederativa(17 ,"PE","Pernambuco") );
	array.add(new UnidadeFederativa(18 ,"PI","Piauí") );
	array.add(new UnidadeFederativa(19 ,"RJ","Rio de Janeiro") );
	array.add(new UnidadeFederativa(20 ,"RN","Rio Grande do Norte") );
	array.add(new UnidadeFederativa(21 ,"RS","Rio Grande do Sul") );
	array.add(new UnidadeFederativa(22 ,"RO","Rondônia") );
	array.add(new UnidadeFederativa(23 ,"RR","Roraima") );
	array.add(new UnidadeFederativa(24 ,"SC","Santa Catarina") );
	array.add(new UnidadeFederativa(25 ,"SP","São Paulo") );
	array.add(new UnidadeFederativa(26 ,"SE","Sergipe") );
	array.add(new UnidadeFederativa(27 ,"TO","Tocantins") );

	return array;
}

public int getId(){return id;}
public String getAbreviacao(){return abreviacao;}
public String getDescricao(){return descricao;}





}

