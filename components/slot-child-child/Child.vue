<script setup>
import GrandChild from './GrandChild.vue';
</script>

<template>
    <div>
        Child
    </div>

    <GrandChild>
        <!-- Forward slots to GrandChild -->
        <template v-for="(slotFn, slotName) in $slots" #[slotName]>
            <slot :name="slotName" />
        </template>
    </GrandChild>
</template>