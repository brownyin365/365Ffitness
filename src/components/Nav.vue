<template>
  <div>
    <div class="pt-6 px-4 sm:px-6 lg:px-8">
      <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <img class="h-10 w-auto sm:h-24" src="../assets/images/logo.png" alt />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                @click="isOpen = !isOpen"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    v-if="isOpen"
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                  <path
                    v-if="!isOpen"
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 pt-8 uppercase">
          <router-link
            to="/"
            class="font-medium text-white hover:text-gray-500 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >Home</router-link>
          <router-link
            to="/services"
            class="ml-8 font-medium text-white hover:text-gray-500 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >Services</router-link>
          <router-link
            to="/locations"
            class="ml-8 font-medium text-white hover:text-gray-500 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >Locations</router-link>
          <!-- <router-link to="/supplements" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Supplements</router-link> -->
          <router-link
            to="/signin"
            class="ml-8 font-medium text-white hover:text-gray-500 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >Sign In</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>