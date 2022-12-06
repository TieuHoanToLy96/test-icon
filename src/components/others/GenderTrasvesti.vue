<script>
export default {
  name: 'gender-trasvesti',
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
<path d="M15 20C13.6739 20 12.4021 19.4732 11.4645 18.5355C10.5268 17.5979 10 16.3261 10 15C10 13.6739 10.5268 12.4021 11.4645 11.4645C12.4021 10.5268 13.6739 10 15 10C16.3261 10 17.5979 10.5268 18.5355 11.4645C19.4732 12.4021 20 13.6739 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L11.4 11.4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 8L8 4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    