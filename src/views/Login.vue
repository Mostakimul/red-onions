<template>
  <div class="container">
    <div>
      <img src="../assets/logo2.png" alt="logo" class="w-1/4 mx-auto" />
    </div>
    <div class="my-5">
      <form class="w-2/4 bg-gray-200 py-5 rounded shadow text-center mx-auto">
        <input
          id="name"
          type="text"
          placeholder="Name"
          class="bg-gray-100 py-2 px-2 my-1.5 w-3/5 rounded"
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          class="bg-gray-100 py-2 px-2 my-1.5 w-3/5 rounded"
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          class="bg-gray-100 py-2 px-2 my-1.5 w-3/5 rounded"
        />

        <button
          class="bg-red-600 hover:bg-red-700 text-gray-50 block w-3/5 text-center mx-auto py-2 my-1.5 rounded shadow"
        >Sign in</button>
      </form>
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