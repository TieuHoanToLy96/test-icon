<script>
export default {
  name: 'upload-svg',
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
<path d="M17.0291 12H21.5291C21.728 12 21.9187 12.079 22.0594 12.2197C22.2 12.3603 22.2791 12.5511 22.2791 12.75V18.75C22.2791 18.9489 22.2 19.1397 22.0594 19.2803C21.9187 19.421 21.728 19.5 21.5291 19.5H3.52905C3.33014 19.5 3.13937 19.421 2.99872 19.2803C2.85807 19.1397 2.77905 18.9489 2.77905 18.75V12.75C2.77905 12.5511 2.85807 12.3603 2.99872 12.2197C3.13937 12.079 3.33014 12 3.52905 12H8.02905M12.5291 12V2.25M12.5291 2.25L8.02905 6.75M12.5291 2.25L17.0291 6.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1532 16.6875C18.6705 16.6875 19.0898 16.2678 19.0898 15.75C19.0898 15.2322 18.6705 14.8125 18.1532 14.8125C17.6359 14.8125 17.2166 15.2322 17.2166 15.75C17.2166 16.2678 17.6359 16.6875 18.1532 16.6875Z" fill="currentColor"/>
</svg>

</template>
    