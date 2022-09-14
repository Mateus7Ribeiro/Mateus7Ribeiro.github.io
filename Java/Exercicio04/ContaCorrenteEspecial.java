import javax.swing.*;

public class ContaCorrenteEspecial extends ContaCorrente{
	private double limiteExtra = 0;
	private double saldoDevedor = 0;

	@Override
	public String toString() {
		return 
		"Saldo Total: " + String.format("%.2f",obterSaldo())   + "\n" +
		"Limite Extra: " + String.format("%.2f",limiteExtra) + "\n" +
		"Saldo Devedor: " + String.format("%.2f",saldoDevedor) + "\n" 
		;
	}

	public void aumentarLimiteExtra(double valor){
		if (saldoDevedor > limiteExtra+valor){
			String msg;
			msg = 	"Nao foi possivel alterar o limite. \nVerifique o saldo devedor. \nNovo valor solicitado: R$ " +
					String.format("%.2f",limiteExtra+valor) + ".\n" +
					"Saldo devedor vigente: " + String.format("%.2f",saldoDevedor);
			System.out.printf(msg);
			JOptionPane.showMessageDialog(null,msg,"Alerta",3);
		}
		else {
			this.limiteExtra += valor;
		}
	}
	
	//TODO criar menu de opções de ajuste de limiteExtra
	/*
	public void reduzirLimiteExtra(double valor){
		if(limiteExtra <= valor){
			this.limiteExtra = 0;
		}
		else {
			this.limiteExtra -= valor;
		}
	}
	*/

	public void sacar(double vlrSaque){
		if (vlrSaque >= 0) {
			if (vlrSaque <= saldoTotal){		
				this.saldoTotal -= vlrSaque;		
			}
			
			else if (vlrSaque <= saldoTotal+limiteExtra-saldoDevedor){
				saldoDevedor += vlrSaque-saldoTotal;
				saldoTotal = 0;
			}
			else {
				String msg;
				msg = "Nao foi possivel efetuar o saque. \nVerifique os valores disponiveis. \nValor solicitado: R$ " + String.format("%.2f",vlrSaque) + ".\n";
				System.out.printf(msg);
				JOptionPane.showMessageDialog(null,msg,"Alerta",3);
			}
		}
		else {
			JOptionPane.showMessageDialog(null,"Digite um valor valido","Alerta",3);
		}
	}

	public void depositar(double vlrDeposito){
		if (vlrDeposito >= 0) {
			
			if (vlrDeposito >= saldoDevedor){
				saldoTotal += vlrDeposito-saldoDevedor;
				saldoDevedor = 0;
				}
			else if (vlrDeposito < saldoDevedor){
				saldoDevedor -= vlrDeposito;
			}
			
		}
		else {
			JOptionPane.showMessageDialog(null,"Deposite um valor valido","Alerta",3);
		}
	}




}