@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(how_much_coffee([]), 0)
        test.assert_equals(how_much_coffee(['cw']), 1)
        test.assert_equals(how_much_coffee(['CW']), 2)
        test.assert_equals(how_much_coffee(['cw','CAT']), 3)
        test.assert_equals(how_much_coffee(['cw','CAT','DOG']), 'You need extra sleep')
        test.assert_equals(how_much_coffee(['cw','CAT', 'cw=others']), 3)

# optimize
def find_x(n):
    x = 0
    for i in range(n):
        for j in range(2*n):
            x += i+j
    return x
