<template>
  <TheHeader />
  <FoodMenu />
  <ChooseUs />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import FoodMenu from '@/components/FoodMenu.vue';
import ChooseUs from '../components/ChooseUs.vue';

export default {
  components: {
    TheHeader,
    FoodMenu,
    ChooseUs
  },
  setup() {
  }
}
</script>
