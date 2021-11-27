<template>
  <div class="container">
    <div class="text-center">
      <h2 class="text-center text-3xl font-semibold pb-2">Why Choose us!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, nostrum.</p>
    </div>
    <!-- grid -->
    <section class="grid grid-cols-3 gap-3 py-10">
      <div v-for="choice in choices" :key="choice.id">
        <img :src="choice.image" :alt="choice.id" />
        <h2 class="py-2 font-semibold text-xl">
          <img :src="choice.icon" alt="icon" class="inline-block w-8" />
          {{ choice.title }}
        </h2>
        <p class="pl-5">{{ choice.details }}</p>
        <button class="text-green-600 pl-5 font-semibold">See more &rarr;</button>
      </div>
    </section>
  </div>
</template>

<script>
import choose1 from '../assets/Image/choose1.png'
import choose2 from '../assets/Image/choose2.png'
import choose3 from '../assets/Image/choose3.png'
import chooseIcon1 from '../assets/Icon/chooseIcon1.png'
import chooseIcon2 from '../assets/Icon/chooseIcon2.png'
import chooseIcon3 from '../assets/Icon/chooseIcon3.png'
export default {
  setup() {
    const choices = [
      {
        "id": 1,
        "title": "Fast Delivery",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error neque quaerat mollitia animi earum dignissimos aliquid non id porro possimus temporibus reprehenderit ipsum, in natus exercitationem eligendi maxime aliquam?",
        "image": choose1,
        "icon": chooseIcon1
      },
      {
        "id": 2,
        "title": "Fast Delivery",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error neque quaerat mollitia animi earum dignissimos aliquid non id porro possimus temporibus reprehenderit ipsum, in natus exercitationem eligendi maxime aliquam?",
        "image": choose2,
        "icon": chooseIcon2
      },
      {
        "id": 3,
        "title": "Fast Delivery",
        "details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error neque quaerat mollitia animi earum dignissimos aliquid non id porro possimus temporibus reprehenderit ipsum, in natus exercitationem eligendi maxime aliquam?",
        "image": choose3,
        "icon": chooseIcon3
      }
    ]

    return { choices }
  }
}
</script>