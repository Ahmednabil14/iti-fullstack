#!/usr/bin/python3

def multi_table(multiplier):
    """function that generate a multiplication table from 1 to the multiplier passed"""

    list = []

    for i in range(1, multiplier+1):
        interior_list = []
        for j in range(1, i + 1):
            interior_list.append(i*j)
        list.append(interior_list)
    return (list)


if __name__ == "__main__":
    print(multi_table(3))
