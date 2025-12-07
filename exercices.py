import codewars_test as test
from solution import round_by_2_decimal_places
from decimal import Decimal

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')

import codewars_test as test
from solution import *

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(FileNameExtractor.extract_file_name("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"),"FILE_NAME.EXTENSION")
        test.assert_equals(FileNameExtractor.extract_file_name("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"),"FILE_NAME.EXTENSION")


import codewars_test as test
from preloaded import validate
from solution import dance

@test.describe('Example test cases')
def example_tests():
    def run_test(map_str, optimal, desc=''):
        print(desc)
        print(f'Map: \n{map_str}')
        solution = dance(map_str)
        
        if not isinstance(solution, str):
            test.expect(False, "You did not return a string")
            return
        
        valid = validate(map_str, solution)
        print(f"\n \nYour moves: {solution}")
        print("Folded: ")
        print('\n'.join(' '.join(row) for row in valid[0]))
        
        if valid[1] is not True:
            test.expect(False, valid[1])
            return

rom solution import generate_hashtag
import codewars_test as test

@test.describe("Fixed tests")
def tests():
    
    @test.it("Should generate the correct hashtag in fixed tests")
    def test_correct_hashtag_fixed():
        test.assert_equals(generate_hashtag('Codewars'), '#Codewars', 'Should handle a single word.')
examples:
	" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

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
