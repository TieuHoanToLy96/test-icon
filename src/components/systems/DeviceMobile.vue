<script>
export default {
  name: 'device-mobile',
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
<path d="M6.76489 5.76923H18.7649M6.76489 18.2308H18.7649M8.26489 3H17.2649C18.0933 3 18.7649 3.61991 18.7649 4.38462V19.6154C18.7649 20.3801 18.0933 21 17.2649 21H8.26489C7.43647 21 6.76489 20.3801 6.76489 19.6154V4.38462C6.76489 3.61991 7.43647 3 8.26489 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    