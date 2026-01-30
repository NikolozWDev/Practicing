@test.describe("minimum_percentage")
def tests():
    @test.it("Sample Tests")
    def samples():
        tests = (
            ( (76,),             76 ),
            ( (50, 100),         50 ),
            ( (50, 50),           0 ),
            ( (100, 100, 100),  100 ),
            ( (65, 80, 80, 90),  15 )
        )
        for foods, expected in tests:
            message = f"Testing for {foods}"
            submitted = minimum_percentage(foods[:])
            test.assert_equals(submitted, expected, message)

@test.describe('Example tests')
def example_tests():

    @test.it('Sample test')
    def sample_tests():

        rope = get_rope_length(200, 0.5)
        test.assert_equals(rope, 115)

        rope = get_rope_length(10, 0.5)
        test.assert_equals(rope, 5)


    @test.it('Do not eat anything')
    def test_edge_no_eat():
        rope = get_rope_length(200, 0.0)
        test.assert_equals(rope, 0);


    @test.it('Eat all grass')
    def test_edge_eat_all():
        rope = get_rope_length(200, 1.0)


def _test_teknonymize(input_, actual, expected):
    if actual != expected:
        print(f"<LOG::-Input>{input_}")
        print(f"<TAB::-Actual>{json.dumps(actual, default=str)}")
        print(f"<TAB::-Expected>{json.dumps(expected, default=str)}")
        test.fail("Test failed")
    else:
        test.assert_equals(actual, expected)


@test.describe("Sample Tests")
def _():
    def get_example():
        persons = [_person() for _ in range(8)]
        dates = ['1000-01-01', '1020-01-01', '1021-02-01', '1023-11-28', '1047-01-01', '1043-11-01', '1045-01-01', '1046-01-01']
        sexes = ['m', 'f', 'm', 'm', 'f', 'f', 'f', 'm']
        names = 'abcdhefg'
        dates = map(datetime.fromisoformat, dates)
        for p, n, d, s in zip(persons, names, dates, sexes):
            p['name'] = n


@test.describe('Walk Validator - fixed tests')
def sample_tests():
    @test.it ("should return true for a valid walk")
    def _():
        test.assert_equals(is_valid_walk(['n','s','n','s','n','s','n','s','n','s']), True, 'should return True');
    @test.it ("should return false if walk is too long")
    def _():
        test.assert_equals(is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']), False, 'should return False');
    @test.it ("should return false if walk is too short")
    def _():
        test.assert_equals(is_valid_walk(['w']), False, 'should return False');
    @test.it ("should return false if walk does not bring you back to start")
    def _():        
        test.assert_equals(is_valid_walk(['n','n','n','s','n','s','n','s','n','s']), False, 'should return False');

import codewars_test as test
from solution import luck_check

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(luck_check('5555'), True)

from solution import carmichael
import codewars_test as test

@test.describe("Fixed tests")
def tests():
    
    @test.it("Should obtain correct result for fixed edge tests with where n is not a positive integer n >= 1")
    def test_carmichael_fixed_edge():
        TESTS = [(0,0),(-3,0),(-4003,0),(-1339185,0)]
        for args in TESTS:
            n, exp = args
            test.assert_equals(carmichael(n), exp, "Returned solution incorrect for input value of n = {}. The correct answer is {}".format(n, exp))
        
    @test.it("Should obtain correct Carmichael function for fixed tests with small n")
    def test_carmichael_fixed_small():
        TESTS = [(1,1),(2,1),(4,2),(5,4),(7,6),(15,4),(30,4),(93,30),(73,72),(49,42),(870,28),(765,48),(118,58),(727,726),(643,642)]
        for args in TESTS:
            n, exp = args

import codewars_test as test
from solution import find_lineup

@test.describe("Example Tests")
def example_tests():
    
    @test.it("Valid Cases") 
    def run_tests():
        
        test.assert_equals(find_lineup([1, 2, 0]), [3, 1, 2])
        test.assert_equals(find_lineup([1, 4, 2, 6, 8, 0, 5, 7, 3]), [6, 1, 3, 9, 2, 7, 4, 8, 5])
        test.assert_equals(find_lineup([0]), [1])

import codewars_test as test
from solution import max_fork

@test.describe("Example Tests")
def example_tests():
    
    @test.it("No Forks")
    def run_tests():
        
        ## No valid knight moves.
        board1 = [['.', 'Q', '.', '.', '.', 'K', '.', '.'],
                  ['.', '.', '.', 'N', '.', '.', '.', '.'],
                  ['.', 'P', '.', '.', '.', 'B', '.', '.'],
                  ['.', '.', 'R', '.', 'P', '.', '.', '.'],   
                  ['.', '.', '.', '.', '.', '.', '.', '.'],
                  ['.', 'P', '.', '.', '.', 'p', '.', 'p'],   
                  ['.', '.', 'R', '.', 'p', '.', '.', '.'],
                  ['N', '.', '.', '.', '.', '.', 'n', '.']]

import codewars_test as test
from solution import is_valid_IP

@test.describe("Sample tests")
def _():
    @test.it("Tests")
    def __():

import codewars_test as test
from solution import doors

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(doors(5), 2)
        test.assert_equals(doors(10), 3)
        test.assert_equals(doors(100), 10)

import codewars_test as test
from solution import letters_to_numbers

@test.describe("Sample tests")
def sample_tests():
    test_cases = [
        ["I Love You", 170],
        ["ILoveYou", 170],
        ["ARE YOU HUNGRY?", 356],
        ["oops, i did it again!", 152],
        ["Give me 5!", 73],
        ["Give me five!", 110],
    ]

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
