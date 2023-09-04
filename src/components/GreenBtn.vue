<script>



export default {

    data() {
        return {
            props:{
        name:{
                type: String,
                required: true,
            },
    }
        };
    },
    components:{
        
    },
    methods: {

    },
    mounted() {

    },

};
</script>

<template>
    <button class="btn primary-bg btn-lg light-text rounded-5 col-12 col-lg-3 fs-6" type="submit">{{name}}</button>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.btn{
    max-height: 50px;
    min-width: 170px;
    margin: auto;
}

</style>

