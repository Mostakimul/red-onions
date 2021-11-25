<template>
  <TheHeader />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  setup() {
    const hello = "Hi"

    return { hello }
  }
}
</script>
