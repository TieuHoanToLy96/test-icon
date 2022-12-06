<script>
export default {
  name: 'presentation-svg',
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
<path d="M15.8823 17.25L18.8823 21M9.88233 17.25L6.88232 21M12.8823 4.5V2.25M4.63232 4.5H21.1323C21.5465 4.5 21.8823 4.83579 21.8823 5.25V16.5C21.8823 16.9142 21.5465 17.25 21.1323 17.25H4.63232C4.21811 17.25 3.88232 16.9142 3.88232 16.5V5.25C3.88232 4.83579 4.21811 4.5 4.63232 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    