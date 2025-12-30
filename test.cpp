Describe(Simple_Tests)
{
    It(should_handle_basic_values)
    {
        Assert::That(Carmichael(1), Equals(1));
        Assert::That(Carmichael(9), Equals(6));
        Assert::That(Carmichael(8), Equals(2));
    }
    It(should_handle_big_values)
    {
        Assert::That(Carmichael(983), Equals(982));
        Assert::That(Carmichael(1601), Equals(1600));
        Assert::That(Carmichael(65535), Equals(256));
    }

Describe(ExampleTests)
{
  
    It(FourNodesWithLoopSize3)
    {
        Node n1, n2, n3, n4;
      
      	n1.setNext(&n2);
      	n2.setNext(&n3);
      	n3.setNext(&n4);
      	n4.setNext(&n2);
        
        int actual = getLoopSize(&n1);            
        Assert::That(actual, Equals(3), ExtraMessage("Incorrect answer for 4 nodes: tail of 1 node, and a loop of 3 nodes"));
    }

#include <vector>
#include <utility>

auto generate_pairs(unsigned n) -> std::vector<std::pair<unsigned, unsigned>>
{
    return {};
}
#include <vector>

long sumTwoSmallestNumbers(std::vector<int> numbers)
{
    return 0;
}

Describe(Tests)
{
    It(BasicTest)
    {
        long expected = 13;
        
        long actual = sumTwoSmallestNumbers({ 5, 8, 12, 19, 22 });
    
        Assert::That(actual, Is().EqualTo(expected));
    }
};

#include <string>

class PlayPass
{
  public:
  static std::string playPass(const std::string &s, int n);
};


#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}

for (int i = 0; i < 5; i++) {
  cout << i << "\n";
}
