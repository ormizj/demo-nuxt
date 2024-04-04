<script setup>
const route = useRoute();
// params keys are declared from the file name ("-" are omitted)
const id = route.params.id;

definePageMeta({
  middleware: 'my-middleware'
});

</script>

<template>
  <div>
    Dynamic Page - {{ id }}
  </div>
</template>