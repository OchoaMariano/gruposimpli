<script setup>
import { RouterLink, RouterView } from 'vue-router'

import './assets/main.css'
import Header from './components/partials/Navigation/Header.vue'
</script>

<template>
  <Header />
  <RouterView />
</template>
