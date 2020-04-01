<template>
    <div class="team">
        <div class="py-12 bg-black">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10 uppercase">What Clients are saying</h1>
      <h3 class="leading-6 text-white font-semibold tracking-wide pt-8">
        A better way to spend money
      </h3>
      <!-- <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        It's about your goals - It's what you make of it. The Pulse team excels in different areas of fitness so members can choose from a variety of training styles to mix up your workouts and avoid any plateaus in your training. We'll motivate you, coach you, and hold you accountable. Our passion, dedication, creativity, knowledge and expertise set us apart. We're invested in your success! Visit us for a complimentary training session and experience the right way to train.
      </p> -->
    </div>

    <div class="mt-10">
      <carousel-3d>
        <slide :index="0">
          <div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
              </div>
            </div>
        </slide>
        <slide :index="1">
          <img class="lg:block w-full h-screen object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide2.jpg" alt="" />
          </slide>
          <slide :index="2">
         <img class="lg:block w-full h-screen object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide3.jpg" alt="" />
          </slide>
          <slide :index="3">
          <img class="lg:block w-full h-screen object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide4.jpg" alt="" />
          </slide>
          <slide :index="4">
          <img class="lg:block w-full h-screen object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide5.jpg" alt="" />
          </slide>
          <slide :index="5">
          <img class="lg:block w-full h-screen object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide6.jpg" alt="" />nt
          </slide>
          <slide :index="6">
          <img class="lg:block w-full h-screen object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide3.jpg" alt="" />
          </slide>
      </carousel-3d>
    </div>
  </div>
</div>
    </div>
</template>

<script>
import {Carousel3d, Slide } from 'vue-carousel-3d';
    export default {
        components: { Carousel3d, Slide}
    }
</script>

<style lang="scss" scoped>

</style>