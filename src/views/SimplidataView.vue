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
        :title="tm('simpliData.page-items.title')" 
        :description="tm('simpliData.page-items.description')"
        :descriptionSpan="tm('simpliData.page-items.descriptionSpan')"
        :btn="tm('simpliData.page-items.btn')"
        logo_url="logo-simpliData-bss.png"
        :higlitedText="tm('simpliData.page-items.subtitle')"
        :paragraph1="tm('simpliData.page-items.paragraph1')"
        businesses_url="hero-simplidata-image-bss.png"
        businesses_link="https://www.simplitec.io"
        rrss_url1="icon-linkedin-bss.png"
        rrss1_link="https://www.linkedin.com/instag"
        rrss_url2="icon-play-bss.png"
        rrss2_link="https://www.instagram.com/"
        violey__data="true"
    />
    <Footer />
</template>