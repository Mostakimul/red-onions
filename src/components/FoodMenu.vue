<template>
  <section class="container py-10">
    <h2 class="text-center text-3xl font-semibold pb-5">Our menu</h2>
    <!-- menu selection -->
    <div class="flex justify-center items-center space-x-3">
      <button
        type="button"
        class="bg-green-600 hover:bg-green-700 py-1 px-5 rounded-full shadow font-medium text-gray-50"
      >Breakfast</button>
      <button
        class="bg-green-700 hover:bg-green-600 py-1 px-5 rounded-full shadow font-medium text-gray-50"
      >Lunch</button>
      <button
        class="bg-green-600 hover:bg-green-700 py-1 px-5 rounded-full shadow font-medium text-gray-50"
      >Dinner</button>
    </div>
    <!-- Food render -->
    <section class="grid grid-cols-3 gap-3 py-5">
      <div v-for="menu in homeMeal" :key="menu.id">
        <food-item :menu="menu"></food-item>
      </div>
    </section>
  </section>
</template>

<script>
import { storeToRefs } from "pinia";
import { useMenu } from "../store";
import FoodItem from "./FoodItem.vue"

export default {
  components: { FoodItem },
  setup() {
    const allMenus = useMenu()
    const { menus } = storeToRefs(allMenus)


    return { menus, homeMeal: allMenus.homeMeal };
  },

}
</script>