class Human:
    population = 0
    total_ages = 0

    def __init__(self, id, name, age, gender):
        self._id = id
        self._name = name
        self._age = age
        self._gender = gender
        Human.population += 1
        Human.total_ages += self._age

    def eat(self):
        print("i am eating")
    
    def drink(self):
        print("i am drinking")
    
    def sleep(self):
        print("i am sleeping")
    
    def increase_age(self):
        self._age += 1

    def welcom(self):
        if self._gender == "male":
            print(f'hello mr {self._name}')
        elif self._gender == 'female':
            print(f'hello mrs {self._name}')
    
    @classmethod
    def avg_age(cls):
        return cls.total_ages / cls.population


class Employee(Human):
    company_name = "iti"
    manager = "ahmed"

    def __init__(self, id, name, age, gender, salary):
        super().__init__(id, name, age, gender)
        self._salary = salary
    
    @staticmethod
    def manager(name):
        if name == Employee.manager:
            print("i am manager")
        else:
            print("i am not manager")

    
    def total_salary(self):
        return self._salary + (.1 * self._salary)
    
    