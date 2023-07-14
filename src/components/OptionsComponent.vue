<script lang="ts">
export default {
  methods: {
    showNotification() {
      this.$toast.show({ headline: 'Options API via method' })
    }
  }
}
</script>

<template>
  <div>
    <h3>Options</h3>
    <button @click="$toast.show({ headline: 'Options API' })">add toast</button>
    <button @click="showNotification">add toast via method</button>
  </div>
</template>
