<script>
export default {
  name: 'wifi-low',
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
<path d="M9.53467 15.5683C10.4203 14.7223 11.598 14.2503 12.8227 14.2503C14.0475 14.2503 15.2251 14.7223 16.1108 15.5683" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8226 19.6875C13.3399 19.6875 13.7593 19.2678 13.7593 18.75C13.7593 18.2322 13.3399 17.8125 12.8226 17.8125C12.3053 17.8125 11.886 18.2322 11.886 18.75C11.886 19.2678 12.3053 19.6875 12.8226 19.6875Z" fill="currentColor"/>
</svg>

</template>
    