<script setup>

</script>

<template>
    <div class="w-full mx-auto bg-gradient-to-b from-[#000] via-[#19197B] to-[#196DBD]">
        <div class="contact__container py-40 grid lg:grid-cols-2 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 items-center justify-center gap-16 md:gap-0">

            <div class="content__column grid grid-cols-1 grid-rows-1 items-center justify-center overflow-hidden ">
                <div class="circle__animation col-start-1 col-end-1 row-start-1 row-end-1">
                    <div class=" pl-40 relative w-full max-w-lg">
                        <div class="bg-primaryBlue rounded-full overflow-hidden h-96 w-96">
                            <div
                            class="absolute -top-8 left-20 w-60 h-60 bg-[#191943] rounded-full filter blur-3xl opacity-90 animate-blob animation-delay-4000">
                            </div>
                            <div
                            class="absolute -bottom-20 -left-2 w-60 h-60 bg-[#E0BA30] rounded-full filter blur-3xl opacity-90 animate-blob animation-delay-2000">
                            </div>
                            <div
                            class="absolute top-0 -left-20 w-60 h-60 bg-[#19C0FC] rounded-full filter blur-3xl opacity-90 animate-blob">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="back__image col-start-1 col-end-1 row-start-1 row-end-1">
                    <img src="../../../assets/images/phone-mockup-ccus.png" class="" />
                </div>
                <div class="content col-start-1 col-end-1 row-start-1 row-end-1">
                    <img src="../../../assets/images/logo-gruposimpli-ccus.png" class="pb-10 pl-10 logo__contact" />
                    <p class="p__contact text-white font-bold text-2xl pl-10">
                        Escribinos tus<br> datos y nos<br> pondremos en<br> contacto con<br> vos a la<br> brevedad.
                    </p>
                </div>
                
            </div>

            <div class="form__column overflow-hidden">
                <div class="form__heading">
                    <h2 class="text-white font-bold text-5xl pb-8">Contact Us</h2>
                </div>
                <div class="form__fields">
                    <form class="grid grid-cols-2 gap-4 pt-4 2xl:py-2">
                        <div class="relative z-0 w-full group py-0 2xl:py-2">
                            <label class="block">
                                <span class="text-white font-normal uppercase text-xl">
                                    First Name
                                </span>
                                    <input type="text" class="
                                        mt-0
                                        block
                                        w-full
                                        px-0.5
                                        text-white
                                        border-0 border-b-2 border-gray-200
                                        focus:ring-0 focus:border-white bg-transparent
                                    " id="firstName" 
                                    :placeholder="'Enter your name'">    
                                
                            </label>
                        </div>
                        <div class="relative z-0 w-full group py-0 2xl:py-2">
                            <label class="block">
                                <span class=" text-white font-normal uppercase text-xl ">
                                Last Name
                                </span>
                                <input type="text" class="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    text-white
                                    border-0 border-b-2 border-gray-200
                                    focus:ring-0 focus:border-white bg-transparent
                                " id="lastName"
                                :placeholder="'Enter your message'">
                            </label>
                        </div>
                        <!-- second row -->
                        <div class="relative z-0 w-full group py-0 2xl:py-2">
                            <label class="block">
                                <span class=" text-white font-normal uppercase text-xl ">
                                    Company
                                </span>
                                <input type="text" class="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    text-white
                                    border-0 border-b-2 border-gray-200
                                    focus:ring-0 focus:border-white bg-transparent
                                " id="company" 
                                :placeholder="'Enter your message'">
                            </label>
                            
                        </div>
                        <div class="relative z-0 w-full group py-0 2xl:py-2">
                            <label class="block">
                                <span class=" text-white font-normal uppercase text-xl ">
                                    Country
                                </span>
                                <input type="text" class="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    text-white
                                    border-0 border-b-2 border-gray-200
                                    focus:ring-0 focus:border-white bg-transparent
                                " id="country" 
                                :placeholder="'Enter your message'">
                            </label>
                        </div>
                        <!-- third row -->
                        <div class="relative z-0 w-full group py-0 2xl:py-2">
                            <label class="block">
                                <span class=" text-white font-normal uppercase text-xl ">
                                    Email
                                </span>
                                <input type="email" class="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    text-white
                                    border-0 border-b-2 border-gray-200
                                    focus:ring-0 focus:border-white bg-transparent
                                " id="email"  ref="email" 
                                :placeholder="'Enter your message'">
                            </label>
                        </div>
                        <div class="relative z-0 w-full group py-0 2xl:py-2">
                            <label class="block">
                                <span class="text-white font-normal uppercase text-xl">
                                    Phone
                                </span>
                                <input type="number" class="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    text-white
                                    border-0 border-b-2 border-gray-200
                                    focus:ring-0 focus:border-white bg-transparent
                                " id="phone" 
                                :placeholder="'Enter your message'">
                            </label>
                        </div>
                        <!-- last row -->
                        <div class="col-span-2 relative z-0 w-full group py-0 2xl:py-2">
                            <label class="block">
                                <span class="text-white font-normal uppercase text-xl">
                                    message
                                </span>
                                <textarea class="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    text-white
                                    border-0 border-b-2 border-gray-200
                                    focus:ring-0 focus:border-white bg-transparent
                                " id="contanos_sobre_tu_negocio"  rows="1" :placeholder="'Enter your message'"></textarea>
                            </label>
                        </div>
                        <div class="col-span-2 flex z-0 w-full group pt-6 gap-16">
                            <button ref="contactForm" class="font-bold uppercase text-white hover:scale-110 transform smooth flex flex-nowrap text-xl items-center">
                                Submit
                                <img class="h-6 lg:h-8 object-contain object-cente pl-4" src="../../../assets/images/arrow-submit-ccus.png" alt="">
                            </button>
                            <a class="text-white flex flex-nowrap items-center">
                                <img class="h-6 lg:h-8 object-contain object-cente pr-4" src="../../../assets/images/icon-message-hm.png" alt="">
                                rrhh@gruposimpli.com
                            </a>
                        </div>
                        
                    </form>
                </div>
                <div class="form__rrss flex flex-row gap-5 py-8">
                    <a href="#" class="mb-4"><img src="../../../assets/images/icon-instagram.svg" alt=""></a>
                    <a href="" class="mb-4"><img src="../../../assets/images/icon-facebook.svg" alt=""></a>
                    <a href="#" class="mb-4"><img src="../../../assets/images/icon-linkedin.svg" alt=""></a>
                </div>
            </div>

        </div>
    </div>
</template>