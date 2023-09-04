<script>

export default {
    props:{
        imgSrc:String,
        name:{
                type: String,
                required: true,
            },
    }
}

</script>

<template>

<div class=" text-center my-3 p-2">
  <img :src="imgSrc" class="course-img" alt=""> <!-- //////immagine////// -->

    <h5 class="card-title secondary-text p-2" v-if="this.name !='' ">{{name}}</h5> <!-- //////nome////// -->


</div>


</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;


</style>

