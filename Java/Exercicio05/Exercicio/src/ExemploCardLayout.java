import java.awt.BorderLayout; import java.awt.CardLayout; import java.awt.GridLayout;
import java.awt.event.ActionEvent; import java.awt.event.ActionListener; import javax.swing.JButton;
import javax.swing.JFrame; import javax.swing.JLabel; import javax.swing.JPanel;
public class ExemploCardLayout implements ActionListener{
//criamos um JFrame chamado 'janela'
JFrame janela = new JFrame();
//criamos um JPanel chamado painel1 
JPanel painel1 = new JPanel();
//criamos um JPanel chamado painel2 
JPanel painel2 = new JPanel();
//criamos um JLabel chamado rotulo1
JLabel rotulo1 = new JLabel("Painel 1", JLabel.CENTER);
//criamos um JLabel chamado rotulo2
JLabel rotulo2 = new JLabel("Painel 2", JLabel.CENTER);
//criamos dois botoes e um painel para alternar entre os paineis 
JPanel painelSelecao = new JPanel();
JButton botao1 = new JButton("Painel 1"); JButton botao2 = new JButton("Painel 2");
//criamos o painelCard que será gerenciado pelo CardLayout 
JPanel painelCard = new JPanel();
public static void main (String args[]){
new ExemploCardLayout();
}
private ExemploCardLayout(){
//definimos o título da janela 
janela.setTitle("Exemplo de um CardLayout");
//definimos a largura e a altura da janela 
janela.setSize(300, 200);
//define a posição da janela na tela 
janela.setLocation(50, 50);
//define que ao fechar a janela, encerre a aplicação 
janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//definimos o layout da janela 
janela.setLayout(new BorderLayout());



//definimos o painelselecao com o GridLayout e incluimos os botoes 
painelSelecao.setLayout(new GridLayout(1,2)); 
painelSelecao.add(botao1);
painelSelecao.add(botao2);
//adicionamos os rotulos a seus respectivos paineis 
painel1.add(rotulo1);
painel2.add(rotulo2);
//definimos o layout do painelCard 
painelCard.setLayout(new CardLayout());
//adicionamos os paineis quem contém os rotulos ao painelCard 
painelCard.add(painel1, "p1");
painelCard.add(painel2, "p2");
//adicionamos os paineis à janela 
janela.add("North", painelSelecao); 
janela.add("East", painelCard);
//registra os botoes para tratarmos os eventos gerados por eles 
botao1.addActionListener(this); 
botao2.addActionListener(this);
//mostramos a janela 
janela.setVisible(true);
}
//veremos este metodo com mais detalhe no proximo topico
public void actionPerformed(ActionEvent e){
CardLayout cl = (CardLayout) painelCard.getLayout();
if (e.getSource() == botao1){ cl.show(painelCard, "p1");
}
if (e.getSource() == botao2){ cl.show(painelCard, "p2");
}
}
}