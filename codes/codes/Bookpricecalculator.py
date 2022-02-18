#2 Suppose the cover price of a book is $24.95, but bookstores get a 40% discount. Shipping costs
#  $3 for the first copy and 75 cents for each additional copy. What is the total wholesale cost for 60 copies?

bookprice = 24.95
numberofbooks=60

bookstoreprice = (bookprice*0.60)*numberofbooks
shippingfee = (3.0+(0.75*(numberofbooks-1)))
total_cost = bookstoreprice+shippingfee

print('The total cost is: £',total_cost) 
