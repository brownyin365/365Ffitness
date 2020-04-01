<template>
  <header class="sm:flex sm:justify-between sm:item-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0 bg-gray-900">
    <div>
      <img class="h-8" src="../assets/images/logo.png" alt="Robert">
    </div>

    <div class="sm:hidden" link v-for="link in links" :key="link.text" router :to="link.route">
      <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
      </button>
    </div>
    </div>

    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <a href="#" class="block text-grey font-semibold rounded px-2 py-1 hover:bg-gray-800">About Us</a>
      <a href="#" class="block text-grey font-semibold rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:bg-gray-800">Apply to Coach</a>
      <a href="#" class="block text-grey font-semibold rounded px-2 py-1 mt-1 sm:mt-0 sm:ml-2 hover:bg-gray-800">Sign In</a>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,

        links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "store", text: "Store", route: "/About" },
        { icon: "storage", text: "Product", route: "/Gyms" },
        { icon: "work", text: "Stock", route: "/supplements" },
        // {
        //   icon: "mdi-account-group-outline",
        //   text: "Unit",
        //   route: "/beneficiary"
        // },
        // { icon: "lock", text: "Change Password", route: "/ChangePassword" }
      ]
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>