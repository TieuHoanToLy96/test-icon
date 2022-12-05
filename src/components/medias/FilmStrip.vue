<script>
export default {
  name: 'film-strip',
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
<path d="M19.5957 7.5H21.4707M19.5957 16.5H21.4707M3.4707 7.5H5.3457M3.4707 16.5H5.3457M9.0957 7.5H10.5957M9.0957 16.5H10.5957M14.3457 7.5H15.8457M14.3457 16.5H15.8457M4.2207 4.5H20.7207C21.1349 4.5 21.4707 4.83579 21.4707 5.25V18.75C21.4707 19.1642 21.1349 19.5 20.7207 19.5H4.2207C3.80649 19.5 3.4707 19.1642 3.4707 18.75V5.25C3.4707 4.83579 3.80649 4.5 4.2207 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    