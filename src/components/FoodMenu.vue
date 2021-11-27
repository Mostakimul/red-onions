<template>
  <section class="container py-10">
    <h2 class="text-center text-3xl font-semibold pb-5">Our menu</h2>
    <!-- menu selection -->
    <div class="flex justify-center items-center space-x-3">
      <button
        @click="filterMealType('breakfast')"
        class="bg-green-600 hover:bg-green-700 py-1 px-5 rounded-full shadow font-medium text-gray-50 cursor-pointer"
      >Breakfast</button>
      <button
        @click="filterMealType('lunch')"
        class="bg-green-700 hover:bg-green-600 py-1 px-5 rounded-full shadow font-medium text-gray-50 cursor-pointer"
      >Lunch</button>
      <button
        @click="filterMealType('dinner')"
        class="bg-green-600 hover:bg-green-700 py-1 px-5 rounded-full shadow font-medium text-gray-50 cursor-pointer"
      >Dinner</button>
    </div>
    <!-- Food render -->
    <section class="grid grid-cols-3 gap-3 py-5">
      <div v-for="menu in foodMenus" :key="menu.id">
        <food-item :menu="menu"></food-item>
      </div>
    </section>
  </section>
</template>

<script>
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useMenu } from "../store";
import FoodItem from "./FoodItem.vue"

export default {
  components: { FoodItem },
  setup() {
    const allMenus = useMenu()
    const { menus } = storeToRefs(allMenus)
    let foodMenus = ref(menus.value);

    // filtering menus onClick
    const filterMealType = (mealType) => {
      const filteredMeal = menus.value.filter((menu) => menu.type === mealType)
      foodMenus.value = filteredMeal
    }

    // Slicing the menu into 6
    onMounted(() => {
      foodMenus.value = foodMenus.value.slice(0, 6)
    })


    return { menus, foodMenus, filterMealType };
  },

}
</script>