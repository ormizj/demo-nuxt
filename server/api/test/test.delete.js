export default defineEventHandler((event) => {
    const query = getQuery(event);
    return `Test DELETE handler ${JSON.stringify(query)}`;
});