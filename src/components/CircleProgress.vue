<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { store } from "../../store.js"

export default {
  data() {
    return {
      store
    };
  },

  components: { CircleProgress }

};
</script>

<template>
  <div >

    <div class="container d-flex flex-wrap g-3" >

      <div class="circle-container col-12 col-lg-4 py-5" v-for="circle in store.ratesdata">

        <div class="mx-1 top-border-rounded py-5 light-bg shaded">
          
          <circle-progress :percent="`${circle.size}`" :size="250" fill-color='#7ABC64' :show-percent="true" />
          <h5 class="text-center py-3">{{ circle.name }}</h5>

        </div>

      </div>

    </div>


  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.vue3-circular-progressbar {
  margin-left: auto;
  margin-right: auto;
}

.circle-container {
  min-width: 300px;
  margin: 0 auto;
}


/*
circle progress reference
https://www.npmjs.com/package/vue3-circle-progress#installation
} */
</style>