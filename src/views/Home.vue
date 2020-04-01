<template>
  <iv class="home bg-white-900 h-screen w-screen">
     <div id="app" class="bg-white-900 h-screen w-full">
    <!-- <div class="container mx-auto px-20">
    </div>   -->
    <Hero />

     <!-- <div class="bg-white">

     </div> -->

<!-- Work -->
     <Work/>
<!-- Our Programs -->
    <Programs />
<!-- Meet Our Team -->
    <Team />
<!-- Our Gallery -->
    <Gallery />
  <!-- Price -->
    <!-- <Price/> -->
  <!-- Carousel -->
    <Carousel />
    <!-- Subcscribe -->
    <Subscribe />
<!-- Footer -->
    <Footer />
   </div> 
  </iv>
</template>

<script>
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
// import Carousel from '@/components/Carousel'
import Work from '@/components/Work'
import Subscribe from '@/components/Subscribe'
// import Price from '@/components/Price.vue'

export default {
  name: 'Home',
 components : {Gallery, Team, Programs, Footer, Work, Hero, Subscribe},
}
</script>
