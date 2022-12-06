<script>
export default {
  name: 'number-circle-four',
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
<path d="M12.0366 7.125L9.78674 13.5H14.2867M14.2867 10.5V16.5M21.4117 12C21.4117 16.9706 17.3823 21 12.4117 21C7.44118 21 3.41174 16.9706 3.41174 12C3.41174 7.02944 7.44118 3 12.4117 3C17.3823 3 21.4117 7.02944 21.4117 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    