<template>
    <section>
      <p>Page About của {{ user.fullName }}</p>
    </section>
</template>
<script setup>
  const authStore = useAuthStore()
  const user = authStore.user
</script>