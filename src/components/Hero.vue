<template>
<div id="nav">
<div x-data="{ open: false }" class="relative bg-gray-900 overflow-hidden">
  <div class="max-w-screen-xl mx-auto bg-scroll">
    <div class="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      
      <Nav />
      <div x-show="open" x-transition:enter="duration-150 ease-out" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md">
          <div class="rounded-lg bg-gray-900 shadow-xs overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="" />
              </div>
              <div class="-mr-2">
                <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Home</a>
              <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">About Us</a>
              <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Locations</a>
              <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Supplements</a>
            </div>
            <div>
              <a href="#" class="block w-full px-5 py-3 text-center font-medium text-white bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>

      <Homeside />
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
  <Carousel/>
  </div>
</div>
</div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Homeside from '@/components/Homeside'
import Nav from '@/components/Nav'

    export default {
        components: { Carousel, Homeside, Nav},
    data() {
        return {
           isOpen: false,
        links: [
                { icon: "home", text: "Home", route: "/" },
                { icon: "store", text: "About", route: "/About" },
                { icon: "storage", text: "Locations", route: "/Gyms" },
                { icon: "work", text: "Supplements", route: "/supplements" },
                {
                  icon: "mdi-account-group-outline",
                  text: "LogIn",
                  route: "/beneficiary"
                },
                // { icon: "lock", text: "Change Password", route: "/ChangePassword" }
            ]
        }
    }
        
    }
</script>

<style lang="scss" scoped>
</style>