#!/usr/bin/python3

class Bank:
    def __init__(self, id, name):
        self.id = id
        self.name = name


class Customer:
    def __init__(self, national_id, name):
        self.__id = national_id
        self.__name = name

    @property
    def name(self):
        return self.__name
    

class Account:
    def __init__(self, acc_num, money, bank_obj, customer_obj):
        self.__acc_num = acc_num
        self.__money = money
        self.__bank = bank_obj
        self.__owner = customer_obj

    def transfer(self, account_obj, money_to_transfer):
        if account_obj.__money >= money_to_transfer:
            account_obj.__money += money_to_transfer
            self.__money -= money_to_transfer
        else:
            print("you have not enough money")

    def balance(self):
        print("account balance is : {}$".format(self.__money))

    def __str__(self):
        return """acc_id: {}
customer_obj: {}
balance: {}
bank_obj: {}
""".format(self.__acc_num, self.__owner.name, self.__money, 
                                   self.__bank.name)


class BankCustomer:
    def __init__(self, bank_obj, customer_obj):
        self.bank = bank_obj
        self.customer = customer_obj

