# optimize
def find_x(n):
    x = 0
    for i in range(n):
        for j in range(2*n):
            x += i+j
    return x
