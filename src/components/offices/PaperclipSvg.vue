<script>
export default {
  name: 'paperclip-svg',
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
<path d="M15.2348 7.49954L7.42469 15.4393C7.14339 15.7206 6.98535 16.1022 6.98535 16.5C6.98535 16.8978 7.14339 17.2794 7.42469 17.5607C7.706 17.842 8.08753 18 8.48535 18C8.88318 18 9.26471 17.842 9.54601 17.5607L18.8561 8.12086C19.1347 7.84229 19.3557 7.51157 19.5064 7.14759C19.6572 6.78362 19.7348 6.39351 19.7348 5.99954C19.7348 5.60558 19.6572 5.21547 19.5064 4.85149C19.3557 4.48751 19.1347 4.1568 18.8561 3.87822C18.5775 3.59965 18.2468 3.37867 17.8829 3.2279C17.5189 3.07714 17.1288 2.99954 16.7348 2.99954C16.3408 2.99954 15.9507 3.07714 15.5868 3.2279C15.2228 3.37867 14.8921 3.59965 14.6135 3.87822L5.30337 13.318C4.45946 14.1619 3.98535 15.3065 3.98535 16.5C3.98535 17.6935 4.45946 18.8381 5.30337 19.682C6.14728 20.5259 7.29188 21 8.48535 21C9.67883 21 10.8234 20.5259 11.6673 19.682L19.3598 11.9995" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    