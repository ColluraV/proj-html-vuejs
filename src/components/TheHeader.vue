<script>

export default {

  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  },

};

</script>

<template>
  <!--////////////////////////////////////////////////////////////////////////// TOP INFO //////////////////////////////////////////////////////////////////////////-->
  <div class="dark-bg">
    <div class="container d-flex justify-content-between linked-text py-2">

      <div>We have a 95% Successful Pass Rate!</div>
      <div><span><i class="fa-solid fa-phone"></i></span>Give us a call to book your tuition! 1-800-555-555</div>


    </div>
  </div>

  <!--////////////////////////////////////////////////////////////////////////// TOP NAV //////////////////////////////////////////////////////////////////////////-->
  <nav class="navbar navbar-expand-lg absolute py-4">
    <div class="container">
      <a class="navbar-brand" href="#"><img class="top-logo" src="/avada-drivers-logo-2x-400x77.png " alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link light-text" aria-current="page" href="#">HOME</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link light-text " href="#">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link light-text" href="#">PRICES</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link light-text dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              COURSES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Intensive</a></li>
              <li><a class="dropdown-item" href="#">Pass Plus</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Istructor</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link light-text" href="#">LOCATIONS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link light-text" href="#">BLOG</a>
          </li>
        </ul>

        <button class="btn primary-bg btn-lg light-text rounded-5" type="submit">BOOK NOW</button>


      </div>
    </div>
  </nav>

  
  <!--////////////////////////////////////////////////////////////////////////// JINGLE //////////////////////////////////////////////////////////////////////////-->

  <div id="jumbo" class="relative ">
    <div class="container h-100 ">
      <div id="jingle" class="absolute">
        <h1 class="light-text ">Drive with Avada</h1>
        <h4 class="light-text ">We offer the finest driving tuition money can buy</h4>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>
