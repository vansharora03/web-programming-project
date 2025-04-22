export async function getUserIdFromToken(token: string): Promise<string | null> {
    const tokenRecord = token;
    try {
        if (!tokenRecord) {
            console.error('Token not found');
            return null;
        }
        return tokenRecord
    } catch (error) {
        console.error('Error fetching userId from token:', error);
        return null;
    }
}