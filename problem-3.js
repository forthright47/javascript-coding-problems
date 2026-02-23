//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    if (typeof omr !== "object" || Array.isArray(omr) || omr === null) {
        return "Invalid";
    }

    let right = omr.right;
    let wrong = omr.wrong;
    let skip = omr.skip;

    if (
        typeof right !== "number" ||
        typeof wrong !== "number" ||
        typeof skip !== "number"
    ) {
        return "Invalid";
    }

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    let score = right - (wrong * 0.5);
    return Math.round(score);
}