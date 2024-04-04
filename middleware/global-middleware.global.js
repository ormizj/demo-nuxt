export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Running Global Middleware');
});