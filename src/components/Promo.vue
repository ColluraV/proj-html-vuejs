<script>

import InfoCourses from "../../db/db.json";
import SingleCourse from "./SingleCourse.vue"


export default {

    data() {
        return {
            InfoCourses
        };
    },
    components:{
        SingleCourse
    },
    methods: {

    },
    mounted() {

    },

};

</script>

<template>
    <!--////////////////////////////////////////////////////////////////////////// Promo Banner //////////////////////////////////////////////////////////////////////////-->

    <div id="promo-container">
        <div class="container">
            <div class="row d-flex justify-content-around w-100">

                <!--///////////////////////// left promo Courses /////////////////////////-->
                <div id="coursesInfos" class="shaded col-12 col-lg-4 text-center p-4 rounded-4 light-bg top-offset bot-offset" >
                   
                    <div class="d-flex flex-column justify-content-around h-100 text-center">
                        <h1 class="card-title fs">Courses</h1>
                        <p class="card-text secondary-text fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                        <button class="btn primary-bg btn-lg light-text rounded-5 w-75 mx-auto" type="submit">Course Information</button>

                    </div>

                </div>

                <!--///////////////////////// right promo Courses /////////////////////////-->

                <div class="col-12 col-lg-7">

                    <div class="d-flex flex-wrap my-5" >
                        <!--/////////////// triple banner info courses ///////////////-->

                        <div class="col-12 col-lg-4"
                        v-for="(card,i) in InfoCourses"
                        :KEY="`card_${i}`">
                            
                        <!--/////////////////// singola card in v-for///////////////////-->

                            <SingleCourse 
                            :imgSrc="card.thumb"
                            :name="card.name" />


                        </div>

                    </div>

                </div>

            </div>

            

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>
