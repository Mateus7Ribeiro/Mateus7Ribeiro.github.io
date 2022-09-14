import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Mod05FlowLayout implements ActionListener {
    JFrame janela = new JFrame();
    JPanel painel = new JPanel();
    JButton botao = new JButton("Ok");
    JTextField texto = new JTextField(5);
    JLabel rotulo = new JLabel("Seu nome: ");

    public static void main(String[] args){
        new Mod05FlowLayout();
    }

    private Mod05FlowLayout(){
        janela.setTitle("Teste FlowLayout");
        janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        janela.setLocation(760,300);
        janela.setLayout(new FlowLayout(FlowLayout.CENTER, 30 , 20));
        janela.add(rotulo);
        janela.add(texto);
        janela.add(botao);
        janela.add(painel);
        janela.setSize(300,150);

        janela.setVisible(true);

        botao.addActionListener(this);

    }

    public void actionPerformed(ActionEvent e){
        if (e.getSource() == botao){
            JOptionPane.showMessageDialog(null,texto.getText());
        }
    }

}
