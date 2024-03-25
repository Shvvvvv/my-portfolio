<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
  <div class="bg-secondaryColor p-4 flex gap-5 rounded">
    <div class="rounded-full bg-slate-400/50 w-10 h-10 flex justify-center items-center">
      <slot name="icon"></slot>
    </div>
    <div>
      <p>{{ props.title }}</p>
      <slot></slot>
    </div>
  </div>
</template>
