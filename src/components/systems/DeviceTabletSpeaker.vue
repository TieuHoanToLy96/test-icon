<script>
export default {
  name: 'device-tablet-speaker',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.38838 6H15.7884M20.5884 4.5V19.5C20.5884 20.3284 19.872 21 18.9884 21H6.18838C5.30472 21 4.58838 20.3284 4.58838 19.5V4.5C4.58838 3.67157 5.30472 3 6.18838 3H18.9884C19.872 3 20.5884 3.67157 20.5884 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    