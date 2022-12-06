<script>
export default {
  name: 'hexagon-3d',
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
<path d="M19 6.84396C19.3065 7.02173 19.5605 7.27747 19.7361 7.58519C19.9118 7.89291 20.0028 8.24165 20 8.59596V15.151C20 15.879 19.606 16.55 18.97 16.904L12.971 20.748C12.6741 20.9134 12.3399 21.0002 12 21.0002C11.6601 21.0002 11.3259 20.9134 11.029 20.748L5.029 16.904C4.7171 16.7299 4.4573 16.4758 4.27641 16.1678C4.09553 15.8598 4.0001 15.5091 4 15.152V8.59596C4 7.86696 4.394 7.19596 5.029 6.84296L11.029 3.25996C11.3346 3.08918 11.6789 2.99951 12.029 2.99951C12.3791 2.99951 12.7234 3.08918 13.029 3.25996L19.029 6.84396H18.999H19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.5V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 7.5L8 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 10L20 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.5V12L8 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12L16 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.5L16 14V10L12 7.5L8 10V14L12 16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    