<script>
export default {
  name: 'brand-deliveroo',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 11L16 2L21 2.5L20 16L17 22L4.5 19.5L3 13.5L10 12L8.5 4.5L13 3.5L15 11Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 16.5C16.0523 16.5 16.5 16.0523 16.5 15.5C16.5 14.9477 16.0523 14.5 15.5 14.5C14.9477 14.5 14.5 14.9477 14.5 15.5C14.5 16.0523 14.9477 16.5 15.5 16.5Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 15.5C12.0523 15.5 12.5 15.0523 12.5 14.5C12.5 13.9477 12.0523 13.5 11.5 13.5C10.9477 13.5 10.5 13.9477 10.5 14.5C10.5 15.0523 10.9477 15.5 11.5 15.5Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    