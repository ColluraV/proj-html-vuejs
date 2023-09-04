<script>
import SingleCard from './SingleCard.vue';
import { store} from "../../store.js";


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
<div class="latest-news-container">
    <div class="container relative text-center">
        <h1>Latest News</h1>
        <div class="row">
            <div class="col-12 col-lg-6 " v-for="card in store.news">
                <SingleCard
                    :imgSrc="card.thumb"/>
                    <h5 class="primary-text">{{ card.title }} </h5>
                    <P class="s-size secondary-text">{{ card.date }} | <span class="primary-text">{{ card.comments }} Comments </span></P>
                    <P class="m-size linked-text">{{ card.text }}</P>
            </div>
            <button class="btn primary-bg btn-lg light-text rounded-5 col-6 fs-6" type="submit">MORE FROM THE BLOG</button>

            <img id="bottomTriangle" src="/latestnews-bottom.png" class="absolute" alt="">
        </div>
    </div>
</div>
<div class="row newsletters">
    <div class="col-10 col-lg-6 text-center mx-auto my-5">
    <h4>Sign up to our Newsletter</h4>
    <input type="email" class="form-control">
    <button class="btn primary-bg btn-lg light-text rounded-5 col-6 fs-6" type="submit">MORE FROM THE BLOG</button>
    <p class="linked-text s-size my-2">(We do not share your data with anybody, and only use it for its intended purpose)</p>

</div>
</div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.container{
    border-top: 5px solid #929AA3;
    border-radius: 8px;
    background-color: white;
    background-image: url(/latestnews-bottom.jpg);
    margin-top: -35px;
    
};

.latest-news-container{
    background-image: url(/latestnews-background.jpg);
    background-position: center;
    background-size: cover;
    height: 800px;

};
#bottomTriangle{
    left: 0;
    bottom: -85px;
    height: 85px;
};
.btn{
    max-height: 50px;
    min-width: 210px;
    margin: auto;
};

.s-size{
    font-size: 0.7rem;
    margin-top: -0.5rem;
};
.newsletters{
    background-image: url(/newsletter_background.jpg);
    background-size: cover;
    background-position: center;
    margin: 0;
}

</style>

