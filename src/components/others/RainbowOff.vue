<script>
export default {
  name: 'rainbow-off',
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
<path d="M22 17C22 11.477 17.523 7 12 7C11.692 7 11.387 7.014 11.086 7.041M7.878 7.886C6.1256 8.6791 4.63905 9.96068 3.59651 11.5772C2.55397 13.1937 1.99966 15.0765 2 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.088 11.0688C9.67137 11.2869 8.37957 12.0048 7.44633 13.0927C6.51308 14.1806 6.00003 15.5665 6 16.9998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    