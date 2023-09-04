<script >

import { store} from "../../store.js"


export default {
  data() {
    return {
      store,
      activeIndex: 0
    };
  },
  methods: {
    selectedClick(x){
      this.activeIndex = x;

    },
    increaserIndex(){
       
       this.activeIndex += 1;
       if(this.activeIndex >= 5){
         this.activeIndex = 0;
       }

     }
 
  },
  
  mounted() {

    setInterval (this.increaserIndex , 5000)

  },

  };
</script>

<template>
  <div class="container-fluid text-center">

    <h1>Testimonials</h1>
    <p class="linked-text fs-4">Here’s what our happy drivers had to say about our services:</p>
    
    <div class="row text-center flex-column relative" :autoplay="true" :autoplay-timeout="3000">
    
      <div class="col slider-el absolute hidden" 
      v-for="(testimonial,i) in store.testimonials"

      v-bind:class="(this.activeIndex === i ? 'active' : '')"
      >
        <img class="testimonial-img" :src="`${testimonial.thumb}`" :alt="`${testimonial.name}`">
        <p class="linked-text fs-4">{{ testimonial.phrase }}</p>
        <h4 class="linked-text my-5">{{testimonial.name}}</h4>

        <div id="testimonial-selector-container d-flex flex-wrap">
          <button @click = "selectedClick(0)" class="testimonial-selector"></button>
          <button @click = "selectedClick(1)" class="testimonial-selector"></button>
          <button @click = "selectedClick(2)" class="testimonial-selector"></button>
          <button @click = "selectedClick(3)" class="testimonial-selector"></button>
          <button @click = "selectedClick(4)" class="testimonial-selector"></button>
        </div>

        </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container-fluid {
  background-image: url(/testimonial-background.jpg);
  background-position: center;
  background-size: cover;
  height: 880px;
  margin-top: -120px;
  padding-top: 170px;
};

.slider-el{

  padding: 0 5%;
};

.testimonial-img{
  width: 150px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 50%
};

.active{
  display: block;
};
.relative{
  height: 500px;
  max-width: 800px;
  margin: 20px auto;
};

.testimonial-selector{
  width: 5px;
  aspect-ratio: 1/1;
  border: solid 1px #929AA3;
  border-radius: 50%;
  margin: 0 3px;
}

</style>