import java.awt.GridLayout;
import javax.swing.DefaultListModel;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;

public class ExemploGridLayout {
//criamos um JFrame chamado 'janela' 
JFrame janela = new JFrame();
//criamos um JPanel chamado painel
JPanel painel = new JPanel();
//criamos um JLabel chamado rotulo1 e com o texto "Escolha uma fruta: " 
JLabel rotulo1 = new JLabel("Escolha uma fruta: ");
//criamos um JLabel chamado rotulo2 e com o texto "Escolha uma bebida: " 
JLabel rotulo2 = new JLabel("Escolha uma bebida: ");
    /* criamos um ListModel que é o objeto que contém as opções da lista
     * não se preocupem com isso agora, pois veremos com mais detalhes
     */
    DefaultListModel listModel = new DefaultListModel();
//criamos um JList chamado lista e definimos onde estão os objetos da     lista
    JList lista = new JList(listModel);
//criamos um JComboBox chamado combo 
JComboBox combo = new JComboBox();

    //criamos um JButton chamado 'botao' e com o texto "OK" 
	JButton botao = new JButton("OK");
	
    public static void main (String args[]){
        new ExemploGridLayout();
    }
    private ExemploGridLayout(){
//definimos o título da janela 
janela.setTitle("Exemplo de um GridLayout");
//definimos a largura e a altura da janela 
janela.setSize(300, 200);
//define a posição da janela na tela 
janela.setLocation(50, 50);
//define que ao fechar a janela, encerre a aplicação 
janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//definimos o layout do painel 
painel.setLayout(new GridLayout(3, 2, 5, 1));
//adicionamos o rotulo1 ao painel 
painel.add(rotulo1);
//acrescentamos algumas frutas a lista 
listModel.addElement("Banana"); 
listModel.addElement("Uva"); 
listModel.addElement("Pera");
//adicionamos a lista ao painel 
painel.add(lista);
//adicionamos o rotulo2 ao painel 
painel.add(rotulo2);
//acrescentamos algumas bebidas ao combo 
combo.addItem("Agua"); 
combo.addItem("Refrigerante"); 
combo.addItem("Suco");
//adicionamos o combo ao painel 
painel.add(combo);
//adicionamos o botao ao painel
        painel.add(botao);
//adicionamos o painel à janela 
janela.add(painel);
//mostramos a janela 
janela.setVisible(true);
    }
}