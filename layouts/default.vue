<script setup>
// testing layout lifecycle (Layout is unmounted when not in-use)
const counter = ref(0);
let intervalId = null;
onMounted(() => {
  intervalId = setInterval(() => {
    counter.value++;
  }, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});

</script>

<template>
  <div>Layout's Header</div>
  My Counter: {{ counter }}

  <br>
  <slot name="header">
    My Default Header
  </slot>
  <slot/>
</template>