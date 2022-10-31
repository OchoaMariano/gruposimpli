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
        :title="tm('simpliSeg.page-items.title')" 
        :description="tm('simpliSeg.page-items.description')"
        :descriptionSpan="tm('simpliSeg.page-items.descriptionSpan')"
        :btn="tm('simpliSeg.page-items.btn')"
        logo_url="logo-simpliSeg-bss.png"
        :higlitedText="tm('simpliSeg.page-items.subtitle')"
        :paragraph1="tm('simpliSeg.page-items.paragraph1')"
        :paragraph2="tm('simpliSeg.page-items.paragraph2')"
        :paragraph3="tm('simpliSeg.page-items.paragraph3')"
        businesses_url="hero-simpliseg-image-bss.png"
        businesses_link="https://www.simplitec.io"
        rrss_url1="icon-linkedin-bss.png"
        rrss1_link="https://www.linkedin.com/instag"
        rrss_url2="icon-play-bss.png"
        rrss2_link="https://www.instagram.com/"
        blue__st="false"
        lightBlue__st="false"
        violet__muv="false"
        greenlight__seg="true"
        greendark__seg="true"
    />
    <Footer />
</template>