// example for making the request: "http://localhost:3000/api/test"
export default defineEventHandler((event) => {
    console.log('Private Data');
    return 'Test GET handler';
});