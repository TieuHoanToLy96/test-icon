<script>
export default {
  name: 'record-svg',
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
<path d="M12.2942 21C17.2648 21 21.2942 16.9706 21.2942 12C21.2942 7.02944 17.2648 3 12.2942 3C7.32363 3 3.29419 7.02944 3.29419 12C3.29419 16.9706 7.32363 21 12.2942 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2942 18C15.6079 18 18.2942 15.3137 18.2942 12C18.2942 8.68629 15.6079 6 12.2942 6C8.98048 6 6.29419 8.68629 6.29419 12C6.29419 15.3137 8.98048 18 12.2942 18Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    