<script setup>
import Child from './Child.vue';
</script>

<template>
    <div>
        Parent
    </div>

    <Child>
        <template #my_slot>
            From Parent
        </template>
        <template #my_other_slot>
            From Parent Again
        </template>
    </Child>
</template>