<template>
  <TheNavbar />
  <router-view />
  <TheFooter />
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped></style>
