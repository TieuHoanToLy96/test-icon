<script>
export default {
  name: 'brand-my-oppo',
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
<path d="M18.3159 5H5.68395L2.26595 9.019C2.09135 9.22066 1.99684 9.47939 2.00034 9.74611C2.00384 10.0128 2.10511 10.269 2.28495 10.466L11.9989 21L21.7139 10.51C21.8935 10.3137 21.995 10.0585 21.9994 9.79255C22.0038 9.52657 21.9108 9.26816 21.7379 9.066L18.3159 5V5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11L12 14L15 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    