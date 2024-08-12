#!/usr/bin/python3
"""module for file operations"""
from sys import exc_info


def read(filepath, option):
    """fuction that read data from files
        args:
            filepath: which is the file path
            option: can be one of these options:
                "all": to get all dat
                int: to get particular number of characters
                "line": to get first line
                "lines": to get a list of lines of data
    """

    try:
        file = open(filepath, 'r')
        if file.readable():
            if option == "all":
                return file.read()
            elif type(option) == int:
                return file.read(int(option))
            elif option == "line":
                return file.readline()
            elif option == "lines":
                return file.readlines()
            else:
                print("Invalid option")
        else:
            print("File is not readable")
    except Exception:
        print(exc_info())
    finally:
        file.close()


def write(filepath, content):
    """function to write into a file

    Keyword arguments:
    filepath -- the file path
    content -- the content to be written (string or list of strings)
    """

    try:
        file = open(filepath, 'w')
        if file.writable():
            if isinstance(content, str):
                file.write(content)
            elif isinstance(content, list):
                file.writelines(content)
            else:
                print("Invalid type")
        else:
            print("File is not writable")
    except Exception:
        print(exc_info())
    finally:
        file.close()


def append(filepath, newcontent):
    """function that appending content into file

    Keyword arguments:
    filepath -- the file path
    newcontent: the appending content (string or list of strings)
    """

    try:
        file = open(filepath, 'a')
        if file.writable():
            if isinstance(newcontent, str):
                file.write(newcontent)
            elif isinstance(newcontent, list):
                file.writelines(newcontent)
            else:
                print("Invalid content type")
        else:
            print("File is not writable")
    except Exception:
        print(exc_info())
    finally:
        file.close()
