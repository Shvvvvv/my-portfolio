import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faDownload,
  faXmark,
  faArrowUpRightFromSquare,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'sweetalert2/src/sweetalert2.scss'

library.add(
  faBars,
  faXmark,
  faDownload,
  faArrowUpRightFromSquare,
  faEnvelope,
  faPhone,
  faWhatsapp,
  faLinkedin
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
