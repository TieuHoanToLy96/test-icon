<script>
export default {
  name: 'eject-simple',
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
<path d="M21.6472 19.5H3.64722M12.0651 3.71639L3.89086 13.777C3.80147 13.887 3.74509 14.0202 3.72825 14.1609C3.71142 14.3017 3.73482 14.4443 3.79574 14.5723C3.85666 14.7003 3.95262 14.8084 4.07247 14.8841C4.19233 14.9598 4.33119 15 4.47294 15H20.8215C20.9633 15 21.1021 14.9598 21.222 14.8841C21.3418 14.8084 21.4378 14.7003 21.4987 14.5723C21.5596 14.4443 21.583 14.3017 21.5662 14.1609C21.5493 14.0202 21.493 13.887 21.4036 13.777L13.2293 3.71639C13.159 3.62983 13.0702 3.56006 12.9695 3.51213C12.8689 3.4642 12.7587 3.43933 12.6472 3.43933C12.5357 3.43933 12.4256 3.4642 12.3249 3.51213C12.2242 3.56006 12.1355 3.62983 12.0651 3.71639Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    