<script>
export default {
  name: 'speaker-slash',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9325 7.22809C22.1984 8.49396 22.9095 10.2108 22.9095 12.0011C22.9095 13.7913 22.1984 15.5082 20.9325 16.774M7.91119 8.25106V15.7511M7.91119 8.25106L3.41174 8.25106C3.21283 8.25106 3.02207 8.33008 2.88141 8.47073C2.74076 8.61139 2.66174 8.80215 2.66174 9.00106V15.0011C2.66174 15.2 2.74076 15.3907 2.88141 15.5314C3.02207 15.672 3.21283 15.7511 3.41174 15.7511L7.91119 15.7511M7.91119 8.25106L8.55138 7.75357M7.91119 15.7511L14.6617 21.0011V14.475M18.2808 9.87974C18.8435 10.4423 19.1595 11.2054 19.1595 12.0011C19.1595 12.7967 18.8435 13.5598 18.2808 14.1224M4.91174 3.74997L19.9117 20.25M10.9264 5.90632L14.6617 3.0011V10.0152" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    