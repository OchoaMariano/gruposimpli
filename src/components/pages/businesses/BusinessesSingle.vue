<script setup>
import { isBooleanAttr } from '@vue/shared';
import { ref } from 'vue'
const props = defineProps({
  title: String,
  description: String,
  descriptionSpan: String,
  btn: String,
  logo_url: String,
  higlitedText: String,
  paragraph1: String,
  paragraph2: String,
  paragraph3: String,
  businesses_url: String,
  businesses_link: String,
  rrss_url1: String,
  rrss_url2: String,
  rrss1_link: String,
  rrss2_link: String,
  blue__st: Boolean,
  lightBlue__st: Boolean,
  violet__muv: Boolean,
  greenlight__seg: Boolean,
  greendark__seg: Boolean,
  yellow__plan: Boolean,
  blue__go: Boolean,
  green__go: Boolean,
  violey__data: Boolean,
  blue__car: Boolean

})

const getImageUrl = (name) => {
    return new URL(`../../../assets/images/${name}`, import.meta.url).href
}

</script>

<template>
    <div class="grid pt-32 pb-5 lg:hidden">
        <div class="flex">
            <div class="flex h-1/5 justify-center items-start">
                <img src="../../../assets/images/badge-single.png" alt="" class="">
            </div>
            <div class="pl-5 flex-col">
                <h2 class="font-bold text-base mt-4 text-black">
                    {{ props.title }}
                </h2>
                <p class="text-sm font-robotoLight text-black">
                    {{ props.description }}
                    <span class="font-bold font-roboto">
                    {{ props.descriptionSpan }}
                    </span>
                </p>
            </div>
        </div>
    </div>
    <div class="relative pb-32 lg:py-32 bg-white">
        <div class="hidden lg:block absolute xl:-left-6 2xl:left-0 top-32 h-1/4">
            <img src="../../../assets/images/badge-single.png" alt="" class="">
        </div>
        <div class="w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div class="flex flex-col w-full lg:w-1/2 h-full">
                <div class="w-full h-full flex">
                    <div class="flex flex-col h-full w-full text-sm gap-8 ">
                        <div class="flex-col ml-2 hidden lg:flex xl:pl-16 2xl:pl-0">
                            <h2 class="font-bold text-base mt-4 text-black">
                                {{ props.title }}
                            </h2>
                            <p class="text-sm font-robotoLight text-black">
                                {{ props.description }}
                                <span class="font-bold font-roboto">
                                {{ props.descriptionSpan }}
                                </span>
                            </p>
                        </div>
                        <div class="flex flex-col h-full pt-10 lg:pt-0 lg:pr-0 gap-8 lg:gap-14 ">
        
                            <div class="flex justify-center lg:justify-start lg:items-start lg:pb-0 lg:pt-10">
                                <img :src="getImageUrl(props.logo_url)"  alt="" class="w-44 lg:w-60">
                            </div>
        
                            <div class="flex flex-col justify-center items-center lg:pr-20 h-full text-sm">
                                <div class="font-bold pb-4 text-black text-center lg:text-left">
                                    {{ props.higlitedText }}
                                </div>
                                <div class="flex flex-col justify-around font-robotoLight text-center lg:text-left">
                                    <p class="mb-4 text-black">
                                        {{ props.paragraph1 }}
                                    </p>
                                    <p class="mb-4 text-black">
                                        {{ props.paragraph2 }}
                                    </p>
                                    <p class="mb-4 text-black">
                                        {{ props.paragraph3 }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex justify-center lg:justify-start items-center py-3 w-full text-sm ">
                                <a :href="props.businesses_link" target="_blank"
                                    class="border-2 border-black rounded-l-full rounded-r-full px-4 py-1 mr-4">
                                    {{ props.btn }}
                                </a>
                                <a :href="props.rrss1_link" class="cursor-pointer" target="_blank">
                                    <img class="" :src="getImageUrl(props.rrss_url1)">
                                </a>
                                <a :href="props.rrss2_link" class="cursor-pointer pl-2" target="_blank">
                                    <img class="" :src="getImageUrl(props.rrss_url2)">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-full lg:w-1/2 flex items-center justify-center lg:items-end lg:justify-end">
                <div class="grid">
                    <div class="relative w-full max-w-sm lg:max-w-lg overflow-hidden lg:overflow-visible ">
                        <div 
                            :class="{ blue__st, violet__muv, greendark__seg, yellow__plan, blue__go, violey__data, blue__car }"
                            class="absolute right-20 bottom-20 lg:top-0 lg:-right-4 w-32 h-32 lg:w-72 lg:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000">
                        </div>
                        <div
                            :class="{ lightBlue__st, violet__muv, greenlight__seg, yellow__plan, green__go, violey__data, blue__car }"
                            class="absolute left-12 bottom-10 lg:-bottom-8 lg:left-20 w-32 h-32 lg:w-72 lg:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000">
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
    </div>
</template>
<style>
.blue__st {
    background-color: #5E80CD;
}
.lightBlue__st {
    background-color: #00ACCD;
}
.violet__muv {
    background-color: #903DF7;
}
.blue__car {
    background-color: #0E3451;
}
.blue__go {
    background-color: #3399FF;
}
.green__go {
    background-color: #77E520;
}
.greenlight__seg {
    background-color: #66CC00;
}
.greendark__seg {
    background-color: #006633;
}
.yellow__plan {
    background-color: #F6BB15;
}
.violey__data {
    background-color: #7C49CE;
}
</style>