<script>
export default {
  name: 'warning-circle',
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
<path d="M12 7.5V12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9991 17.0625C12.5164 17.0625 12.9358 16.6428 12.9358 16.125C12.9358 15.6072 12.5164 15.1875 11.9991 15.1875C11.4818 15.1875 11.0625 15.6072 11.0625 16.125C11.0625 16.6428 11.4818 17.0625 11.9991 17.0625Z" fill="currentColor"/>
</svg>

</template>
    