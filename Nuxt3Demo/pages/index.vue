<template>
  <div>
    <h1 class="text-lg font-semibold">Home</h1>
    <img src="~/assets/images/comingsoon.jpg" class="w-full object-cover"/>
  </div>
</template>
<script setup>
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user){
      navigateTo('/login')
    }
</script>