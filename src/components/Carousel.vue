<template>
    <div>
        <carousel class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" :autoplay="true">
            <slide>
                <div class="main flex justify-center flex-col items-center">
        <img class="lg:block w-full h-screen pt-4 pb-16 object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide1.jpg" alt="" />
     </div>
            </slide>
            <slide>
                <div class="main flex justify-center flex-col items-center">
        <img class="lg:block w-full h-screen pt-4 pb-16 object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide2.jpg" alt="" />
     </div>
            </slide>
              <slide>
                <div class="main flex justify-center flex-col items-center">
        <img class="lg:block w-full h-screen pt-4 pb-16 object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide3.jpg" alt="" />
     </div>
            </slide>
              <slide>
                <div class="main flex justify-center flex-col items-center">
        <img class="lg:block w-full h-screen pt-4 pb-16 object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide4.jpg" alt="" />
     </div>
            </slide>
             <slide>
                <div class="main flex justify-center flex-col items-center">
              <img class="lg:block w-full h-screen pt-4 pb-16 object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide3.jpg" alt="" />
     </div>
            </slide>
             <slide>
                <div class="main flex justify-center flex-col items-center">
        <img class="lg:block w-full h-screen pt-4 pb-16 object-cover h-56 w-full sm:h-72 md:h-96" src="../assets/images/slide6.jpg" alt="" />
     </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
    export default {
        components: {
    Carousel,
    Slide
  }
        
    }
</script>

<style lang="scss" scoped>

</style>