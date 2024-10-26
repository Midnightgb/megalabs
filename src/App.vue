<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Mi Aplicación Vue</h1>
    <Button>Click me!</Button>
    <TableComp />
  </div>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import TableComp from '@/components/layout/TableComp.vue'
</script>
