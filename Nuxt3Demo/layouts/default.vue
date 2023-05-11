<template>
    <a-layout theme="light">
        <slot />
    </a-layout>
</template>
<script setup>
    definePageMeta({
        layout: false,
        middleware: 'auth',
    })
</script>
  