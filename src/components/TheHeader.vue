<template>
  <div>
    <div class="hero-back hero-height">
      <div class="h-full grid place-content-center">
        <h1 class="text-5xl font-semibold text-gray-800">Best food in the town!</h1>
        <button
          class="bg-green-700 hover:bg-green-600 transition duration-300 rounded-full shadow py-2 px-3 my-5 font-semibold text-gray-50 w-2/4 mx-auto"
        >More Foods</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style>
.hero-back {
  background-image: url(../assets/bannerbackground.png);
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>