<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const boxSkill = ref<HTMLElement | null>(null)
const mySkill = [
  {
    nameSkill: 'VueJS',
    value: 79
  },
  {
    nameSkill: 'ReactJs',
    value: 65
  },
  {
    nameSkill: 'TailwindCSS',
    value: 75
  },
  {
    nameSkill: 'NodeJS',
    value: 78
  },
  {
    nameSkill: 'MySQL',
    value: 77
  },
  {
    nameSkill: 'PostgreSQL',
    value: 65
  }
]
const positionSkill = ref<number | undefined>(0)
const showSkill = ref<boolean>(false)
const pos = ref<number>(0)

const level = computed(() => {
  return (percentage: number) => {
    if (percentage <= 50) return 'Basic'
    else if (percentage <= 70) return 'Intermediate'
    else if (percentage <= 80) return 'Advanced'
    else if (percentage > 80) return 'Expert'
  }
})

onMounted(() => {
  positionSkill.value = boxSkill.value?.getBoundingClientRect().top
  positionSkill.value! -= window.innerHeight / 1.2
  window.addEventListener('scroll', () => {
    pos.value = window.scrollY
    if (positionSkill.value && pos.value >= positionSkill.value) {
      showSkill.value = true
    }
  })
})
</script>

<template>
  <div class="flex flex-wrap justify-between gap-2" ref="boxSkill">
    <div class="w-full md:w-[49%]" v-for="skill in mySkill">
      <div class="flex justify-between">
        <p>{{ skill.nameSkill }}</p>
        <p>{{ skill.value }}</p>
      </div>
      <div class="w-full h-fit bg-secondaryColor">
        <div
          class="skill bg-highlightColor text-sm box-border ps-1 transition-[width] ease-in duration-300"
          :style="{ width: `${showSkill ? skill.value : 0}%` }"
        >
          {{ level(skill.value) }}
        </div>
      </div>
    </div>
  </div>
</template>
