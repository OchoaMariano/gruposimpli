<script setup>
import { ref } from 'vue'
import Member from '../../partials/items/Member.vue'

const people = ref([
    { id:0, icon_url: 'photo-ezequiel-calcarami-aus.png', name: 'Ezequiel Calcarami', position: 'CEO & FOUNDER GRUPO SIMPLI', linkedin_url: 'https://ar.linkedin.com/'},
    { id:0, icon_url: 'photo-ezequiel-calcarami-aus.png', name: 'Ezequiel Calcarami', position: 'CEO & FOUNDER GRUPO SIMPLI', linkedin_url: ''},
    { id:0, icon_url: 'photo-ezequiel-calcarami-aus.png', name: 'Ezequiel Calcarami', position: 'CEO & FOUNDER GRUPO SIMPLI', linkedin_url: ''},
    { id:0, icon_url: 'photo-ezequiel-calcarami-aus.png', name: 'Ezequiel Calcarami', position: 'CEO & FOUNDER GRUPO SIMPLI', linkedin_url: ''}
])
</script>

<template>
    <div class="team__container py-32">

        <div class="heading__block text-center">
            <h2 class="text-black text-5xl font-bold pb-4">
                Our Team
            </h2>
            <h4 class="text-primaryBlue font-normal text-xl uppercase pb-32">
                Contamos con un talento <br>
                comprometido y emprendedor.
            </h4>
        </div>

        <div class="team__members__block max-w-screen-2xl mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <Member 
                    v-for="item in people"
                    :icon_url="item.icon_url"
                    :name="item.name"
                    :position="item.position"
                    :linkedin_url="item.linkedin_url"
                    :key="item.id"
                ></Member>
            </div>
        </div>

    </div>
</template>