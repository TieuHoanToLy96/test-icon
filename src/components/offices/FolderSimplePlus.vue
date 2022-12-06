<script>
export default {
  name: 'folder-simple-plus',
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
<path d="M10.5732 13.5H15.0732M12.8232 11.25V15.75M21.8232 8.25V18.8333C21.8232 19.0101 21.753 19.1797 21.628 19.3047C21.503 19.4298 21.3334 19.5 21.1566 19.5H4.57324C4.37433 19.5 4.18356 19.421 4.04291 19.2803C3.90226 19.1397 3.82324 18.9489 3.82324 18.75V6C3.82324 5.80109 3.90226 5.61032 4.04291 5.46967C4.18356 5.32902 4.37433 5.25 4.57324 5.25H9.57324C9.73552 5.25 9.89342 5.30263 10.0232 5.4L12.6232 7.35C12.7531 7.44737 12.911 7.5 13.0732 7.5H21.0732C21.2722 7.5 21.4629 7.57902 21.6036 7.71967C21.7442 7.86032 21.8232 8.05109 21.8232 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    