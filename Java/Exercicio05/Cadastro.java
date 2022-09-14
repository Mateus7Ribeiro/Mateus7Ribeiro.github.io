
import java.util.ArrayList;

public class Cadastro {
    /*
    //TODO Para futuros usos
    private String nome;
    private String endereco;
    private UnidadeFederativa uf;
    private String email;
    private String cpf;
    private String sexo;
    private ArrayList preferencias;
    */
    public static ArrayList<String> retornarPreferencias() {
        ArrayList<String> arrayPreferencias = new ArrayList<>();

        arrayPreferencias.add("Filme ");
        arrayPreferencias.add("Música");
        arrayPreferencias.add("Teatro");
        arrayPreferencias.add("Outros");

        return arrayPreferencias;
    }

    public static ArrayList<String> retornarSexo() {
        ArrayList<String> arraySexo = new ArrayList<>();

        arraySexo.add("M - Masculino");
        arraySexo.add("F - Feminino");
        arraySexo.add("O - Outros");

        return arraySexo;
    }


}