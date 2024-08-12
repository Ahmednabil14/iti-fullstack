#!/usr/bin/python3

def convert_into_dict(list):
    """function that convert a list of names into sorted dictionary which key is the Alpha. and value
is a list of names corresponding to this alpha"""

    dict = {}

    for item in sorted(list, key=str.lower):
        alpha = item[0].lower()
        dict[alpha] = [item]
    return (dict)


if __name__ == "__main__":
    print(convert_into_dict(['ahmed', 'fatma', 'Ibrahm']))
