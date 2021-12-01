<template>
  <div class="p-5 text-center">
    <img :src="menu.image" :alt="menu.name" class="w-4/5 mx-auto" />
    <h2 class="font-medium text-xl">{{ menu.name }}</h2>
    <p>{{ menu.details.slice(0, 70) }}</p>
    <p class="font-medium text-lg">$ {{ menu.price }}</p>
    <router-link :to="{ name: 'FoodDetails', params: { id: menu.id } }">Order Now</router-link>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
    },
  },
  setup() {
    return {}
  }
}
</script>