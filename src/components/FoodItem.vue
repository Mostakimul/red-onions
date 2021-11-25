<template>
  <div class="p-5 text-center">
    <img :src="item.image" :alt="item.name" class="w-4/5 mx-auto" />
    <h2 class="font-medium text-xl">{{ item.name }}</h2>
    <p>{{ item.details.slice(0, 70) }}</p>
    <p class="font-medium text-lg">$ {{ item.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  setup() {


    return {}
  }
}
</script>