<script setup>
const props = defineProps(['error']);
</script>

<template>
  <div>
    <h1>{{ props.error.statusCode }}</h1>
    <h3>{{ props.error.message }}</h3>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>