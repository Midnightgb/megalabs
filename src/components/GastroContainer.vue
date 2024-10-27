<template>
  <div id="container">
    <strong>{{ name }}</strong>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

