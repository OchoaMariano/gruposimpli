<script>
import Businesses from '../home/Businesses.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};

</script>

<template>
    <div class="bg-gradient-to-b from-[#000] via-[#19197B] to-[#196DBD] pt-60">
        <div class="flex justify-center">
            <div class="title__section text-center">
                <h1 class="text-white font-bold text-4xl pb-4">
                    Businesses
                </h1>
                <h4 class="text-lightBlue font-normal text-xl">
                    OUR VERTICALS
                </h4>
            </div>
        </div>

        <div class="carousel__ind pt-32 w-full mx-auto">
            <swiper
                :slidesPerView="1"
                :spaceBetween="10"
                :pagination="{
                    clickable: true,
                }"
               
                :modules="modules"
                class="w-full text-center mx-auto px-10"
            >
                <swiper-slide>
                    <div class="carousel__heading pb-20">
                        <h2 class="text-3xl text-white text-center">
                            FINTECH &<br>INSURANCE
                        </h2>
                        <p class="text-white pt-10 px-4 xl:px-40">
                            Vertical de negocio con empresas con foco financiero, con nuevas propuestas de uso de vehículos como suscripción mensual, renting, sharing y leasing y de seguros que se apoyan en la tecnología para ser disruptivas en el mercado.
                        </p>
                    </div>
                    <div class="carousel__heading bg-white ">
                        <div class="grid xl:grid-cols-4 max-w-screen-2xl mx-auto py-16">
                            <div class="hidden xl:block w-full p-20 text-left">
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simplimuv-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simplicar-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="hidden xl:block w-full p-20 text-left">
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel__heading pb-20">
                        <h2 class="text-3xl text-white text-center">
                            DIGITAL<br>RETAILING
                        </h2>
                        <p class="text-white pt-10 px-4 xl:px-40">
                            Más del 90% de los compradores de vehículos en el mundo realizan algún tipo de actividad online antes de acercarse a un concesionario para hacer efectiva la compra. Si bien pocas personas compran un vehículo 100% online, sí buscan poder hacer la búsqueda, reservar el vehículo, sacar un crédito, comprar accesorios complementarios y contratar un seguro desde su smartphone o dispositivo antes de terminar la venta en el mundo offline. Por ello, desarrollamos esta vertical de negocio con empresas que unen lo mejor de la tecnología con el desarrollo de canales comerciales para potenciar la movilidad.
                        </p>
                    </div>
                    <div class="carousel__heading bg-white">
                        <div class="grid xl:grid-cols-4 max-w-screen-2xl mx-auto py-16">
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/simplitec-logo-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="/simplitec" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simplimuv-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simplicar-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simpligo-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel__heading pb-20">
                        <h2 class="text-3xl text-white text-center">
                            DATA
                        </h2>
                        <p class="text-white pt-10 px-4 xl:px-40">
                            XXI es el siglo de la data y el potencial que existe alrededor de la información.
                            Por ello, contamos con una vertical de negocio con empresas de core en la información y análisis de los datos de la industria de la movilidad. 
                        </p>
                    </div>
                    <div class="carousel__heading bg-white">
                        <div class="grid xl:grid-cols-4 max-w-screen-2xl mx-auto py-16">
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/simplitec-logo-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="/simplitec" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simplimuv-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simplicar-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                            <div class="w-full p-20 text-left">
                                <img src="../../../assets/images/logo-simpligo-bss.png" class="h-8" />
                                <p class="text-gray text-left py-8">
                                    Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta.
                                </p>
                                <a href="#" class="bg-transparent hover:bg-primaryBlue text-black hover:text-white px-6 py-2 rounded-full border-black border hover:shadow-lg">VER MÁS</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
            </swiper>
        </div>
        
    </div>    
</template>
<style scoped>
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  align-items: center;
}
</style>