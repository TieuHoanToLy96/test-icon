<script>
export default {
  name: 'battery-high',
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
<path d="M22.7056 9.11111V14.8889M12.9278 15.6112V8.38893M9.52038 15.6112V8.38893M6.11297 15.6112V8.38893M19.7426 6.94444V17.0556C19.7426 17.8533 19.0793 18.5 18.2611 18.5H4.18705C3.36885 18.5 2.70557 17.8533 2.70557 17.0556V6.94444C2.70557 6.1467 3.36885 5.5 4.18705 5.5H18.2611C19.0793 5.5 19.7426 6.1467 19.7426 6.94444Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    