<script>
export default {
  name: 'brand-disney',
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
<path d="M3.21998 5.838C1.91298 5.688 1.99998 5.26 1.99998 5.044C1.99998 4.828 2.42398 4 6.33998 4C11.034 4 21 7.645 21 14.042C21 20.439 12.29 18.973 10.565 18.562C8.84098 18.15 4.99998 16.306 4.99998 14.388C4.99998 12.993 8.07998 12 11.715 12C15.349 12 17 13.041 17 14C17 14.5 16.926 15.229 16 15.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.02 8C9.96421 12.3332 9.96421 16.6668 10.02 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    