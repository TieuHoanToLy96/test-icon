<script>
export default {
  name: 'divide-svg',
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
<path d="M3.98523 12H20.4852" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.234 7.3125C12.9582 7.3125 13.5453 6.72487 13.5453 6C13.5453 5.27513 12.9582 4.6875 12.234 4.6875C11.5098 4.6875 10.9227 5.27513 10.9227 6C10.9227 6.72487 11.5098 7.3125 12.234 7.3125Z" fill="currentColor"/>
<path d="M12.234 19.3125C12.9582 19.3125 13.5453 18.7249 13.5453 18C13.5453 17.2751 12.9582 16.6875 12.234 16.6875C11.5098 16.6875 10.9227 17.2751 10.9227 18C10.9227 18.7249 11.5098 19.3125 12.234 19.3125Z" fill="currentColor"/>
</svg>

</template>
    