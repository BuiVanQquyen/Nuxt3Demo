<template>
  
</template>
<script setup>
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if(!user){
      navigateTo('/login')
    }
</script>