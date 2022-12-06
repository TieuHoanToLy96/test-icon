<script>
export default {
  name: 'gavel-svg',
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
<path d="M13 10L20.383 17.418C21.206 18.238 21.206 19.566 20.383 20.385C19.9876 20.7783 19.4527 20.999 18.895 20.999C18.3373 20.999 17.8024 20.7783 17.407 20.385L10 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9L10 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 10L9 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21H10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.79309 15.7928L3.20709 12.2068C3.01962 12.0193 2.91431 11.765 2.91431 11.4998C2.91431 11.2347 3.01962 10.9804 3.20709 10.7928L5.50009 8.49985L6.00009 8.99985L9.00009 5.99985L8.50009 5.49985L10.7931 3.20685C10.9806 3.01938 11.2349 2.91406 11.5001 2.91406C11.7653 2.91406 12.0196 3.01938 12.2071 3.20685L15.7931 6.79285C15.9806 6.98038 16.0859 7.23468 16.0859 7.49985C16.0859 7.76501 15.9806 8.01932 15.7931 8.20685L13.5001 10.4998L13.0001 9.99985L10.0001 12.9998L10.5001 13.4998L8.20709 15.7928C8.01957 15.9803 7.76526 16.0856 7.50009 16.0856C7.23493 16.0856 6.98062 15.9803 6.79309 15.7928V15.7928Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    