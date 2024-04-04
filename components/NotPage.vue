<script setup>
const globalState = useState('globalState');
</script>

<template>
  <div>
    This component is automatically imported and contains the global state: {{ globalState }}
  </div>
</template>