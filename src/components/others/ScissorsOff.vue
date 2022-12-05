<script>
export default {
  name: 'scissors-off',
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
<path d="M4.43203 4.44189C4.04654 4.67856 3.71956 4.99934 3.47555 5.38022C3.23155 5.76111 3.07683 6.19224 3.02298 6.64137C2.96913 7.09049 3.01754 7.54598 3.16459 7.97375C3.31164 8.40152 3.55351 8.79051 3.87213 9.1116C4.19074 9.43269 4.57783 9.67757 5.00446 9.82793C5.43108 9.97829 5.88617 10.0302 6.3357 9.97985C6.78523 9.92949 7.21755 9.77811 7.60031 9.53707C7.98308 9.29602 8.30638 8.97154 8.54603 8.58789" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 20C7.65685 20 9 18.6569 9 17C9 15.3431 7.65685 14 6 14C4.34315 14 3 15.3431 3 17C3 18.6569 4.34315 20 6 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.59998 15.4L12 12M14 10L19 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    