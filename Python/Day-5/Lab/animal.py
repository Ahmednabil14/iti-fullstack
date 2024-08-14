#!/usr/bin/python3

class Animal:
    def __init__(self):
        pass

    def eat(self):
        print("i am reating")
    
    def move(self):
        print("i am moving")
    
    def speak(self):
        print("i am speaking")

    

class Cat(Animal):
    def __init__(self):
        super().__init__()
    
    def meow(self):
        print("meow meow meow")

    def eat(self):
        print("i am eating dry food")