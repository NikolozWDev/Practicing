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
