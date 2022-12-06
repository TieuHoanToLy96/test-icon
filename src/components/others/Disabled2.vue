<script>
export default {
  name: 'disabled-2',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00004 11C8.14163 10.9852 7.29386 11.1916 6.53837 11.5994C5.78289 12.0073 5.14515 12.6028 4.68657 13.3286C4.228 14.0544 3.96404 14.8861 3.92012 15.7435C3.8762 16.6009 4.05381 17.4552 4.43582 18.2241C4.81784 18.9929 5.3914 19.6505 6.10126 20.1334C6.81112 20.6163 7.63336 20.9083 8.4888 20.9812C9.34424 21.0541 10.204 20.9056 10.9854 20.5498C11.7668 20.1941 12.4434 19.6431 12.95 18.95" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 20L15 15H11L14 10L10 7L6 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    