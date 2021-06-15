import { connectToDatabase } from '../util/mongodb';

export function tokenIsValid(token) {
    if (token.length !== 24) {
        // Token is not valid
        return 0
    }

    // Token is valid
    return 1
}

export async function connectDatabase() {
    try {
        const { db } = await connectToDatabase();
        return db
    } catch (error) {
        return 0
    }
}