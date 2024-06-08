var sum = function (value1, value2) {
    if (arguments.length < 2) {
        throw new Error('you need to pass 2 values')
    }
    if (typeof(value1) !== "number" || typeof(value2) !== "number") {
        throw new Error('both values must be numbers')
    }
    return value1 + value2;
  }

