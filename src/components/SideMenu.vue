<script setup lang="ts">
import { ref } from 'vue'

const isActiveMenu = ref<boolean>(false)

const handleActiveMenu = (): void => {
  isActiveMenu.value = !isActiveMenu.value
}
</script>

<template>
  <nav class="bg-white flex items-center justify-between w-[90%] m-auto p-3 rounded-lg mt-5">
    <div class="flex items-center gap-2">
      <img src="../assets/img/as_logo.png" alt="as_logo_personal" class="w-8 md:w-12" />
      <p class="md:text-xl">SHVMLDINI</p>
    </div>
    <div class="flex gap-3 md:hidden">
      <a href="./../../public/my-cv.pdf" target="_blank">
        <button class="bg-highlightColor text-white text-sm px-2 py-1 rounded-full md:hidden">
          Resume
        </button>
      </a>
      <button @click="handleActiveMenu">
        <font-awesome-icon icon="bars" class="text-fontColor" />
      </button>
    </div>
    <ul class="md:flex justify-end gap-4 md:w-[60%] lg:w-[50%] xl:w-[40%] items-center hidden">
      <li class="hover:bg-highlightColor hover:text-white px-4 py-1 w-28 text-center rounded-full">
        <a href="#about">About</a>
      </li>
      <li class="hover:bg-highlightColor hover:text-white px-4 py-1 w-28 text-center rounded-full">
        <a href="#project">Project</a>
      </li>
      <li class="hover:bg-highlightColor hover:text-white px-4 py-1 w-28 text-center rounded-full">
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="./../../public/my-cv.pdf" target="_blank">
          <button class="bg-highlightColor text-white px-4 py-1 rounded-full">Resume</button>
        </a>
      </li>
    </ul>
  </nav>
  <teleport to="body">
    <div
      class="h-screen left-0 bg-secondaryColor z-50 fixed top-0 bg-opacity-[.95] text-primaryColor transition-all overflow-hidden inset-0"
      :class="[isActiveMenu ? 'w-screen' : 'w-0']"
    >
      <div class="flex justify-between items-start p-4">
        <ul class="flex flex-col gap-6 w-[50%]">
          <li class="border-b">
            <a href="#about">About</a>
          </li>
          <li class="border-b">
            <a href="#project">Project</a>
          </li>
          <li class="border-b">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button @click="handleActiveMenu">
          <font-awesome-icon icon="xmark" size="xl" />
        </button>
      </div>
    </div>
  </teleport>
</template>
