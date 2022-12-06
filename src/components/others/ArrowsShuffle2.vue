<script>
export default {
  name: 'arrows-shuffle-2',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4L21 7L18 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 20L21 17L18 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7H6C7.32608 7 8.59785 7.52678 9.53553 8.46447C10.4732 9.40215 11 10.6739 11 12C11 13.3261 11.5268 14.5979 12.4645 15.5355C13.4021 16.4732 14.6739 17 16 17H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 17H6C7.32608 17 8.59785 16.4732 9.53553 15.5355C10.4732 14.5979 11 13.3261 11 12C11 10.6739 11.5268 9.40215 12.4645 8.46447C13.4021 7.52678 14.6739 7 16 7H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    