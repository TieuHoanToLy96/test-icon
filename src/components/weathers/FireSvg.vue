<script>
export default {
  name: 'fire-svg',
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
<path d="M17.4646 13.875C17.3051 14.8966 16.8252 15.8411 16.0941 16.5722C15.363 17.3033 14.4186 17.7832 13.397 17.9427M7.40034 6.12727C5.95301 8.30914 4.77197 10.8014 4.77197 13.125C4.77197 15.2136 5.60166 17.2166 7.07851 18.6935C8.55536 20.1703 10.5584 21 12.647 21C14.7356 21 16.7386 20.1703 18.2154 18.6935C19.6923 17.2166 20.522 15.2136 20.522 13.125C20.522 8.25002 17.147 4.50002 14.4117 1.76923L11.147 8.62502L7.40034 6.12727Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    