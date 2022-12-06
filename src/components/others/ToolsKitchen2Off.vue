<script>
export default {
  name: 'tools-kitchen-2-off',
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
<path d="M14.3858 10.409C14.9158 8.129 16.1518 5.717 18.9998 3V15M14.9998 15H13.9998C13.9978 14.687 13.9978 14.373 14.0018 14.059" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19V21H18V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5V7C4.99982 7.53122 5.1407 8.05297 5.40823 8.51191C5.67577 8.97085 6.06038 9.35051 6.52273 9.6121C6.98508 9.87369 7.50861 10.0078 8.03979 10.0008C8.57096 9.99372 9.09075 9.84576 9.546 9.572M11 7V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    