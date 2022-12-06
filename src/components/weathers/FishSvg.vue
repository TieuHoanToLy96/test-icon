<script>
export default {
  name: 'fish-svg',
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
<path d="M15.389 8.0625C15.9063 8.0625 16.3257 7.64277 16.3257 7.125C16.3257 6.60723 15.9063 6.1875 15.389 6.1875C14.8717 6.1875 14.4524 6.60723 14.4524 7.125C14.4524 7.64277 14.8717 8.0625 15.389 8.0625Z" fill="currentColor"/>
<path d="M18.2301 15.7449C18.1585 15.7483 18.0866 15.75 18.0142 15.75C16.8207 15.75 15.6761 15.2759 14.8322 14.432C13.9883 13.5881 13.5142 12.4435 13.5142 11.25C12.3207 11.25 11.1761 10.7759 10.3322 9.93201C9.48827 9.08809 9.01416 7.9435 9.01416 6.75003C9.01416 6.67724 9.01588 6.60487 9.01931 6.53292M6.59325 14.3605L1.51416 16.4966L6.76416 18L8.26416 23.25L10.4017 18.1687C23.3729 17.8608 21.6523 6.64711 21.125 4.2131C21.0946 4.07239 21.0243 3.94342 20.9226 3.84164C20.8208 3.73985 20.6918 3.66956 20.5511 3.63918C18.1172 3.11194 6.90433 1.39148 6.59325 14.3605Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    