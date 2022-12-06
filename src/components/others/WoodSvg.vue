<script>
export default {
  name: 'wood-svg',
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
<path d="M12 8C15.3137 8 18 6.88071 18 5.5C18 4.11929 15.3137 3 12 3C8.68629 3 6 4.11929 6 5.5C6 6.88071 8.68629 8 12 8Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0001 5.5V10.126C18.2904 9.99453 18.6165 9.96489 18.9258 10.0419C19.235 10.1189 19.5092 10.298 19.7039 10.5503C19.8987 10.8025 20.0026 11.1131 19.9988 11.4318C19.995 11.7504 19.8838 12.0584 19.6831 12.306L19.5861 12.414L18.0001 14V18C18.0001 19.61 15.4601 20.925 12.2751 20.997L12.0001 21C8.68609 21 6.00009 19.657 6.00009 18V16L4.41409 14.414C4.17953 14.1798 4.03472 13.8705 4.00498 13.5404C3.97523 13.2102 4.06242 12.8801 4.25133 12.6077C4.44024 12.3353 4.71885 12.1379 5.03849 12.0501C5.35813 11.9622 5.69849 11.9894 6.00009 12.127V5.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12.5V14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 16V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    