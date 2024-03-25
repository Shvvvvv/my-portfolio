<script lang="ts" setup>
import SideMenu from './components/SideMenu.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <header class="sticky top-4 z-20">
    <SideMenu />
  </header>
  <main>
    <div class="h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div
        class="w-56 h-56 rounded-full absolute -z-20 bg-transparent border-2 border-fontColor top-5 -left-28"
      ></div>
      <div
        class="w-56 h-56 rounded-full absolute -z-20 bg-transparent border-2 border-fontColor bottom-5 -right-28"
      ></div>
      <div
        class="w-20 h-20 rounded-full absolute -z-20 bg-transparent border-2 border-fontColor bottom-5 left-5"
      ></div>
      <div
        class="w-20 h-20 rounded-full absolute -z-20 bg-transparent border-2 border-fontColor top-5 right-5"
      ></div>
      <p class="text-7xl sm:text-[5.5rem] text-center text-secondaryColor animate-slide-up">
        ARI SANDI SHEFA MALDINI
      </p>
    </div>
    <About />
    <Service />
    <Contact />
  </main>
</template>
