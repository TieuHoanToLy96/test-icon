<script>
export default {
  name: 'zeppelin-svg',
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
<path d="M13.5 4C18.194 4 22 6.686 22 10C22 13.314 18.194 16 13.5 16C11.37 16 8.916 15.074 6.136 13.223L4 15V11.67C3.31772 11.1323 2.65079 10.5754 2 10C2.65079 9.42459 3.31772 8.8677 4 8.33V5L6.135 6.778C8.915 4.926 11.37 4 13.5 4V4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15.5V20H16V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    