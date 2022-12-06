<script>
export default {
  name: 'arrow-guide',
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
<path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19H10C10.5304 19 11.0391 18.7893 11.4142 18.4142C11.7893 18.0391 12 17.5304 12 17V9C12 8.46957 12.2107 7.96086 12.5858 7.58579C12.9609 7.21071 13.4696 7 14 7H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 4L21 7L18 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    