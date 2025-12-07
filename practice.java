class SolutionTest {
  
    @Test
    void testSomething() {
        assertTrue(Kata.validateHello("hello"));
        assertTrue(Kata.validateHello("ciao bella!"));
        assertTrue(Kata.validateHello("salut"));
        assertTrue(Kata.validateHello("hallo, salut"));
        assertTrue(Kata.validateHello("hombre! Hola!"));
        assertTrue(Kata.validateHello("Hallo, wie geht\'s dir?"));
        assertTrue(Kata.validateHello("AHOJ!"));
        assertTrue(Kata.validateHello("czesc"));
        assertTrue(Kata.validateHello("Ahoj"));
        assertFalse(Kata.validateHello("meh"));
    }
}

public class Kata{
  public static boolean validateHello(String greetings){
    //Your code
    return false;
  }
  
}

int sum = 0;
for (int i = 1; i <= 5; i++) {
  sum = sum + i;
}
System.out.println("Sum is " + sum);
