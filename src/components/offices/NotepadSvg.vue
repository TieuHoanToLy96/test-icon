<script>
export default {
  name: 'notepad-svg',
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
<path d="M9.17676 12.0005H15.1768M9.17676 15.0005H15.1768M7.67676 2.25055V5.25055M12.1768 2.25055V5.25055M16.6768 2.25055V5.25055M5.42676 3.75055H18.9268C19.1257 3.75055 19.3164 3.82957 19.4571 3.97022C19.5977 4.11087 19.6768 4.30164 19.6768 4.50055V18.7505C19.6768 19.3473 19.4397 19.9196 19.0177 20.3415C18.5958 20.7635 18.0235 21.0006 17.4268 21.0006H6.92676C6.33002 21.0006 5.75772 20.7635 5.33577 20.3415C4.91381 19.9196 4.67676 19.3473 4.67676 18.7505V4.50055C4.67676 4.30164 4.75578 4.11087 4.89643 3.97022C5.03708 3.82957 5.22785 3.75055 5.42676 3.75055Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    