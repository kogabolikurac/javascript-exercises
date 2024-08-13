function repeatString(word, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += word
    }

    if (times < 0) return "ERROR";

    return result

  }

module.exports = repeatString; // Export the function