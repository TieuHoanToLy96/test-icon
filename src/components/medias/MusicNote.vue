<script>
export default {
  name: 'music-note',
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
<path d="M12.4707 17.25C12.4707 19.3211 10.7918 21 8.7207 21C6.64964 21 4.9707 19.3211 4.9707 17.25C4.9707 15.1789 6.64964 13.5 8.7207 13.5C10.7918 13.5 12.4707 15.1789 12.4707 17.25ZM12.4707 17.25V3.75L19.9707 6V10.5L12.4707 8.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    