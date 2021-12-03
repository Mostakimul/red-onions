<template>
  <div class="container">
    <div v-if="singleMeal">
      <div class="grid grid-cols-2 gap-5 items-center">
        <!-- details -->
        <div>
          <h2>{{ singleMeal.name }}</h2>
          <p>{{ singleMeal.details }}</p>
          <p>{{ singleMeal.price }}</p>
        </div>
        <!-- image -->
        <div>
          <img :src="singleMeal.image" :alt="singleMeal.image" class="w-5/6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { computed } from "vue";
import { useRoute } from "vue-router"
import { useMenu } from "../store"

export default {
  setup() {
    const route = useRoute();
    const allMenus = useMenu();

    const singleMeal = computed(() => {
      return allMenus.$state.menus.find((item) => item.id === parseInt(route.params.id));
    })

    return { singleMeal }
  }
}
</script>