<template>
    <slot />
</template>
<script setup>
    definePageMeta({
        middleware: ["auth"]
    })
</script>
  