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
