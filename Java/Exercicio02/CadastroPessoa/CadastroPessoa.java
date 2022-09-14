import java.util.Scanner;

class CadastroPessoa{
	public static void main(String[] args){
	System.out.println("Hello Word");
	Pessoa pessoa = new Pessoa("Masdas","12","56465454665");
	System.out.println(pessoa.getNome());
	System.out.println(pessoa.getCpf());
	
	System.out.print("Digite novo nome: ");
	Scanner sc = new Scanner(System.in);
	//String temp = sc.nextLine();
	//pessoa.setNome(temp);
	System.out.println(pessoa.getNome());
	boolean bo;
	char c = 66;
	byte b;
	short s;	
	int i;
	long l;
	float f;
	double d;
	System.out.println(c);
	System.out.print((int)c);
	System.out.println("=================");
	
	System.out.println("=============================");
	System.out.println("ponto flutuante"); 
	System.out.println("=============================");
	d = 125.32;
	System.out.println("valor de d = " + d);
	d = 125.32d;
	System.out.println("valor de d = " + d);
	d = 125.40f;
	System.out.println("valor de d = " + d);
	System.out.println(" --------------------------------------------------- ");
	
	
	f = (float)125.32000000000000000000;
	System.out.printf("valor de f = %.35f%n", f);
	f = 125.32f;
	System.out.printf("valor de f = %.35f%n", f);
	f = (float)125.32d;
	System.out.printf("valor de f = %.35f%n", f);
	System.out.println(" --------------------------------------------------- ");
	
	int ano = 4;
	
	if ( ano < 0) {
		System.out.println("Não é um ano!");
	} else if ( (ano%4==0 && ano%100!=0) || (ano%400==0) ) 
		{ System.out.println("É bissexto!");
	} else {
			System.out.println("Não é bissexto!");
	}
	
		//exemplo com while
		int x = 0;
		while (x < 10) {
			System.out.println ("item " + x); 
			x++;
		}
	//esse tá bem fácil.
for ( x = 0; x < 10; x++ ) { 
	System.out.println ("item " + x);
}
	System.out.println(" --------------------------------------------------- ");
	//esse já não é tão simples só de olhar.
	int y;
	for (  x = 0, y = 24; x < 10 && (y % 2 == 0); x++, y-- ) { 
		System.out.println ("aa"+ x + y);
	}
	
	System.out.println(" --------------------------------------------------- ");
	
	}
}