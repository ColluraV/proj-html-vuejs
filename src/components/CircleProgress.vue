<script>
    export default {
  data() {
    return {
      ratesdata: [
        { name: "PASS RATE", percentage: 95, class:"passR" },
        { name: "REFERRAL RATE", img: 100, class:"referralR" },
        { name: "ACCIDENT RATE", img: 0, class:"accidentR" },

        ]
    };
  },
};
</script>

<template>
<div class="d-flex">

  <div class="progress-bar-container" v-for="rate in ratesdata">
  <div class="progress-bar" :class="`${rate.class}`" >
    <progress></progress>
  </div>
</div>

</div>
<div class="progress-bar-container">
  <h2>
    <label for="html">HTML</label>
  </h2>
  <div class="progress-bar html">
    <progress id="html" min="0" max="100" value="92"></progress>
  </div>
</div>




</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;


@property --progress-value {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
};

@keyframes passR-progress {
  to { --progress-value: 88; }
};


.progress-bar {
  width: 100%;
  aspect-ratio: 1/1;

  border-radius: 50%;
  
  /* to center the percentage value */
  display: flex;
  justify-content: center;
  align-items: center;
};

.progress-bar::before {
  counter-reset: percentage var(--progress-value);
  content: counter(percentage) '%';
  vertical-align: center
};

.passR {
  background: 
    radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(hotpink calc(var(--progress-value) * 1%), rgba(255, 255, 255, 0) 0);
  animation: html-progress 2s 1 forwards;
};

.passR::before {
  animation: html-progress 2s 1 forwards;
};


progress {
  visibility: hidden;
  width: 0;
  height: 0;
};



/*
circle progress reference
https://nikitahl.com/circle-progress-bar-css
} */
</style>