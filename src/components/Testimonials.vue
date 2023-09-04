<script >

import { store } from "../../store.js"


export default {
  data() {
    return {
      store
    };
  },
  methods() {

  },



};
</script>

<template>
  <div class="container-fluid text-center">

    <h2>Testimonials</h2>
    <p class="secondary-text fs-4">Here’s what our happy drivers had to say about our services:</p>
    
    <div class="row text-center flex-column relative">
    
      <div class="col-12 col-lg-6 slider-el absolute" v-for="testimonial in store.testimonials">
        <img class="testimonial-img" :src="`${testimonial.thumb}`" :alt="`${testimonial.name}`">
        <p class="secondary-text fs-4">{{ testimonial.phrase }}</p>
        <h4 class="secondary-text">{{testimonial.name}}</h4>

      </div>
        
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url(/testimonial-background.jpg);
  height: 800px;
  margin-top: -80px;
  padding-top: 150px;
};

.slider-el{
  left: 25%;
  padding: 0 5%;
};

.testimonial-img{
  width: 150px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 50%
};



</style>