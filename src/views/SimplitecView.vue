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
        :title="tm('simpliTec.page-items.title')" 
        :description="tm('simpliTec.page-items.description')"
        :descriptionSpan="tm('simpliTec.page-items.descriptionSpan')"
        :btn="tm('simpliTec.page-items.btn')"
        logo_url="simplitec-logo-bss.png"
        :higlitedText="tm('simpliTec.page-items.subtitle')"
        :paragraph1="tm('simpliTec.page-items.paragraph1')"
        :paragraph2="tm('simpliTec.page-items.paragraph2')"
        businesses_url="hero-simplitec-image-bss.png"
        businesses_link="https://www.simplitec.io"
        rrss_url1="icon-linkedin-bss.png"
        rrss1_link="https://www.linkedin.com/instag"
        rrss_url2="icon-instagram-bss.png"
        rrss2_link="https://www.instagram.com/"
    />
    <Footer />
</template>