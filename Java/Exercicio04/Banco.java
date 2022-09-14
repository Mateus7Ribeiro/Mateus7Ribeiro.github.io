import javax.swing.*;

public class Banco{

	public static void main(String[] args){
		
		int sair = 1;
		ContaCorrenteEspecial contacorr = new ContaCorrenteEspecial();	

		// resultado do toString da ContaCorrenteEspecial 
		System.out.print("toString da ContaCorrenteEspecial:\n"+contacorr); 
		//Método exclusivo da classe ContaCorrente
		System.out.printf("\nMetodo obterSaldo() [classe ContaCorrente] retorna: %.2f\n\n",contacorr.obterSaldo()); 
		
		while(sair !=0){
			
			String[] options = {"Depositar", "Sacar","Mostrar Saldo", "Alterar Limite", "Sair"};
			
			int selecao = pergunta("TELA CAIXA ELETRONICO", "Selecione a opcao desejada:", options)	;
			System.out.print(selecao);
			
			switch(selecao){
				case 0:
					double valorDeposito;
					valorDeposito = inputValorMsg("Selecione o valor a ser depositado","DEPOSITO");
					contacorr.depositar(valorDeposito);
					JOptionPane.showMessageDialog(null,contacorr,"Novo Saldo",1);
					break;
				case 1:
					double valorSaque;
					valorSaque = inputValorMsg("Selecione o valor a ser sacado","SAQUE");
					contacorr.sacar(valorSaque);
					JOptionPane.showMessageDialog(null,contacorr,"Novo Saldo",1);
					break;
				case 2:
					JOptionPane.showMessageDialog(null,contacorr,"Saldo",1);
					break;	
				case 3:
					double valorAjusteLimite;
					valorAjusteLimite = inputValorMsg("Selecione o valor a ser ajustado (+/-)","AJUSTE LIMITE EXTRA");
					contacorr.aumentarLimiteExtra(valorAjusteLimite);
					JOptionPane.showMessageDialog(null,contacorr,"Saldo",1);
					break;			
				case 4:
					sair = 0;
					break;

					
			}
		}
		
	}
	
	/** Método que padroniza a coleta de informações em tela para o usuário
	*@param titulo Título da tela exibida
	*@param questao Pergunta/Orientação para o usuário 
	*@param options Opções listadas para o usuário preencher
	*@return Número inteiro com a opção selecionada pelo usuário
	*/
	public static int pergunta(String titulo, String questao, String[] options){
		return JOptionPane.showOptionDialog(null, questao, titulo, 0, JOptionPane.INFORMATION_MESSAGE, null, options, null);
	}
	/** Método que padroniza a coleta de informações de valores em tela para o usuário
	*@param titulo Título da tela exibida
	*@param mensagem Pergunta/Orientação para o usuário 
	*@return Número double com o valor inputado pelo usuário
	*/
	public static double inputValorMsg(String mensagem, String titulo){
		return Double.parseDouble(JOptionPane.showInputDialog(null, mensagem , titulo, JOptionPane.QUESTION_MESSAGE));
	}
	
}
