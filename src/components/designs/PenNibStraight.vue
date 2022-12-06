<script>
export default {
  name: 'pen-nib-straight',
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
<path d="M12.0006 14.2503V23.2503M12.0006 14.2503C13.0361 14.2503 13.8756 13.4109 13.8756 12.3753C13.8756 11.3398 13.0361 10.5003 12.0006 10.5003C10.965 10.5003 10.1256 11.3398 10.1256 12.3753C10.1256 13.4109 10.965 14.2503 12.0006 14.2503ZM12.0006 23.2503L4.25148 12.7238C4.16994 12.613 4.12043 12.482 4.10836 12.345C4.09629 12.208 4.12214 12.0703 4.18306 11.947L6.75055 6.75032M12.0006 23.2503L19.7496 12.7238C19.8311 12.613 19.8806 12.4819 19.8927 12.3449C19.9048 12.2079 19.8789 12.0702 19.818 11.9469L17.2506 6.75032M6.75055 6.75032V3.00032C6.75055 2.80141 6.82957 2.61064 6.97023 2.46999C7.11088 2.32934 7.30164 2.25032 7.50056 2.25032H16.5006C16.6995 2.25032 16.8902 2.32934 17.0309 2.46999C17.1715 2.61064 17.2506 2.80141 17.2506 3.00032V6.75032M6.75055 6.75032H17.2506" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    