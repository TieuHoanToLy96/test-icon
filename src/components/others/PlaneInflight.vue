<script>
export default {
  name: 'plane-inflight',
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
<path d="M15 11.085H20C20.5304 11.085 21.0391 11.2957 21.4142 11.6707C21.7893 12.0458 22 12.5545 22 13.085C22 13.6154 21.7893 14.1241 21.4142 14.4992C21.0391 14.8742 20.5304 15.085 20 15.085H5L2 9.08496H5L7 11.085H10L8 4.08496H11L15 11.085Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    