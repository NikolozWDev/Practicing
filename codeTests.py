@test.describe('Fixed Tests')
def fixed_tests():
    @test.it('Simple Cases')
    def example_cases():
        test.assert_equals(powers(1), [1])
        test.assert_equals(powers(5), [1, 4])
        test.assert_equals(powers(7), [1, 2, 4])
        test.assert_equals(powers(8), [8])
        test.assert_equals(powers(10), [2, 8])

        test.assert_equals(powers(21), [1, 4, 16])
        test.assert_equals(powers(53), [1, 4, 16, 32])
        test.assert_equals(powers(63), [1, 2, 4, 8, 16, 32])
        test.assert_equals(powers(99), [1, 2, 32, 64])
        test.assert_equals(powers(100), [4, 32, 64])
