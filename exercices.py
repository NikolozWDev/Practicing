from solution import de_nico

@test.describe('Fixed Tests')
def fixed_tests():
    @test.it('Simple Cases')
    def example_cases():
        test.assert_equals(de_nico("crazy","cseerntiofarmit on  "),"secretinformation")
        test.assert_equals(de_nico("crazy","cseerntiofarmit on"),"secretinformation")
        test.assert_equals(de_nico("abc","abcd"),"abcd")
        test.assert_equals(de_nico("ba","2143658709"), "1234567890")
        test.assert_equals(de_nico("a","message"),"message")
        test.assert_equals(de_nico("key","eky"),"key")

#!/bin/bash
playPass () {
    # your code
}
playPass "$1" "$2"
import codewars_test as test
from solution import play_pass

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases()

F(0) = 1
M(0) = 0
F(n) = n - M(F(n - 1))
M(n) = n - F(M(n - 1))
