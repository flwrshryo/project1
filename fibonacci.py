n = 10

a = 0
b = 1

for i in range(n):
    print(a, end=" ")

    t = a
    a = b
    b = t+b
