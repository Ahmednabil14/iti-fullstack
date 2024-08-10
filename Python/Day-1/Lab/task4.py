#!/usr/bin/python3

word1, word2, word3, word4, word5, word6, word7 = "How", "do", \
    "you", "like", "{}", "so", "far?"

word7 = word7.replace("?", "!")

print(f"{word1} {word2} {word3} {word4}", word5.format("python"), f"{word6} {word7}")
