<script>
export default {
  name: 'gender-neutrois',
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
<path d="M12 10C13.3261 10 14.5979 10.5268 15.5355 11.4645C16.4732 12.4021 17 13.6739 17 15C17 16.3261 16.4732 17.5979 15.5355 18.5355C14.5979 19.4732 13.3261 20 12 20C10.6739 20 9.40215 19.4732 8.46447 18.5355C7.52678 17.5979 7 16.3261 7 15C7 13.6739 7.52678 12.4021 8.46447 11.4645C9.40215 10.5268 10.6739 10 12 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    