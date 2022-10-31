<script setup>
import { ref } from 'vue'
import Header from '../components/partials/Navigation/Header.vue'
import BusinessesSingle from "../components/pages/businesses/BusinessesSingle.vue";
import Footer from "../components/partials/Navigation/Footer.vue";
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();
</script>

<template>
    <Header isBlack />
    <BusinessesSingle 
        :title="tm('simpliCar.page-items.title')" 
        :description="tm('simpliCar.page-items.description')"
        :descriptionSpan="tm('simpliCar.page-items.descriptionSpan')"
        :btn="tm('simpliCar.page-items.btn')"
        logo_url="logo-simpliCar-bss.png"
        :higlitedText="tm('simpliCar.page-items.subtitle')"
        :paragraph1="tm('simpliCar.page-items.paragraph1')"
        :paragraph2="tm('simpliCar.page-items.paragraph2')"
        :paragraph3="tm('simpliCar.page-items.paragraph3')"
        businesses_url="hero-simplicar-image-bss.png"
        businesses_link="https://www.simplitec.io"
        rrss_url1="icon-linkedin-bss.png"
        rrss1_link="https://www.linkedin.com/instag"
        rrss_url2="icon-play-bss.png"
        rrss2_link="https://www.instagram.com/"
        blue__car="true"
    />
    <Footer />
</template>