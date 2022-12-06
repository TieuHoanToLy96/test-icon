<script>
export default {
  name: 'folder-plus',
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
<path d="M3.82324 7.5V18.8077C3.82378 18.9911 3.89689 19.1669 4.02661 19.2966C4.15632 19.4264 4.3321 19.4995 4.51555 19.5H21.1566C21.3334 19.5 21.503 19.4298 21.628 19.3047C21.753 19.1797 21.8232 19.0101 21.8232 18.8333V8.25C21.8232 8.05109 21.7442 7.86032 21.6036 7.71967C21.4629 7.57902 21.2722 7.5 21.0732 7.5H3.82324ZM3.82324 7.5V5.25C3.82324 5.05109 3.90226 4.86032 4.04291 4.71967C4.18356 4.57902 4.37433 4.5 4.57324 4.5H9.51258C9.61107 4.5 9.7086 4.5194 9.7996 4.55709C9.89059 4.59478 9.97327 4.65003 10.0429 4.71967L12.8232 7.5M10.5732 13.5H15.0732M12.8232 11.25V15.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    