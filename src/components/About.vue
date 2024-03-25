<script setup lang="ts">
import Skill from './Skill.vue'
</script>

<template>
  <section
    id="about"
    class="about w-screen scroll-mt-16 bg-fontColor text-primaryColor p-8 sm:p-10 md:p-16 lg:px-24"
    ref="about"
  >
    <div class="lg:px-20 xl:px-28">
      <p class="text-8xl md:text-9xl lg:text-[10rem] tracking-tighter mb-2 animate-slide-up">
        /ABOUT
      </p>
    </div>
    <div class="flex gap-2 lg:gap-16 lg:px-20 xl:px-28">
      <div class="w-[30%] md:w-[40%] lg:w-[20%] 2xl:w-[15%] hidden sm:flex px-2 box-border">
        <font-awesome-icon
          icon="arrow-up-right-from-square"
          class="text-8xl sm:text-9xl md:text-[10rem] animate-slide-up text-secondaryColor"
        />
      </div>
      <p class="animate-slide-up w-full text-center sm:text-left sm:w-[70%] xl:w-[60%]">
        Hi! I'm Sandi, a web developer from Indonesia with over 2 years of experience. I specialize
        in JavaScript, with expertise in frameworks like React.js and Vue.js for frontend
        development, as well as Node.js for backend development. I've worked on a range of projects,
        from business websites to complex web applications, leveraging my skills in both frontend
        and backend technologies. I believe in the power of collaboration and effective
        communication to drive success. Currently seeking challenging projects to make a positive
        impact. Let's connect and explore opportunities!
      </p>
    </div>
    <div class="mt-10">
      <p
        class="my-4 text-xl relative w-fit after:content-[''] after:bg-highlightColor after:w-[50vw] after:h-[.1rem] after:absolute after:left-[140%] after:top-3"
      >
        Skill
      </p>
      <Skill />
    </div>
  </section>
</template>
