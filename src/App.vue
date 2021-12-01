<template>
  <div class="container py-3">
    <div class="flex justify-between items-center">
      <!-- logo -->
      <div>
        <router-link to="/">
          <img src="./assets/logo2.png" alt="logo" class="w-1/4" />
        </router-link>
      </div>
      <div class="space-x-3">
        <!-- routes -->
        <router-link :to="{ name: 'Login' }" class="font-semibold">Login</router-link>
        <router-link :to="{ name: 'Register' }" class="mk-nav">Register</router-link>
        <!-- cart icon -->
        <svg
          class="w-9 h-9 inline bg-green-700 rounded-full text-gray-50 p-2"
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
        </svg>
      </div>
    </div>
  </div>
  <router-view />
</template>
