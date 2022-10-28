<script setup>
const props = defineProps({
    icon_url: String,
    name: String,
    position: String,
    linkedin_url: String
})

const getImageUrl = (name) => {
    return new URL(`../../../assets/images/${name}`, import.meta.url).href
}
</script>

<template>
    <div class="card__team px-4">
        <div class="grid">
            <div class="img__block text-center cursor-pointer">
                <img :src="getImageUrl(props.icon_url)" class="grayscale hover:grayscale-0">
            </div>
            <div class="content__block text-center pt-6">
                <h3 class="text-black font-bold text-xl"> 
                    {{ props.name }} 
                </h3>
                <p class=""> 
                    {{ props.position }} 
                </p>
            </div>
            <div class="btns__block flex flex-nowrap mx-auto py-4 items-center">
                <a href="#" target="_blank" class="border-2 border-black rounded-l-full rounded-r-full px-4 py-1 mr-4">
                    VER MÁS
                </a>
                <a :href="props.linkedin_url" target="_blank">
                    <img src="../../../assets/images/icon-linkedin-aus.png" class="">
                </a>
            </div>
        </div>
    </div>
</template>