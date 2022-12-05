<script>
export default {
  name: 'tray-svg',
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
<path d="M3.98486 15H7.4242C7.52269 15 7.62022 15.0194 7.71122 15.0571C7.80221 15.0948 7.88489 15.15 7.95453 15.2197L9.76519 17.0303C9.83484 17.1 9.91752 17.1552 10.0085 17.1929C10.0995 17.2306 10.197 17.25 10.2955 17.25H14.1742C14.2727 17.25 14.3702 17.2306 14.4612 17.1929C14.5522 17.1552 14.6349 17.1 14.7045 17.0303L16.5152 15.2197C16.5848 15.15 16.6675 15.0948 16.7585 15.0571C16.8495 15.0194 16.947 15 17.0455 15H20.4849M4.73541 3.75H19.7354C20.1496 3.75 20.4854 4.08579 20.4854 4.5V19.5C20.4854 19.9142 20.1496 20.25 19.7354 20.25H4.73541C4.3212 20.25 3.98541 19.9142 3.98541 19.5V4.5C3.98541 4.08579 4.3212 3.75 4.73541 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    