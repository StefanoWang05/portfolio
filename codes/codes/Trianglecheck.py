#Is triangle
a= int(input('Choose a length for a: \n'))
b= int(input('Choose a length for b:\n'))
c= int(input('Choose a length for c:\n'))
def is_triangle(a,b,c) :
    if a>(b+c):
        print ('no')
    if b>(a+c):
        print ('no')
    if c>(a+b):
        print ('no')
    else: print('yes')
is_triangle(a,b,c)
    
