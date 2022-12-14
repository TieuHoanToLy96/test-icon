<script>
export default {
  name: 'shield-svg',
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
<path d="M12.0001 3C14.3359 5.06658 17.3846 6.14257 20.5001 6C20.9537 7.54302 21.0925 9.16147 20.9082 10.7592C20.7239 12.3569 20.2204 13.9013 19.4275 15.3005C18.6346 16.6998 17.5685 17.9254 16.2925 18.9045C15.0166 19.8836 13.5569 20.5962 12.0001 21C10.4433 20.5962 8.98356 19.8836 7.70762 18.9045C6.43169 17.9254 5.36559 16.6998 4.57267 15.3005C3.77976 13.9013 3.27621 12.3569 3.09195 10.7592C2.9077 9.16147 3.04649 7.54302 3.50008 6C6.61561 6.14257 9.66425 5.06658 12.0001 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    