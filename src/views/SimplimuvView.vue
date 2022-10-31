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
        :title="tm('simpliMuv.page-items.title')" 
        :description="tm('simpliMuv.page-items.description')"
        :descriptionSpan="tm('simpliMuv.page-items.descriptionSpan')"
        :btn="tm('simpliMuv.page-items.btn')"
        logo_url="logo-simplimuv-bss.png"
        :higlitedText="tm('simpliMuv.page-items.subtitle')"
        :paragraph1="tm('simpliMuv.page-items.paragraph1')"
        :paragraph2="tm('simpliMuv.page-items.paragraph2')"
        :paragraph3="tm('simpliMuv.page-items.paragraph3')"
        businesses_url="hero-simplimuv-image-bss.png"
        businesses_link="https://www.simplitec.io"
        rrss_url1="icon-linkedin-bss.png"
        rrss1_link="https://www.linkedin.com/instag"
        rrss_url2="icon-play-bss.png"
        rrss2_link="https://www.instagram.com/"
        blue__st="false"
        lightBlue__st="false"
        violet__muv="true"
    />
    <Footer />
</template>