<script>

import { store } from "../../store";
import SingleCard from "./SingleCard.vue";


export default {

    data() {
        return {
            store
        };
    },
    components:{
        SingleCard
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
                        <button class="btn primary-bg btn-lg light-text rounded-5 w-75 mx-auto green-btn" type="submit">Course Information</button>

                    </div>

                </div>

                <!--///////////////////////// right promo Courses /////////////////////////-->

                <div class="col-12 col-lg-7">

                    <div class="d-flex flex-wrap my-5" >
                        <!--/////////////// triple banner info courses ///////////////-->

                        <div class="col-12 col-lg-4  text-center "
                        v-for="(card,i) in store.courses"
                        :KEY="`card_${i}`">
                            
                        <!--/////////////////// singola card in v-for///////////////////-->

                            <SingleCard 
                            :imgSrc="card.thumb"
                            :name="card.name" />

                            <button class="border border-3 btn-lg secondary-text rounded-5 my-1 grey-btn" type="submit">LEARN MORE</button>
                        </div>

                    </div>

                </div>

            </div>

            

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
#promo-container{
    background-image: url(/promise-background.jpg);
    background-position: center;
    background-size: cover;
}

#coursesInfos{
    background-image: url(../public/new-corner.jpg);
    background-repeat: no-repeat;
    background-size: 80px;
};
</style>
