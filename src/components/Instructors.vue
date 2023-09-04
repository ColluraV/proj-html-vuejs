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
    
    <div>
        <div class="container">
            <div class="d-flex flex-wrap">

                <span id="istructorsBanner" class="d-flex flex-column col-12 col-lg-8">

                    <h1>Your Instructors</h1>
                    <p class="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>

                </span>
                <button class="btn primary-bg btn-lg light-text rounded-5 col-12 col-lg-3 fs-6 green-btn" type="submit">MORE ABOUT US</button>

            </div>
            <div id="instructorCardsContainer" class="row">
                <div class=" col-12 col-lg-4 py-5  text-center "
                        v-for="(card,i) in store.instructors"
                        :KEY="`card_${i}`">
                            
                        <!--/////////////////// singola card in v-for///////////////////-->

                    <div class="top-border-rounded p-5 light-bg shaded mx-1" >

                        <SingleCard 
                            :imgSrc="card.thumb"
                            :name="card.name" />

                        <span>
                            <a href="#"><i class="fa-brands fa-facebook-f secondary-text"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram secondary-text"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter secondary-text"></i></a>
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>    

                    </div>

            </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.btn{
    max-height: 50px;
    min-width: 170px;
    margin: auto;
}
span{
    a{

        text-decoration: none;
        margin: 0.7rem;
        

    }
}
.container{
    margin-top: 100px;
}
</style>

