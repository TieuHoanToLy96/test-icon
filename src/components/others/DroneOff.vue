<script>
export default {
  name: 'drone-off',
  props: {
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 1.7
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14H10V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10L6.5 6.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.95693 5.95004C9.84055 5.219 9.49557 4.54362 8.97151 4.02082C8.44745 3.49801 7.77125 3.15466 7.03993 3.04004M4.01993 4.02904C3.56139 4.48879 3.23978 5.06703 3.09107 5.69911C2.94236 6.33118 2.97242 6.99216 3.17788 7.60813C3.38334 8.2241 3.75611 8.77077 4.25448 9.18701C4.75286 9.60324 5.35721 9.87263 5.99993 9.96504" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10L17.5 6.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9999 9.96502C18.6426 9.87186 19.2467 9.60173 19.7447 9.18483C20.2426 8.76794 20.6148 8.22072 20.8195 7.60441C21.0242 6.98809 21.0533 6.32698 20.9037 5.69502C20.7542 5.06306 20.4317 4.48519 19.9724 4.02604C19.5132 3.56688 18.9352 3.24457 18.3032 3.09513C17.6712 2.9457 17.0101 2.97506 16.3938 3.17991C15.7776 3.38476 15.2305 3.75703 14.8137 4.25507C14.3969 4.75312 14.1269 5.3573 14.0339 6.00002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14L17.5 17.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0349 18C14.1273 18.6427 14.3967 19.2471 14.8129 19.7455C15.2292 20.2438 15.7758 20.6166 16.3918 20.8221C17.0078 21.0275 17.6688 21.0576 18.3008 20.9089C18.9329 20.7602 19.5112 20.4386 19.9709 19.98M20.9579 16.954C20.8421 16.2223 20.4972 15.5461 19.9729 15.0227C19.4486 14.4993 18.7718 14.1556 18.0399 14.041" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14L6.5 17.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.99988 14.0349C5.35718 14.1281 4.75307 14.3982 4.25513 14.8151C3.75719 15.232 3.38506 15.7792 3.18036 16.3955C2.97567 17.0118 2.94648 17.673 3.09607 18.3049C3.24566 18.9369 3.56812 19.5147 4.02739 19.9739C4.48666 20.4331 5.06462 20.7554 5.69661 20.9048C6.32861 21.0542 6.98971 21.0249 7.60598 20.82C8.22224 20.6152 8.76936 20.2429 9.18613 19.7449C9.6029 19.2468 9.87288 18.6426 9.96588 17.9999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    