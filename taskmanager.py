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
