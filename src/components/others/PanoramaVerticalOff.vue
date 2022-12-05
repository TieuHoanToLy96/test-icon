<script>
export default {
  name: 'panorama-vertical-off',
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
<path d="M7.00005 3H17.5301C18.2231 3 18.7101 3.691 18.4651 4.338C17.3671 7.236 16.8921 10.133 17.0401 13.03M17.8681 17.877C18.0401 18.469 18.2381 19.062 18.4631 19.655C18.5185 19.8058 18.5368 19.9677 18.5164 20.127C18.4959 20.2864 18.4375 20.4384 18.3458 20.5704C18.2542 20.7023 18.1321 20.8103 17.99 20.8851C17.8478 20.9598 17.6897 20.9993 17.5291 21H6.52905C5.83705 21 5.32105 20.308 5.56705 19.66C7.26405 15.174 7.47005 10.687 6.18605 6.2" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    