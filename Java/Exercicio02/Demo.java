import java.lang.reflect.*;
public class Demo {
   public static void main(String[] args) {
      Class c = Endereco.class;
      Method[] methods = c.getDeclaredMethods();
      for(int i = 0; i < methods.length; i++) {
         System.out.println("The method is: " + methods[i].toString());
      }
   }
}