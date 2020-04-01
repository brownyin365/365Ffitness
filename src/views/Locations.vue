<template>
  <div id="app">
    <div id="training" class="bg-gray-900">
      <div class="bg-transparent">
        <NavBar />
      </div>

      <div>
        <Carousel />
      </div>
      <!-- <div class="-mb-64">
        <h1 class="text-white">Who we are</h1>
      </div> -->
      <div class="pt-24 mx-20">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="rounded-lg md:w-56 h-64"
              src="../assets/images/mainpic5.jpg"
              alt="Woman paying for a purchase"
            />
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >Finding customers for your new business</a>
            <p
              class="mt-2 text-gray-600"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis porro dolore, explicabo maiores ex temporibus, aliquid nobis blanditiis aut laborum officia ipsam deserunt nesciunt quia. Nulla eligendi reiciendis impedit accusantium.</p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
export default {
  components: { NavBar, Carousel }
};
</script>

<style lang="scss" scoped>
</style>