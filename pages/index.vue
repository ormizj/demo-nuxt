<script setup>
const globalState = useState('globalState');
const globalStateIndex = useState('globalStateIndex', () => 'Index State');

</script>

<template>
  <br>
  Index Page
  <div>
    Global State in index.vue: {{ globalState }}
    <br>
    Global State "Index" in index.vue: {{ globalStateIndex }}
  </div>
</template>