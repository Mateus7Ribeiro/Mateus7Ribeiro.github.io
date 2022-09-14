import java.awt.GridLayout;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;

import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

public class ExemploCheckBox implements ActionListener {

    JFrame janela = new JFrame();
    JPanel painel = new JPanel();
    JButton botao = new JButton("OK");

    JCheckBox chk1 = new JCheckBox("Curso");
    JCheckBox chk2 = new JCheckBox("Java");
    JCheckBox chk3 = new JCheckBox("Intro");

    public static void main(String args[]) {
        new ExemploCheckBox();

    }

    public ExemploCheckBox() {
        janela.setSize(240, 100);
        janela.setTitle("Exemplo de JCheckBox");

        janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        janela.setLayout(new GridLayout(2, 1));
        painel.setLayout(new GridLayout(1, 1));
        painel.add(chk1);

        painel.add(chk2);
        painel.add(chk3);
        janela.add(painel);
        janela.add(botao);
        janela.setVisible(true);
        botao.addActionListener(this);

    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == botao) {
            String mensagem = "";

//se chk1 selecionado acrescentamos o seu texto a mensagem
            if (chk1.isSelected()) {
                mensagem = chk1.getText() + " ";

            }
//se chk2 selecionado acrescentamos o seu texto a mensagem
            if (chk2.isSelected()) {
                mensagem += chk2.getText() + " ";

            }
//se chk3 selecionado acrescentamos o seu texto a mensagem
            if (chk3.isSelected()) {
                mensagem += chk3.getText();

            }
            JOptionPane.showMessageDialog(null, mensagem);

        }
    }
}