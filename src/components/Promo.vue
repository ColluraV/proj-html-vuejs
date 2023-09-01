<script>

import InfoCourses from "../../db/db.json";

export default {

    data() {
        return {
            InfoCourses
        };
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
                <div class="shaded col-12 col-lg-5 text-center p-3 rounded-4 light-bg top-offset" style="width: 18rem;">
                    <div class="card-body ">
                        <h1 class="card-title ">Courses</h1>
                        <p class="card-text secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                        <button class="btn primary-bg btn-lg light-text rounded-5" type="submit">Course Information</button>

                    </div>
                </div>

                <div class="col-12 col-lg-7">

                    <div class="row-cols-3" >

                        <div class="col"
                        v-for="(card,i) in InfoCourses"
                        :KEY="`card_${i}`">

                        </div>

                    </div>

                </div>

            </div>

            <!--///////////////////////// triple banner info courses /////////////////////////-->

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
</style>
