<script>
export default {
  name: 'globe-simple',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4707 12C21.4707 16.9706 17.4413 21 12.4707 21C7.50014 21 3.4707 16.9706 3.4707 12M21.4707 12C21.4707 7.02944 17.4413 3 12.4707 3C7.50014 3 3.4707 7.02944 3.4707 12M21.4707 12H3.4707M16.2207 12C16.2207 16.8371 14.5418 20.7584 12.4707 20.7584C10.3996 20.7584 8.7207 16.8371 8.7207 12C8.7207 7.16287 10.3996 3.2416 12.4707 3.2416C14.5418 3.2416 16.2207 7.16287 16.2207 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    