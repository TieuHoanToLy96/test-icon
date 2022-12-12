<script>
export default {
  name: 'sun-moon',
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
<path d="M9.17307 14.8301C8.80162 14.4586 8.50698 14.0177 8.30595 13.5323C8.10493 13.047 8.00146 12.5269 8.00146 12.0016C8.00146 11.4763 8.10493 10.9561 8.30595 10.4708C8.50698 9.98548 8.80162 9.54451 9.17307 9.17307C9.54451 8.80162 9.98548 8.50698 10.4708 8.30595C10.9561 8.10493 11.4763 8.00146 12.0016 8.00146C12.5269 8.00146 13.047 8.10493 13.5323 8.30595C14.0177 8.50698 14.4586 8.80162 14.8301 9.17307" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2941 12.707L11.4681 12.954C12.4573 14.2915 13.863 15.2622 15.4642 15.7133C17.0654 16.1644 18.7712 16.0704 20.3131 15.446C19.7456 16.8115 18.8504 18.0162 17.7067 18.9534C16.563 19.8907 15.2059 20.5317 13.7555 20.8198C12.3052 21.1078 10.8061 21.0341 9.39104 20.6051C7.97593 20.1761 6.68833 19.405 5.64209 18.36" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.6001 5.6001L6.3001 6.3001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21L21 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    