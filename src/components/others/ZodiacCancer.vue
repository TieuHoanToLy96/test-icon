<script>
export default {
  name: 'zodiac-cancer',
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
<path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 15C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11.9998C2.85232 10.8755 3.15743 9.74563 3.88531 8.72127C4.6132 7.69691 5.73879 6.81335 7.15137 6.15751C8.56394 5.50167 10.2148 5.09615 11.9417 4.98082C13.6685 4.86549 15.4118 5.04434 17 5.49977" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12C21.1477 13.1243 20.8426 14.2541 20.1147 15.2785C19.3868 16.3029 18.2612 17.1864 16.8486 17.8423C15.4361 18.4981 13.7852 18.9036 12.0583 19.019C10.3315 19.1343 8.58823 18.9554 7 18.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    