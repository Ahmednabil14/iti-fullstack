#!/usr/bin/python3
from bank import Account, Bank, BankCustomer, Customer

bank1 = Bank(1, "al ahly")
bank2 = Bank(2, "masr")

cus1 = Customer(1, "ahmed")
cus2 = Customer(2, "nabil")

acc1 = Account(1, 1000, bank1, cus1)
acc2 = Account(2, 5000, bank2, cus2)



# acc2.transfer(acc1, 500)
# acc1.balance()
# acc2.balance()

print(acc1)