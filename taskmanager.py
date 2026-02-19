@test.describe('Fixed Tests')
def _():
    @test.it('Simple Cases')
    def _():
        u = LinkedList(1)
        test.assert_equals(list_to_array(u), [1])

        u = LinkedList(4, LinkedList(25, LinkedList(30)))
        test.assert_equals(list_to_array(u), [4, 25, 30])

        u = LinkedList(2, LinkedList(40, LinkedList(43, LinkedList(25, LinkedList(125)))))
        test.assert_equals(list_to_array(u), [2, 40, 43, 25, 125])

def example_tests():
    maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]]
    
    @test.it("Should return Finish")
    def example_test_case1():
        test.assert_equals(maze_runner(maze,["N","N","N","N","N","E","E","E","E","E"]), "Finish")
        test.assert_equals(maze_runner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]), "Finish")
        test.assert_equals(maze_runner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]), "Finish")

@test.describe('tests')
def _():
    @test.it('sample tests')
    def _():
        test.assert_equals(is_balanced("(Sensei says yes!)", "()"), True)
        test.assert_equals(is_balanced("(Sensei says no!", "()"), False)

        test.assert_equals(is_balanced("(Sensei [says] yes!)", "()[]"), True)
        test.assert_equals(is_balanced("(Sensei [says) no!]", "()[]"), False)

        test.assert_equals(is_balanced("Sensei says -yes-!", "--"), True)
        test.assert_equals(is_balanced("Sensei -says no!", "--"), False)

@test.describe("Sample tests")
def sample_test():
    @test.it("powerset([1,2])")
    def _():
        test.assert_equals(powerset([1, 2]),
            [[], 
             [2], 
             [1], 
             [1,2]]
        )
    @test.it("powerset([1,2,3])")
    def _():
        test.assert_equals(powerset([1, 2, 3]),
            [[], 
             [3], 
             [2], 
             [2,3], 
             [1], 
             [1,3], 
             [1,2], 
             [1,2,3]]
        )
    @test.it("powerset([1])")
    def _():
        test.assert_equals(powerset([1]),
            [[], 
            [1]]
        )
    @test.it("powerset([125,15,155,15,158])")

@test.describe("interlockable")
def tests():

    @test.it("Sample Tests")
    def sample_tests():
        
        for a, b, expected in ( ( 9, 4,  True ),
                                ( 3, 6, False ),
                                ( 2, 5,  True ),                            
                                ( 7, 1, False ),
                                ( 0, 8,  True ) ):
            
            a_str, b_str = str(a), str(b)
            lena, lenb = len(a_str), len(b_str)
            longer = max(lena, lenb)
            a_str = ' ' * (longer - lena) + a_str
            b_str = ' ' * (longer - lenb) + b_str
