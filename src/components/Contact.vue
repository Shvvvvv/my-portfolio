<script setup lang="ts">
import { ref } from 'vue'
import BoxCard from './Box/BoxCard.vue'
import Swal from 'sweetalert2'

const inputSendEmail = ref<any>({
  name: '',
  email: '',
  _subject: '',
  message: ''
})

const apiEmail = ref<string>('https://formspree.io/f/mjvnenbv')

const sendEmail = async (): Promise<void> => {
  await fetch(apiEmail.value, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputSendEmail.value)
  })
    .then((res) => res.json())
    .then((response) => {
      Swal.fire({
        title: 'Success',
        text: 'Your message has been successfully sent.',
        icon: 'success'
      }).then(() => {
        inputSendEmail.value = {
          name: '',
          email: '',
          _subject: '',
          message: ''
        }
      })
    })
    .catch((err) => {
      Swal.fire({
        title: 'Failed',
        text: 'Your message failed to send.',
        icon: 'error'
      })
    })
}
</script>

<template>
  <section
    id="contact"
    class="w-screen scroll-mt-16 bg-fontColor text-primaryColor p-8 md:p-16 lg:p-28"
  >
    <p
      class="my-4 text-xl relative w-fit after:content-[''] after:bg-highlightColor after:w-[50vw] after:h-[.1rem] after:absolute after:left-[140%] after:top-3"
    >
      Contact
    </p>
    <p class="text-5xl">CONTACT ME</p>
    <div class="flex flex-wrap gap-4 mt-4">
      <BoxCard class="w-full" title="Email Me">
        <template #icon>
          <font-awesome-icon icon="envelope" />
        </template>
        <template #default>
          <p>arisandishevamaldini@gmail.com</p>
        </template>
      </BoxCard>
      <BoxCard class="w-full md:w-[48.7%]" title="Call Me">
        <template #icon>
          <font-awesome-icon icon="phone" />
        </template>
        <template #default>
          <p>+62 851 7531 2269</p>
        </template>
      </BoxCard>
      <BoxCard class="w-full md:w-[48.7%]" title="Whatsapp Me">
        <template #icon>
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </template>
        <template #default>
          <p>+62 813 1397 9507</p>
        </template>
      </BoxCard>
    </div>
    <div class="flex justify-center items-center mt-5 text-3xl">
      <a href="#">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </div>
    <div
      class="w-full bg-secondaryColor mt-5 rounded p-5 flex flex-col md:flex-row md:flex-wrap gap-5"
    >
      <input
        type="text"
        placeholder="Your Name"
        v-model="inputSendEmail.name"
        class="w-full md:w-[48.2%] lg:w-[48.4%] p-3 bg-slate-400/50 rounded focus:outline-none"
      />
      <input
        type="text"
        placeholder="Your Email"
        v-model="inputSendEmail.email"
        class="w-full md:w-[48.2%] lg:w-[48.4%] p-3 bg-slate-400/50 rounded focus:outline-none"
      />
      <input
        type="text"
        placeholder="Subject"
        v-model="inputSendEmail._subject"
        class="w-full p-3 bg-slate-400/50 rounded focus:outline-none"
      />
      <textarea
        placeholder="Message"
        v-model="inputSendEmail.message"
        class="w-full p-3 bg-slate-400/50 rounded focus:outline-none h-48"
      />
      <button @click="sendEmail" class="w-full bg-highlightColor p-3 rounded">Send Message</button>
    </div>
  </section>
</template>
