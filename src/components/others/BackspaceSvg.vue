<script>
export default {
  name: 'backspace-svg',
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
<path d="M20.0001 6C20.2653 6 20.5197 6.10536 20.7072 6.29289C20.8948 6.48043 21.0001 6.73478 21.0001 7V17C21.0001 17.2652 20.8948 17.5196 20.7072 17.7071C20.5197 17.8946 20.2653 18 20.0001 18H9.00013L4.00013 13C3.75415 12.725 3.61816 12.369 3.61816 12C3.61816 11.631 3.75415 11.275 4.00013 11L9.00013 6H20.0001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10L16 14M16 10L12 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    