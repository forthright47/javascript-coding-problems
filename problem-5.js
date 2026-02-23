//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    if (str.trim() === "") {
        return "Invalid";
    }

    let words = str.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    let totalCharacters = str.split(" ").join("").length;

    return {
        longwords: longestWord,
        token: totalCharacters
    };
}