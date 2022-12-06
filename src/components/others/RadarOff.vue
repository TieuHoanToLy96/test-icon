<script>
export default {
  name: 'radar-off',
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
<path d="M11.291 11.2949C11.1518 11.435 11.0571 11.6132 11.019 11.807C10.9809 12.0008 11.0011 12.2015 11.0769 12.3839C11.1527 12.5663 11.2809 12.7221 11.4452 12.8317C11.6095 12.9414 11.8025 12.9999 12 12.9999V20.9999C14.488 20.9999 16.74 19.9899 18.37 18.3579M20.045 16.0389C20.675 14.7859 21.0021 13.4024 21 11.9999H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.999 8.99804C15.4236 8.23283 14.6406 7.6489 13.7431 7.31564C12.8456 6.98238 11.8713 6.91379 10.936 7.11804M8.46995 8.46504C7.9632 8.9712 7.5711 9.58033 7.32021 10.2512C7.06932 10.9221 6.96549 11.639 7.01574 12.3535C7.066 13.0679 7.26917 13.7633 7.6115 14.3924C7.95383 15.0215 8.42733 15.5698 8.99995 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.486 8.99505C20.0592 7.79188 19.3813 6.69328 18.4974 5.77219C17.6134 4.8511 16.5436 4.12861 15.359 3.65268C14.1744 3.17676 12.9021 2.95831 11.6266 3.01182C10.3511 3.06533 9.10157 3.38958 7.961 3.96305M5.644 5.63805C4.56824 6.71277 3.78233 8.04253 3.35962 9.50321C2.93691 10.9639 2.89119 12.5079 3.22672 13.991C3.56225 15.4741 4.2681 16.8481 5.27837 17.9846C6.28864 19.121 7.5704 19.983 9.00399 20.4901" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    