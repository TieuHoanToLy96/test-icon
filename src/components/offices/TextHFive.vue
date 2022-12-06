<script>
export default {
  name: 'text-hfive',
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
<path d="M3.75 5.25V16.5M13.5 10.875H3.75M13.5 5.25V16.5M22.5 10.125H18.7345L18 14.644C18.3671 14.2769 18.8348 14.0269 19.344 13.9256C19.8532 13.8243 20.381 13.8763 20.8606 14.0749C21.3403 14.2736 21.7502 14.6101 22.0387 15.0417C22.3271 15.4734 22.4811 15.9809 22.4811 16.5001C22.4811 17.0192 22.3271 17.5267 22.0387 17.9584C21.7502 18.3901 21.3403 18.7265 20.8606 18.9252C20.381 19.1239 19.8532 19.1759 19.344 19.0746C18.8348 18.9733 18.3671 18.7233 18 18.3562" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    