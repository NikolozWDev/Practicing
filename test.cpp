#include <iostream>
#include <vector>

using namespace std;

void printBoard(const vector<int>& positions, int N) {
    for (int row = 0; row < N; ++row) {
        for (int col = 0; col < N; ++col) {
            if (positions[row] == col)
                cout << "Q ";
            else
                cout << ". ";
        }
        cout << endl;
    }
    cout << endl;
}

bool isSafe(const vector<int>& positions, int row, int col) {
    for (int i = 0; i < row; ++i) {
        int prev_col = positions[i];
        // Check same column or diagonals
        if (prev_col == col || abs(prev_col - col) == abs(i - row))
            return false;
    }
    return true;
}

void solveNQueensUtil(vector<int>& positions, int row, int N, vector<vector<int>>& solutions) {
    if (row == N) {
        solutions.push_back(positions);
        return;
    }
    for (int col = 0; col < N; ++col) {
        if (isSafe(positions, row, col)) {
            positions[row] = col;
            solveNQueensUtil(positions, row + 1, N, solutions);
        }
    }
}

int main() {
    int N = 8; // Change N for different board sizes
    vector<int> positions(N);
    vector<vector<int>> solutions;

    solveNQueensUtil(positions, 0, N, solutions);

    cout << "Total solutions for " << N << "-Queens: " << solutions.size() << endl;
    for (const auto& solution : solutions) {
        printBoard(solution, N);
    }

    return 0;
}

```cpp
#include <iostream>

int main() {
    int n = 10; // Number of terms
    long long a = 0, b = 1, next;

    std::cout << "Fibonacci sequence up to " << n << " terms:" << std::endl;

    for (int i = 1; i <= n; ++i) {
        std::cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }

    std::cout << std::endl;
    return 0;
}
```

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
