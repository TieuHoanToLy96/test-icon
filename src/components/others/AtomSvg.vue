<script>
export default {
  name: 'atom-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12V12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0711 4.92906C17.5091 3.36706 13.0771 5.26606 9.17107 9.17206C5.26607 13.0771 3.36708 17.5091 4.92908 19.0721C6.49108 20.6331 10.9231 18.7341 14.8291 14.8281C18.7341 10.9231 20.6331 6.49106 19.0711 4.92806" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.92906 4.92908C3.36706 6.49108 5.26606 10.9231 9.17206 14.8291C13.0771 18.7341 17.5091 20.6331 19.0721 19.0711C20.6331 17.5091 18.7341 13.0771 14.8281 9.17107C10.9231 5.26607 6.49106 3.36708 4.92806 4.92908" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    