/*
Faça um programa que contenha um menu com 4 opções:
1 – calcular o fatorial de um número dado
2 – calcular a raiz quadrada de um número dado
3 – imprimir a tabuada completa de 1 a 10
4 – sair do programa
*/
import java.util.Scanner;

public class Programa{
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[]  args){
		int selecao = 0;		
	
		
		while(selecao!=4){
			selecao = mostraMenu();	
			if(selecao > 4 ){
				System.out.println("\n- Digite um valor válido\n");
			}
			else {
				System.out.printf("\nVocê digitou: %d\n\n",selecao);
				switch(selecao){
					case 1:
						System.out.println("FATORIAL");
						fatorial();
						break;
					case 2:
						System.out.println("RAIZ QUADRADA");
						raizQuadrada();
						break;
					case 3:
						System.out.println("TABUADA");
						tabuada();
						break;
				}
			}
		}
		
		
		
	}
	
	public static int mostraMenu(){
	
		int selecao;
		System.out.print("  ===== Menu =====\n\n");
		System.out.println("  (1) calcular o fatorial de um número dado");
		System.out.println("  (2) calcular a raiz quadrada de um número dado");
		System.out.println("  (3) imprimir a tabuada completa de 1 a 10");
		System.out.println("  (4) sair do programa");
		System.out.print("\n  Digite a opção desejada: ");
		selecao = sc.nextInt();
		System.out.println("================");
		return selecao;
	}
	
	public static void fatorial(){
		int numeroDigitado;
		double totalizador = 1;
		
		System.out.print("\nDigite um numero para calcular seu fatorial: ");
		numeroDigitado = sc.nextInt();
		
		if(numeroDigitado < 0){
			System.out.println("\nNão é possível calcular fatorial de um número negativo.");
		}
		else {
			for(int temp = numeroDigitado; temp>0; temp--){
				totalizador *= (double)temp;
				System.out.print(temp);
				if (temp > 1) {System.out.print(" x ");} //printa divisor
			}
			System.out.printf("\nFatorial de %d:\t %.0f \n\n",numeroDigitado, totalizador);
		}
		espera();
		
	}
	
	public static void raizQuadrada(){
		double numeroDigitado;
		
		System.out.print("\nDigite um numero para calcular sua raiz quadrada: ");
		numeroDigitado = sc.nextDouble();
		System.out.printf("\nRaiz quadrada de %.2f:\t %.2f \n\n",numeroDigitado, numeroDigitado*numeroDigitado);
		espera();
	}
	
	public static void tabuada(){
		int numeroDigitado;
		
		System.out.print("\nDigite um numero para calcular sua tabuada de 1 a 10: ");
		numeroDigitado = sc.nextInt();
		System.out.printf("TABUADA DE %d:\n",numeroDigitado);
		
		for (int multiplicador = 1 ; multiplicador <= 10; multiplicador++){
			int resultado = multiplicador*numeroDigitado;
			System.out.printf("%d x %d = \t %d\n",multiplicador,numeroDigitado,resultado);
		}
		espera();
		
	}
	public static void espera(){
		System.out.print("Aperte Enter para continuar...\n\n");
		sc.nextLine();
		sc.nextLine();
	}
}
