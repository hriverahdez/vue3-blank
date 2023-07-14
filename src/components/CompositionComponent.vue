<script setup lang="ts">
import ToastService from '../toastService'

function showNotification() {
  this.$toast.show({ headline: 'Composition API via method' }) // doesn't work

  ToastService.show({ headline: 'Composition API via method' }) // should work?!
}
</script>

<template>
  <div>
    <h3>Composition</h3>
    <button @click="$toast.show({ headline: 'Composition API' })">add toast</button>
    <button @click="showNotification">add toast via method (doesn't work)</button>
  </div>
</template>
