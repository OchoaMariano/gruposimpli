<script setup>
const props = defineProps({
  title: String,
  logo_url: String,
  higlitedText: String,
  paragraph: String,
  businesses_url: String
})

const getImageUrl = (name) => {
    return new URL(`../../../assets/images/${name}`, import.meta.url).href
}
</script>

<template>
    <div class=" w-full h-full lg:h-2/3 flex flex-col-reverse lg:flex-row mt-10 md:mt-40 lg:mt-0 justify-center items-center py-32 bg-white max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div class="flex flex-col w-full lg:w-1/2 h-full">
            <div class="w-full h-full flex">
                
                <div class="flex flex-col h-full w-full text-sm gap-8 ">
                    <div class="flex flex-col ml-2">
                        <h2 class="font-bold text-base mt-4 text-black">
                            Businesses
                        </h2>
                        <p class="text-sm font-robotoLight text-black">
                            OUR VERTICALS 
                            <span class="font-bold font-roboto">|
                            {{ props.title }}
                            </span>
                        </p>
                    </div>
                    <div class="flex flex-col h-full  lg:pr-0 gap-14 lg:mb-24">
    
                        <div class=" flex justify-start items-start pb-10 lg:pb-0">
                            <img :src="getImageUrl(props.logo_url)"  alt="" class="w-44 lg:w-60">
                        </div>
    
                        <div class="flex flex-col justify-center items-center pr-20 h-full text-sm">
                            <div class="font-bold pb-4 text-black">
                                {{ props.higlitedText }}
                            </div>
                            <div class="flex flex-col justify-around font-robotoLight">
                                <p class="mb-4 text-black">
                                    {{ props.paragraph }}
                                </p>
                            </div>
                        </div>
                        <div class="flex justify-start items-center py-3 w-full text-sm ">
                            <a href="https://simplitec.io" target="_blank"
                                class="border-2 border-black rounded-l-full rounded-r-full px-4 py-1 mr-4">
                                IR AL SITIO
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-linkedin-in text-black  text-xl  rounded-full border-2 border-black  flex justify-center items-center px-2 mr-4"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-instagram text-black  text-xl  rounded-full  border-2 border-black flex justify-center items-center px-2 mr-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full lg:w-1/2 flex items-end justify-end">
            <div class="grid">
                <div class="relative w-full max-w-lg">
            
            <div
                class="absolute top-0 -right-4 w-72 h-72 bg-[#5E80CD] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000">
            </div>
            <div
                class="absolute -bottom-8 left-20 w-72 h-72 bg-[#00ACCD] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000">
            </div>
            <div class="relative space-y-4">
                <div class="img__businesses col-start-1 col-end-1 row-start-1 row-end-1 justify-end">
                    <img :src="getImageUrl(props.businesses_url)" alt="" class="">
                </div>
            </div>
        </div>
                <!--
                <div class="w-full max-w-lg">
                    <div
                        class="absolute -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob">
                    </div>
                    <div
                        class="absolute -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000">
                    </div>
                    <div
                        class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000">
                    </div>
                </div>
                <div class="m-8 relative space-y-4">
                    <div class="img__businesses col-start-1 col-end-1 row-start-1 row-end-1 justify-end">
                        <img :src="getImageUrl(props.businesses_url)" alt="" class="">
                    </div>
                </div>
                 -->
            </div>
        </div>
            
        </div>

</template>