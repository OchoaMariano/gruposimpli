<script setup>
  import { ref } from 'vue'
  import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Disclosure, 
    DisclosureButton, 
    DisclosurePanel
} from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import IconArrowLang  from '../../icons/IconArrowLang.vue'
import IconSelectLang from '../../icons/IconSelectLang.vue'

const props = defineProps({
  isBlack: Boolean
})


</script>

<template>
  <Disclosure as="nav" class="bg-transparent absolute w-full z-10 mt-5" v-slot="{ open }">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <RouterLink to="/">
              <img v-if="!isBlack" class="block lg:hidden h-5 w-auto"
                src="../../../assets/images/logo-gsimpli-white.svg" alt="Grupo Simpli" />
              <img v-if="!isBlack" class="hidden lg:block h-7.5 w-auto" src="../../../assets/images/logo-gsimpli-white.svg"
                alt="Grupo Simpli" />
              <img v-if="isBlack" class="block lg:hidden h-5 w-auto"
                src="../../../assets/images/logo-grupo-simpli-black.svg" alt="Grupo Simpli" />
              <img v-if="isBlack" class="hidden lg:block h-7.5 w-auto" src="../../../assets/images/logo-grupo-simpli-black.svg"
                alt="Grupo Simpli" />
            </RouterLink>
          </div>
        </div>
        <div class="hidden md:ml-6 md:flex md:items-center">
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->

            <RouterLink to="/about"
              :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
              class="border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium uppercase">
              {{ $t('navigation.navItemsDesktop.about-us') }}
            </RouterLink>
            <RouterLink to="/businesses"
              :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
              class="border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium uppercase">
              {{ $t('navigation.navItemsDesktop.businesses') }}
            </RouterLink>
            <RouterLink to="/work"
              :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
              class="border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium uppercase">
              {{ $t('navigation.navItemsDesktop.work-with-us') }}
            </RouterLink>
            <RouterLink to="/contact"
              :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
              class="border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium uppercase">
              {{ $t('navigation.navItemsDesktop.contact-us') }}
            </RouterLink>
            <Listbox v-model="$i18n.locale">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full cursor-pointer rounded-lg bg-transparent pt-1 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span 
                  :class="[isBlack ? 'text-black' : 'text-white']"
                  class="block truncate uppercase text-sm font-bold">{{ $i18n.locale }}</span>
                  <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <IconArrowLang />
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                  leave-to-class="opacity-0">
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm uppercase">
                    <ListboxOption v-slot="{ active, selected }" v-for="locale in $i18n.availableLocales"
                      :key="`locale-${locale}`" :value="locale" as="template">
                      <li :class="[
                      active ? 'bg-[#DBF6FF] text-primaryBlue' : 'text-primaryBlue',
                      'relative cursor-pointer select-none py-2 pl-3 pr-3',
                      ]">
                        <span :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                        ]">{{ locale }}</span>
                        <span v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-2 text-[#19C4FF]">
                          <IconSelectLang />
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>

        </div>
        <div class="-mr-2 flex items-center md:hidden">
          <Listbox v-model="$i18n.locale">
            <div class="relative mt-1">
              <ListboxButton
                class="relative w-full cursor-pointer rounded-lg bg-transparent pt-1 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span 
                :class="[isBlack ? 'text-black' : 'text-white']"
                class="block truncate uppercase text-sm font-bold">{{ $i18n.locale }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <IconArrowLang />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm uppercase">
                  <ListboxOption v-slot="{ active, selected }" v-for="locale in $i18n.availableLocales"
                    :key="`locale-${locale}`" :value="locale" as="template">
                    <li :class="[
                    active ? 'bg-[#DBF6FF] text-gray-90' : 'text-gray-900',
                    'relative cursor-pointer select-none py-2 pl-3 pr-3',
                    ]">
                      <span :class="[
                          selected ? 'font-medium' : 'font-normal',
                          'block truncate',
                      ]">{{ locale }}</span>
                      <span v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-900">
                        <IconSelectLang />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden backdrop-blur-md pb-10">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700" -->

        <DisclosureButton as="a" href="/"
          :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
          class="border-transparent hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase text-right">
          {{ $t('navigation.navItemsDesktop.home') }}
        </DisclosureButton>

        <DisclosureButton as="a" href="/about"
          :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
          class="border-transparent hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase text-right">
          {{ $t('navigation.navItemsDesktop.about-us') }}
        </DisclosureButton>

        <DisclosureButton as="a" href="/businesses"
          :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
          class="border-transparent hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase text-right">
          {{ $t('navigation.navItemsDesktop.businesses') }}
        </DisclosureButton>

        <DisclosureButton as="a" href="/work"
          :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
          class="border-transparent hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase text-right">
          {{ $t('navigation.navItemsDesktop.work-with-us') }}
        </DisclosureButton>

        <DisclosureButton as="a" href="/contact"
          :class="[isBlack ? 'text-black hover:text-gray' : 'text-lightWhite hover:text-white']"
          class="border-transparent hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase text-right">
          {{ $t('navigation.navItemsDesktop.contact-us') }}
        </DisclosureButton>

      </div>
    </DisclosurePanel>
  </Disclosure>
</template>


  