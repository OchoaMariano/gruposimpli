<script>
import { ref } from 'vue'
import Businesses from '../home/Businesses.vue'
// Import Swiper Vue.js components
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { RouterLink } from 'vue-router';

export default {
  components: {
    Swiper,
    SwiperSlide,
    RouterLink
},
  setup() {
    const currentSlide = ref(0)
    const onSwiper = (swiper) => {
        console.log(swiper.activeIndex);
        
    };
    const onSlideChange = (swiper) => {
        currentSlide.value = swiper.activeIndex;
        console.log('slide change' + swiper.activeIndex + currentSlide.value);
    };
    return {
        currentSlide,
        onSwiper,
        onSlideChange,
        EffectFade,
        modules: [Navigation],
    };
  },
};

</script>

<template>
    <div class="bg-gradient-to-b from-[#000] via-[#19197B] to-[#196DBD] pt-60">
        <div class="flex justify-center">
            <div class="title__section text-center">
                <h1 class="text-white font-bold text-4xl pb-4">
                    {{ $t('Businesses.hero.title') }}
                </h1>
                <h4 class="text-lightBlue font-normal text-xl">
                    {{ $t('Businesses.hero.subtitle') }}
                </h4>
            </div>
        </div>

        <div class="carousel__ind pt-28 w-full mx-auto">
            <swiper
                :slidesPerView="1"
                :spaceBetween="10"
                :navigation="true" 
                :pagination="{
                    clickable: true,
                }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :modules="modules"
                class="w-full text-center mx-auto px-10"
            >
                <swiper-slide>
                    <div class="carousel__heading pb-20">
                        <div class="header__selector grid  md:grid-cols-3 gap-4">
                            <h2 class="hidden md:block text-3xl text-white text-center">
                            </h2>
                            <h2 class="text-3xl text-white text-center">
                                FINTECH &<br>INSURANCE
                            </h2>
                            <h2 class="hidden md:block  text-3xl text-white text-center">
                                DIGITAL <br>RETAILING
                            </h2>
                        </div>
                        <p class="text-white pt-10 px-4 xl:px-40">
                            {{ $t('Businesses.fintech.description') }}
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel__heading pb-20">
                        <div class="header__selector grid  md:grid-cols-3 gap-4">
                            <h2 class="hidden md:block text-3xl text-white text-center">
                                FINTECH &<br>INSURANCE
                            </h2>
                            <h2 class="text-3xl text-white text-center">
                                DIGITAL <br>RETAILING
                            </h2>
                            <h2 class="hidden md:block text-3xl text-white text-center">
                                DATA
                            </h2>
                        </div>
                        <p class="text-white pt-10 px-4 xl:px-40">
                            {{ $t('Businesses.Retailing.description') }}
                        </p>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel__heading pb-20">
                        <div class="header__selector grid md:grid-cols-3 gap-4">
                            <h2 class="hidden md:block text-3xl text-white text-center">
                                DIGITAL <br>RETAILING
                            </h2>
                            <h2 class="text-3xl text-white text-center">
                                DATA
                            </h2>
                            <h2 class="hidden md:block text-3xl text-white text-center">
                            </h2>
                        </div>
                        <p class="text-white pt-10 px-4 xl:px-40">
                            {{ $t('Businesses.data.description') }}
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        
    </div>
    <div class="block__businesses">
        <div class="carousel__heading bg-white">
            
            <div v-if="currentSlide === 0" 
            class="fintech__insurance carousel__heading bg-white ">
                <div class="grid xl:grid-cols-4 max-w-screen-2xl mx-auto py-16">
                    <div class="hidden xl:block w-full p-20 text-left">
                    </div>
                    <div class="w-full p-20 text-left">
                        <img src="../../../assets/images/logo-simpliseg-bss.png" class="h-8" />
                        <p class="text-gray text-left py-8">
                            {{ $t('Businesses.brands.simpliseg.description') }}
                        </p>
                        <RouterLink to="/simpliseg" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">{{ $t('Businesses.brands.simpliseg.btn') }}</RouterLink>
                    </div>
                    <div class="w-full p-20 text-left">
                        <img src="../../../assets/images/logo-simpliplan-bss.png" class="h-8" />
                        <p class="text-gray text-left py-8">
                            {{ $t('Businesses.brands.simpliplan.description') }}
                        </p>
                        <RouterLink to="/simpliplan" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">{{ $t('Businesses.brands.simpliplan.btn') }}</RouterLink>
                    </div>
                    <div class="hidden xl:block w-full p-20 text-left">
                    </div>
                </div>
            </div>
            
            <div 
            v-if="currentSlide === 1"
            class="digital__retailing grid xl:grid-cols-4 max-w-screen-2xl mx-auto py-16">
                <div class="w-full p-20 text-left">
                    <img src="../../../assets/images/simplitec-logo-bss.png" class="h-8" />
                    <p class="text-gray text-left py-8">
                        {{ $t('Businesses.brands.simplitec.description') }}
                    </p>
                    <RouterLink to="/simplitec" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">
                        {{ $t('Businesses.brands.simplitec.btn') }}
                    </RouterLink>
                </div>
                <div class="w-full p-20 text-left">
                    <img src="../../../assets/images/logo-simplimuv-bss.png" class="h-8" />
                    <p class="text-gray text-left py-8">
                        {{ $t('Businesses.brands.simplimuv.description') }}
                    </p>
                    <RouterLink to="/simplimuv" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">
                        {{ $t('Businesses.brands.simplimuv.btn') }}
                    </RouterLink>
                </div>
                <div class="w-full p-20 text-left">
                    <img src="../../../assets/images/logo-simplicar-bss.png" class="h-8" />
                    <p class="text-gray text-left py-8">
                        {{ $t('Businesses.brands.simplicar.description') }}
                    </p>
                    <RouterLink to="/simplicar" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">
                        {{ $t('Businesses.brands.simplicar.btn') }}
                    </RouterLink>
                </div>
                <div class="w-full p-20 text-left">
                    <img src="../../../assets/images/logo-simpligo-bss.png" class="h-8" />
                    <p class="text-gray text-left py-8">
                        {{ $t('Businesses.brands.simpligo.description') }}
                    </p>
                    <RouterLink to="/simpligo" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">
                        {{ $t('Businesses.brands.simpligo.btn') }}
                    </RouterLink>
                </div>
            </div>

            <div 
            v-if="currentSlide === 2"
            class="data carousel__heading bg-white ">
                <div class="grid xl:flex max-w-screen-2xl mx-auto py-16">
                    <div class="xl:w-1/4 mx-auto p-20 text-left">
                        <img src="../../../assets/images/logo-simplidata-bss.png" class="h-8" />
                        <p class="text-gray text-left py-8">
                            {{ $t('Businesses.brands.simplidata.description') }}
                        </p>
                        <RouterLink to="/simplidata" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">
                            {{ $t('Businesses.brands.simplidata.btn') }}
                        </RouterLink>
                    </div>
                </div>
            </div>

        </div>
    </div>    
</template>
<style>
@media screen and (min-width: 768px) {
    .swiper-button-prev, .swiper-rtl .swiper-button-next {
        left: 30% !important;
        right: auto;
    }

    .swiper-button-next, .swiper-rtl .swiper-button-prev {
        right: 30% !important;
        left: auto;
    }
}
@media screen and (min-width: 1024px) {
    .swiper-button-prev, .swiper-rtl .swiper-button-next {
        left: 35% !important;
        right: auto;
    }

    .swiper-button-next, .swiper-rtl .swiper-button-prev {
        right: 35% !important;
        left: auto;
    }
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  align-items: flex-start;
}

.swiper-button-next, .swiper-button-prev {
  position: absolute;
  top: 10% !important;
  width: calc(var(--swiper-navigation-size)/ 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size)/ 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>