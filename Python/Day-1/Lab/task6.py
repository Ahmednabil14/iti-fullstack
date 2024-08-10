#!/usr/bin/python3

first_num = input("please enter first number: ")
second_num = input("please enter second number: ")

if first_num.isdigit() and second_num.isdigit():
    first_num = int(first_num)
    second_num = int(second_num)
    operator = input("please enter the operator +-*/: ")
    if operator in ['+', '-', '*', '/']:
        if operator == '+':
            print(first_num + second_num)
        elif operator == "-":
            print(first_num - second_num)
        elif operator == "*":
            print(first_num * second_num)
        else:
            print(first_num / second_num)
    else:
        print("please enter a valid operator")
else:
    print("please enter a digit numbers")
