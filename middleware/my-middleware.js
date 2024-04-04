export default defineNuxtRouteMiddleware((to, from) => {
    console.log(`Coming from: ${to.path}, to: ${from.path}`);
});