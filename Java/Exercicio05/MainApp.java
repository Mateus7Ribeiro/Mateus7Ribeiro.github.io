
import java.util.ArrayList;
import java.util.ListIterator;

import java.awt.GridLayout;
import java.awt.Toolkit;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import javax.swing.*;

import javax.swing.border.EmptyBorder;

public class MainApp implements ActionListener {
    String textoSelecionar = "Selecione";
    String[] rotulosStrings = {"Nome: ",
            "Endereço: ",
            "UF: ",
            "Email: ",
            "CPF: ",
            "Sexo: ",
            "Preferências: "};
    JFrame janela = new JFrame();
    JPanel painel = new JPanel();
	
    JTextField nome = new JTextField();
    JTextField endereco = new JTextField();
    JComboBox uf = new JComboBox();
	
    //TODO Validar email via Regex 
    JTextField email = new JTextField();
	
    //TODO Criar máscara de campo e validar CPF, estava dando erro com o ParseException
    //JTextField cpf 		= new JFormattedTextField(new MaskFormatter("###.###.###-##"));
    JTextField cpf = new JTextField();
    
	JLabel rotulo[] = new JLabel[rotulosStrings.length];
    DefaultListModel listModel = new DefaultListModel();
    JList preferencias = new JList(listModel);
    JComboBox sexo = new JComboBox();
    JButton confirmar = new JButton("Confirmar");
    JButton cancelar = new JButton("Cancelar");


    public static void main(String[] args) {
        new MainApp();
    }

    private MainApp() {
        int screenHeight = Toolkit.getDefaultToolkit().getScreenSize().height;
        int screenWidth = Toolkit.getDefaultToolkit().getScreenSize().width;

        for (int cont = 0; cont < rotulosStrings.length; cont++) {
            rotulo[cont] = new JLabel(rotulosStrings[cont]);
        }

        //TODO Ajustar tamanho de campo de preferências
        //preferencias.setSize(100,100); //nao funcionou

        ArrayList ListaPreferencias = Cadastro.retornarPreferencias();
        for (int temp = 0; temp < ListaPreferencias.size(); temp++) {
            listModel.addElement(ListaPreferencias.get(temp));
        }

        sexo.addItem(textoSelecionar);
        ArrayList ListaSexo = Cadastro.retornarSexo();
        for (int temp = 0; temp < ListaSexo.size(); temp++) {
            sexo.addItem(ListaSexo.get(temp));
        }


        uf.addItem(textoSelecionar);
        ArrayList ListaUfs = UnidadeFederativa.retornarUF();

        for (int temp = 0; temp < ListaUfs.size(); temp++) {
            UnidadeFederativa CidadeTemp = (UnidadeFederativa) ListaUfs.get(temp);
            uf.addItem(CidadeTemp.getAbreviacao() + " - " + CidadeTemp.getDescricao());
        }


        janela.setSize(500, 360);
        janela.setLocation((screenWidth - janela.getWidth()) / 2, (screenHeight - janela.getHeight()) / 2);
        janela.setTitle("Cadastro");
        janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        janela.setLayout(new GridLayout(1, 1));
        painel.setLayout(new GridLayout(10, 2, 3, 3));
        painel.setBorder(new EmptyBorder(20, 40, 5, 40));

        painel.add(rotulo[0]);
        painel.add(nome);
        painel.add(rotulo[1]);
        painel.add(endereco);
        painel.add(rotulo[2]);
        painel.add(uf);
        painel.add(rotulo[3]);
        painel.add(email);
        painel.add(rotulo[4]);
        painel.add(cpf);
        painel.add(rotulo[5]);
        painel.add(sexo);
        painel.add(rotulo[6]);
        painel.add(preferencias);
        painel.add(confirmar);
        painel.add(cancelar);

        janela.add(painel);

        janela.setVisible(true);
		confirmar.addActionListener(this);
		cancelar.addActionListener(this);

    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == confirmar) {

			StringBuilder mensagemRetorno = new StringBuilder();
            mensagemRetorno.append(rotulosStrings[0] + nome.getText() + "\n");
            mensagemRetorno.append(rotulosStrings[1] + endereco.getText() + "\n");

            if (uf.getSelectedItem() != textoSelecionar) {
                mensagemRetorno.append(rotulosStrings[2] + uf.getSelectedItem() + "\n");
            }
            mensagemRetorno.append(rotulosStrings[3] + email.getText() + "\n");
            mensagemRetorno.append(rotulosStrings[4] + cpf.getText() + "\n");

            if (sexo.getSelectedItem() != textoSelecionar) {
                mensagemRetorno.append(rotulosStrings[5] + sexo.getSelectedItem() + "\n");
            }

            if (preferencias.getSelectedValuesList().size() > 0) {
                mensagemRetorno.append("Preferências deste usuario:\n");
                ListIterator prefIterator = preferencias.getSelectedValuesList().listIterator();
                while(prefIterator.hasNext()){
                    mensagemRetorno.append("• " + prefIterator.next() + "\n");
                }
            }

            JOptionPane.showMessageDialog(null, mensagemRetorno);
        }

        if (e.getSource() == cancelar) {
            System.exit(0);
        }


    }

}