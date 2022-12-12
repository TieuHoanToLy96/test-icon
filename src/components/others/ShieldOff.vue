<script>
export default {
  name: 'shield-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.6688 17.669C16.1261 19.2855 14.1628 20.4391 11.9998 21C10.443 20.5962 8.98331 19.8836 7.70738 18.9045C6.43144 17.9254 5.36534 16.6998 4.57243 15.3005C3.77952 13.9013 3.27597 12.3569 3.09171 10.7592C2.90745 9.16147 3.04624 7.54302 3.49983 6C4.29683 6.036 5.08883 6 5.86583 5.874M8.95783 4.962C10.0652 4.46558 11.0909 3.80406 11.9998 3C14.3357 5.06658 17.3843 6.14257 20.4998 6C20.9578 7.55759 21.0949 9.1919 20.9029 10.804C20.7109 12.4161 20.1938 13.9725 19.3828 15.379" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    