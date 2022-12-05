<script>
export default {
  name: 'broadcast-svg',
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
<path d="M18.364 19.3639C19.6227 18.1052 20.4798 16.5016 20.8271 14.7558C21.1743 13.0099 20.9961 11.2004 20.3149 9.55582C19.6337 7.9113 18.4802 6.50569 17.0001 5.51677C15.5201 4.52784 13.78 4 12 4C10.22 4 8.47992 4.52784 6.99988 5.51677C5.51984 6.50569 4.36629 7.9113 3.6851 9.55582C3.00391 11.2004 2.82567 13.0099 3.17293 14.7558C3.52019 16.5016 4.37734 18.1052 5.636 19.3639" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.536 16.536C16.2351 15.8367 16.7112 14.9458 16.904 13.9759C17.0968 13.0061 16.9978 12.0008 16.6193 11.0873C16.2408 10.1737 15.5999 9.39289 14.7777 8.84354C13.9555 8.29419 12.9889 8.00098 12 8.00098C11.0112 8.00098 10.0445 8.29419 9.22229 8.84354C8.40007 9.39289 7.75921 10.1737 7.38073 11.0873C7.00225 12.0008 6.90316 13.0061 7.09598 13.9759C7.2888 14.9458 7.76487 15.8367 8.464 16.536" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    