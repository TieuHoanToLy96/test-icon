<script>
export default {
  name: 'math-1-divide-3',
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
<path d="M10 15.5C10 15.3674 10.0527 15.2402 10.1464 15.1464C10.2402 15.0527 10.3674 15 10.5 15H12.5C12.8978 15 13.2794 15.158 13.5607 15.4393C13.842 15.7206 14 16.1022 14 16.5C14 16.8978 13.842 17.2794 13.5607 17.5607C13.2794 17.842 12.8978 18 12.5 18H11.333H12.5C12.8978 18 13.2794 18.158 13.5607 18.4393C13.842 18.7206 14 19.1022 14 19.5C14 19.8978 13.842 20.2794 13.5607 20.5607C13.2794 20.842 12.8978 21 12.5 21H10.5C10.3674 21 10.2402 20.9473 10.1464 20.8536C10.0527 20.7598 10 20.6326 10 20.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5L12 3V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    