// example for making the request: "http://localhost:3000/api/test"
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const body = await readBody(event);
    return `Test PUT handler ${JSON.stringify(query)}, ${JSON.stringify(body)}`;
});