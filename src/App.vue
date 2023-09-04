<script setup>
import TheHeader from './components/TheHeader.vue';
import Intro from './components/IntroSide.vue';
import Promo from './components/Promo.vue';
import Circle from './components/CircleProgress.vue';

import Instructors from './components/Instructors.vue';
import Testimonials from './components/Testimonials.vue';
import NewsNewsletters from './components/News&Newsletters.vue';

</script>

<template>
  
  <TheHeader/>
  <Intro />
  <Promo/>
  
  <Circle/>
  <Instructors/>
  <Testimonials/>
  <NewsNewsletters/>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>

