<script setup>
const route = useRoute();
const notFound = route.params['notfound'].join('/');

// this will set output the same result as doing "setPageLayout('not-found')", but in best practice
definePageMeta({
  layout: 'not-found'
});
</script>

<template>
  <div>
    "{{ notFound }}" was not found
  </div>
</template>