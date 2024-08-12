#!/usr/bin/python3
import math


def calc_area(shape, dim1, dim2=0):
    if shape == 'r' and dim1 and dim2:
        return (dim1 * dim2)
    elif shape == 's' and dim1:
        return (dim1 ** 2)
    elif shape == 't' and dim1 and dim2:
        return (.5 * dim1 * dim2)
    elif shape == "c" and dim1:
        return (math.pi * (dim1 ** 2))


if __name__ == "__main__":
    print(calc_area('r', 5, 3))
    print(calc_area('s', 5))
    print(calc_area('t', 5, 3))
    print(calc_area('c', 5))
