import math
import random
from resources import *

for i in range(length):
    select = random.randint(1,5)
    if select==1:
        select = random.randrange(1,len(lower))
        result+= list(lower)[select]
    elif select==2:
        select = random.randrange(1,len(upper))
        result+= list(upper)[select]
    elif select==3:
        select = random.randrange(1,len(numbers))
        result+= list(numbers)[select]
    elif select==4:
        select = random.randrange(1,len(usualSymbols))
        result+= list(usualSymbols)[select]
    else:
        select = random.randrange(1,len(dangerousSymbols))
        result+= list(dangerousSymbols)[select]

print(result)
    