<script>
export default {
  name: 'bluetooth-x',
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
<path d="M22.5149 9.75L18.0149 5.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0149 12.0003L18.0149 16.5003L12.0149 21.0003V12.0003ZM12.0149 12.0003L6.01489 7.50026M12.0149 12.0003L6.01489 16.5003M12.0149 12.0003L15.0149 9.75021M12.0149 12.0003V3.00031L15.0148 5.25021M22.5149 5.25002L18.0149 9.75002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    