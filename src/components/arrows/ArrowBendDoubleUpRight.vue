<script>
export default {
  name: 'arrow-bend-double-up-right',
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
<path d="M16.5 14.25L21 9.75L16.5 5.25M12 14.25L16.5 9.75M16.5 9.75L12 5.25M16.5 9.75H12C9.61305 9.75 7.32387 10.6982 5.63604 12.386C3.94821 14.0739 3 16.3631 3 18.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    