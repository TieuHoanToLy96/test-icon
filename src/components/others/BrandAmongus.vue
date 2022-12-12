<script>
export default {
  name: 'brand-amongus',
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
<path d="M10.646 12.7741C8.70695 13.1701 6.17895 13.0911 4.41195 12.1731C1.95795 10.9101 2.87495 7.51309 5.83495 7.19109C8.08895 6.96709 9.64895 6.83709 11.485 7.40509C12.32 7.66109 13.415 7.97409 12.84 10.6861C12.649 11.7531 11.77 12.5901 10.646 12.7741V12.7741Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.84003 7.13203C5.92303 6.56803 6.05403 6.01203 6.23203 5.47103C6.68803 4.53503 7.32703 3.40303 10.217 3.01503C11.1734 2.9806 12.131 3.00732 13.084 3.09503C14.86 3.23503 15.727 4.32903 16.371 6.46303C16.71 7.62003 16.831 8.80503 17 10V21L4.29603 20.981C3.74403 18.595 4.03403 15.087 4.50003 12.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10C17.991 10.163 19.105 10.383 20.069 10.67C20.324 10.8 20.589 10.945 20.603 11.175C20.867 14.609 21.173 18.623 20.881 21H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    