<template>
  <section class="container py-10">
    <h2 class="text-center text-3xl font-semibold pb-5">Our menu</h2>
    <!-- menu selection -->
    <div class="flex justify-center items-center space-x-3">
      <p
        class="bg-green-600 hover:bg-green-700 py-1 px-5 rounded-full shadow font-medium text-gray-50"
      >Breakfast</p>
      <p
        class="bg-green-700 hover:bg-green-600 py-1 px-5 rounded-full shadow font-medium text-gray-50"
      >Lunch</p>
      <p
        class="bg-green-600 hover:bg-green-700 py-1 px-5 rounded-full shadow font-medium text-gray-50"
      >Dinner</p>
    </div>
    <!-- Food render -->
    <section class="grid grid-cols-3 gap-3 py-5">
      <div v-for="item in breakMenus" :key="item.id">
        <food-item :item="item"></food-item>
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
    const menues = useMenu()
    // console.log(breakMenus);
    const { breakMenus } = storeToRefs(menues)
    return { breakMenus };
  },

}
</script>