import javax.swing.*;

public class Mod05 {
    JFrame janela = new JFrame();
    JButton botao = new JButton("Ok");


    public static void main(String[] args) {
        new Mod05();
    }
    private Mod05(){
        janela.setTitle("Primeira Aplicação gráfica");
        janela.setSize(350,200);
        janela.setLocation(50,50);
        janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        janela.add(botao);

        janela.setVisible(true);


    }

}
