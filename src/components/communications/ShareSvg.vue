<script>
export default {
  name: 'share-svg',
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
<path d="M17.3236 14.25L21.8236 9.75M21.8236 9.75L17.3236 5.25M21.8236 9.75H16.5736C14.5781 9.75015 12.6392 10.4132 11.0615 11.635C9.48381 12.8567 8.35666 14.568 7.85716 16.5M18.8236 20.25H4.57361C4.3747 20.25 4.18393 20.171 4.04328 20.0303C3.90263 19.8897 3.82361 19.6989 3.82361 19.5V8.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    