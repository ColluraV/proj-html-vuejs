<script setup>
import TheHeader from './components/TheHeader.vue';
import Intro from './components/IntroSide.vue';
import Promo from './components/Promo.vue';
import Circle from './components/CircleProgress.vue';
import GreenTopCard from './components/GreenTopCard.vue';
import Instructors from './components/Instructors.vue';

</script>

<template>
  
  <TheHeader/>
  <Intro />
  <Promo/>
  <GreenTopCard/>
  <Circle/>
  <Instructors/>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>

