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
        :title="tm('simpliGo.page-items.title')" 
        :description="tm('simpliGo.page-items.description')"
        :descriptionSpan="tm('simpliGo.page-items.descriptionSpan')"
        :btn="tm('simpliGo.page-items.btn')"
        logo_url="logo-simpliGo-bss.png"
        :higlitedText="tm('simpliGo.page-items.subtitle')"
        :paragraph1="tm('simpliGo.page-items.paragraph1')"
        :paragraph2="tm('simpliGo.page-items.paragraph2')"
        :paragraph3="tm('simpliGo.page-items.paragraph3')"
        businesses_url="hero-simpligo-image-bss.png"
        businesses_link="https://www.simplitec.io"
        rrss_url1="icon-linkedin-bss.png"
        rrss1_link="https://www.linkedin.com/instag"
        rrss_url2="icon-play-bss.png"
        rrss2_link="https://www.instagram.com/"
        blue__go="true"
        green__go="true"
    />
    <Footer />
</template>