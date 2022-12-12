<script>
export default {
  name: 'battery-full',
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
<path d="M22.647 9.11111V14.8889M12.8692 15.6112V8.38893M9.46179 15.6112V8.38893M6.05438 15.6112V8.38893M16.2766 15.6112V8.38893M19.684 6.94444V17.0556C19.684 17.8533 19.0207 18.5 18.2025 18.5H4.12845C3.31025 18.5 2.64697 17.8533 2.64697 17.0556V6.94444C2.64697 6.1467 3.31025 5.5 4.12845 5.5H18.2025C19.0207 5.5 19.684 6.1467 19.684 6.94444Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    