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

<template >
    <!--////////////////////////////////////////////////////////////////////////// INFO E FORM CONTAINER //////////////////////////////////////////////////////////////////////////-->
    <div id="form-container" class="light-dark-bg">

        <div class="container">

            <div class="row d-flex justify-content-around">

                <!--////////////////////////////////////////////////////////////////////////// INFO  //////////////////////////////////////////////////////////////////////////-->

                <div class="col-12 col-lg-6 p-5 my-5 ">

                    <h1>
                        Get Behind The Wheel
                    </h1>

                    <h4 class="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus.
                        Aliquam
                        maximus turpis in vehicula semper.
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus.
                        Aliquam
                        maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla
                        nibh.
                        Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices
                        libero,
                        at suscipit lacus. Sed vitae fringilla nibh.
                    </p>

                </div>

                <!--////////////////////////////////////////////////////////////////////////// FORM //////////////////////////////////////////////////////////////////////////-->

                <div class="shaded col-12 col-lg-5 text-center p-3 rounded-4 light-bg top-offset">

                    <h1>First Lesson Free!</h1>
                    <p class="p-2">When you make a block booking with us your first lesson is included free.</p>
                    <form class="needs-validation" novalidate="">
                        <div class="row gy-4 p-3">

                            <div class="col-12">
                                <div class="input-group has-validation">

                                    <input type="text" class="form-control" id="username" placeholder="Your Name*"
                                        required="">
                                    <div class="invalid-feedback">
                                        Your name is required.
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">

                                <input type="email" class="form-control" id="email" placeholder="Email*">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for updates.
                                </div>
                            </div>

                            <div class="col-12">
                                <input type="text" class="form-control" id="phone-number" placeholder="Telephone"
                                    required="">
                            </div>

                            <div class="col-12">
                                <input type="text" class="form-control" id="Location" placeholder="Location">
                            </div>


                        </div>

                        <button class="btn primary-bg btn-lg light-text rounded-5 green-btn" type="submit">Request a callback</button>
                    </form>
                </div>

            </div>
        </div>

        <!--////////////////////////////////////////////////////////////////////////// Bottom Banner //////////////////////////////////////////////////////////////////////////-->
        <div id="bot-banner">
            <div class="container my-5">

                <div class="row justify-content-around my-4">
                    <div class="col-12 col-lg-7">
                        <h1 class="light-text">Start Learning to Drive Today</h1>
                        <h4 class="light-text">Give us a call to schedule your first driving lesson</h4>
                    </div>

                    <div class="col-12 col-lg-4 d-flex  align-items-center light-text my-2">

                        <span><i class="fa-solid fa-phone fs-2 "></i></span>
                        <h2>1-800-555-555</h2>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;


#form-container{
    min-height: 550px;
};

#bot-banner{
    background-image: url(/horizontal-cta-background.jpg);
    margin-top: 45px;
    padding: 10px 0;
    background-size: cover;
    background-position: center;
};

</style>
