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

    <h5 class="card-title secondary-text p-2">{{name}}</h5> <!-- //////nome////// -->
    <button class="border border-3 btn-lg secondary-text rounded-5 my-1" type="submit">LEARN MORE</button>

</div>


</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>

