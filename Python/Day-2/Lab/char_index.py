#!/usr/bin/python3

def char_index(text, char):
    """function that takes text and return a list of char indexs"""

    index_list = []
    for index, ch in enumerate(text):
        if ch == char:
            index_list.append(index)
    return index_list



if __name__ == "__main__":
    print(char_index("This is javaScript", "i"))
