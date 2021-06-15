export function tokenIsValid(token) {
    if (token.length !== 24) {
        // Token is not valid
        return 0
    }

    // Token is valid
    return 1
}