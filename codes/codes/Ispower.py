a= int(input('Choose a number for a: \n'))
b= int(input('Choose a numberf for b:\n'))

def is_power(a,b):
    if (a%b==0): 
        print ('True')
    if (a/b==1):
        print ('True')
    else:
        print('False')
is_power(a,b)
