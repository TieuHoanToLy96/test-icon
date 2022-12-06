import { createApp } from 'vue'
import App from './App.vue'
import { Modal, Button, Menu, Layout, Input, Radio, Anchor } from 'ant-design-vue'

import './style.css'
import 'ant-design-vue/dist/antd.css'
import '@simonwep/pickr/dist/themes/nano.min.css'

const app = createApp(App)

app.use(Input)
app.use(Modal)
app.use(Button)
app.use(Menu)
app.use(Layout)
app.use(Radio)
app.use(Anchor)
app.mount('#app')
