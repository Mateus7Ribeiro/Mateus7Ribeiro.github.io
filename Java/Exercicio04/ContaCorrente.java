
public abstract class ContaCorrente{
	protected double saldoTotal = 0;

	public void sacar(double vlrSaque){
		saldoTotal -= vlrSaque;
	}
	public void depositar(double vlrDeposito){
		saldoTotal += vlrDeposito;
	}

	public double obterSaldo(){
		return saldoTotal;
	}

}