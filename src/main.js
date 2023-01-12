import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

library.add(faXmark, faPlus)



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
