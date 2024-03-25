<script setup lang="ts">
import { onMounted, ref } from 'vue'

const elProjectName = ref<any>(null)

const myProject = ref<any[]>([
  {
    name: 'satu',
    img: 'https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-anime-girl-coloring-pages-vector-png-image_6787130.png',
    show: false
  },
  {
    name: 'dua',
    img: 'https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-anime-girl-coloring-pages-vector-png-image_6787130.png',
    show: false
  },
  {
    name: 'tiga',
    img: 'https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-anime-girl-coloring-pages-vector-png-image_6787130.png',
    show: false
  },
  {
    name: 'empat',
    img: 'https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-anime-girl-coloring-pages-vector-png-image_6787130.png',
    show: false
  }
])

onMounted(() => {
  elProjectName.value?.map((htm: any, idx: number) => {
    htm.addEventListener('mouseover', () => {
      // isHoverActive.value = true
      myProject.value[idx].show = true
    })
  })
  elProjectName.value?.map((htm: any, idx: number) => {
    htm.addEventListener('mouseout', () => {
      // isHoverActive.value = false
      myProject.value[idx].show = false
    })
  })
})
</script>

<template>
  <section class="p-8 md:p-16 lg:p-28 scroll-mt-16" id="project">
    <div class="flex justify-between">
      <p class="mb-5 text-5xl font-bold">MY PROJECT</p>
    </div>
    <div class="border-t-2 border-dotted border-secondaryColor">
      <div
        class="py-4 px-1 border-b-2 border-dotted border-secondaryColor flex justify-between items-center relative"
        ref="listProject"
        v-for="project in myProject"
      >
        <p
          class="text-2xl xl:text-4xl h-5 xl:h-6 overflow-hidden hover:h-10 lg:hover:h-16 transition-all w-[75%]"
          ref="elProjectName"
        >
          {{ project.name }}
        </p>
        <p class="text-xs xl:text-base">Design & Development</p>
        <img
          class="h-20 lg:h-28 border-4 border-gray-500 absolute bottom-0 left-1/2"
          :class="[
            project.show ? 'animate-in-slide-up opacity-50' : 'animate-out-slide-down opacity-0'
          ]"
          src="https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-anime-girl-coloring-pages-vector-png-image_6787130.png"
          alt="gambar"
        />
      </div>
    </div>
  </section>
</template>
