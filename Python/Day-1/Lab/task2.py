#!/usr/bin/python3

first_number = input("please enter the first number: ")
second_number = input("please enter the second number: ")
if first_number.isdigit() and second_number.isdigit():
    print("{} / {} = {}".format(first_number, second_number,
                                int(first_number)/int(second_number)))
elif not first_number.isdigit():
    print("first number is not a digit")
else:
    print("second number is not a digit")
