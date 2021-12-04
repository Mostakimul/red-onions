<template>
  <div class="container">
    <div v-if="singleMeal">
      <div class="grid grid-cols-2 gap-5 items-center">
        <!-- details -->
        <div>
          <h2 class="my-5 font-semibold text-2xl">{{ singleMeal.name }}</h2>
          <p>{{ singleMeal.details }}</p>
          <div class="flex my-5">
            <div class="mr-5 font-semibold text-2xl">$ {{ singleMeal.price }}</div>
            <div class="flex items-center">
              <button @click="increaseQuantity" class="px-3">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              <span>{{ quantity }}</span>
              <button @click="decreaseQuantity" class="px-3">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          <button class="bg-red-600 py-1.5 px-5 text-white rounded-full shadow-lg">
            <svg
              class="w-6 h-6 inline-block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>Add
          </button>
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

import { computed, ref } from "vue";
import { useRoute } from "vue-router"
import { useMenu } from "../store"

export default {
  setup() {
    const route = useRoute();
    const allMenus = useMenu();
    const quantity = ref(0);

    const singleMeal = computed(() => {
      return allMenus.$state.menus.find((item) => item.id === parseInt(route.params.id));
    })

    const increaseQuantity = (() => {
      quantity.value++;
    })
    const decreaseQuantity = (() => {
      if (quantity.value !== 0) {
        quantity.value--;
      }
    })

    return { singleMeal, quantity, increaseQuantity, decreaseQuantity }
  }
}
</script>