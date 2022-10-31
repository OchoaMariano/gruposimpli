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
        :title="tm('simpliPlan.page-items.title')" 
        :description="tm('simpliPlan.page-items.description')"
        :descriptionSpan="tm('simpliPlan.page-items.descriptionSpan')"
        :btn="tm('simpliPlan.page-items.btn')"
        logo_url="logo-simpliPlan-bss.png"
        :higlitedText="tm('simpliPlan.page-items.subtitle')"
        :paragraph1="tm('simpliPlan.page-items.paragraph1')"
        businesses_url="hero-simpliplan-image-bss.png"
        businesses_link="https://www.simplitec.io"
        rrss_url1="icon-linkedin-bss.png"
        rrss1_link="https://www.linkedin.com/instag"
        rrss_url2="icon-play-bss.png"
        rrss2_link="https://www.instagram.com/"
        yellow__plan="true"
    />
    <Footer />
</template>