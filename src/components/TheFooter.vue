<script>



    export default {
    
        data() {
            return {



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

        <div class="divider" ></div>
        <div class="bot-links dark-bg" >
            <div class="container">
                <div class="row d-flex flex-wrap ">
                    <div class="col-7 d-flex s-size">
                        <p class="linked-text">© Copyright 2012 - 2023 | Avada Theme by</p>
                        <a class="primary-text" href="#">ThemeFusion</a>
                        <p class="linked-text"> | All Rights Reserved | Powered by </p>
                        <a class="primary-text" href="https://img.freepik.com/free-photo/free-photo-good-friday-background-with-jesus-christ-cross_1340-28469.jpg?t=st=1693825756~exp=1693829356~hmac=59368b759826cb0a65efdf752b470c9592d8270d3f6939f6820cf151965073d6&w=740">Jesus</a>
                    </div>
                    <div id="socials" class="d-flex text-center mx-auto">
                        <a href="#"><i class="fa-brands fa-instagram light-text"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube light-text"></i></a>
                        <a href="#"><i class="fa-brands fa-square-facebook light-text"></i></a>
                        <a href="#"><i class="fa-brands fa-square-twitter light-text"></i></a>
                    </div>
                </div>
            </div>
        </div>

    </template>
    
    <style lang="scss" scoped>
    @use "../styles/partials/variables" as *;

    .divider{
        background-image: url(/footer-background-color.jpg);
        background-position: center;
        background-size: cover;
        height: 120px;
    }
    .s-size{
    font-size: 0.7rem;
    
    };

    .row{
        margin: auto;
    }

#socials{
    width: 130px;
    justify-content: space-between;
}
    </style>
    
    