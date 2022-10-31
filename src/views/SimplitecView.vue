<script setup>
import Header from '../components/partials/Navigation/Header.vue'
import BusinessesSingle from "../components/pages/businesses/BusinessesSingle.vue";
import Footer from "../components/partials/Navigation/Footer.vue";

</script>

<template>
    <Header isBlack />
    <BusinessesSingle 
        title="Digital Retailing" 
        logo_url="simplitec-logo-bss.png"
        higlitedText="Empresa de tecnología especializada en movilidad que desarrolla soluciones de digital retailing para potenciar la experiencia de compra y venta."
        paragraph="SimpliTEC es una empresa de tecnología especializada en crear soluciones tecnológicas de digital retailing en movilidad que ayudan a las organizaciones a digitalizar, evolucionar y potenciar la experiencia de compra y venta. Fundada en 2020 por expertos en movilidad con más de 15 años de experiencia en la industria, SimpliTEC desarrolla productos de calidad cimentados en aprendizajes y éxitos, creando relaciones colaborativas y generando valor agregado para la industria."
        businesses_url="hero-simplitec-image-bss.png"
    />
    <Footer />
</template>