<script>
export default {
  name: 'layout-2',
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
<path d="M8 4H6C4.89543 4 4 4.89543 4 6V7C4 8.10457 4.89543 9 6 9H8C9.10457 9 10 8.10457 10 7V6C10 4.89543 9.10457 4 8 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13H6C4.89543 13 4 13.8954 4 15V18C4 19.1046 4.89543 20 6 20H8C9.10457 20 10 19.1046 10 18V15C10 13.8954 9.10457 13 8 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 4H16C14.8954 4 14 4.89543 14 6V9C14 10.1046 14.8954 11 16 11H18C19.1046 11 20 10.1046 20 9V6C20 4.89543 19.1046 4 18 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 15H16C14.8954 15 14 15.8954 14 17V18C14 19.1046 14.8954 20 16 20H18C19.1046 20 20 19.1046 20 18V17C20 15.8954 19.1046 15 18 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    