<template>
  <TheHeader />
  <FoodMenu />
  <ChooseUs />
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import FoodMenu from '@/components/FoodMenu.vue';
import ChooseUs from '../components/ChooseUs.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    FoodMenu,
    ChooseUs,
    TheFooter
  },
  setup() {
  }
}
</script>
