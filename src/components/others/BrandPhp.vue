<script>
export default {
  name: 'brand-php',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C17.5228 21 22 16.9706 22 12C22 7.02944 17.5228 3 12 3C6.47715 3 2 7.02944 2 12C2 16.9706 6.47715 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 15L5.895 13.026L6.5 10H7.82C7.96516 10.0001 8.10856 10.0317 8.24025 10.0928C8.37194 10.1539 8.48875 10.2429 8.58258 10.3536C8.6764 10.4644 8.74499 10.5943 8.78357 10.7342C8.82215 10.8741 8.82981 11.0208 8.806 11.164L8.639 12.164C8.60018 12.3975 8.47979 12.6097 8.29924 12.7627C8.1187 12.9158 7.88971 12.9999 7.653 13H6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 15L15.895 13.026L16.5 10H17.82C17.9652 10.0001 18.1086 10.0317 18.2403 10.0928C18.3719 10.1539 18.4888 10.2429 18.5826 10.3536C18.6764 10.4644 18.745 10.5943 18.7836 10.7342C18.8222 10.8741 18.8298 11.0208 18.806 11.164L18.639 12.164C18.6002 12.3975 18.4798 12.6097 18.2992 12.7627C18.1187 12.9158 17.8897 12.9999 17.653 13H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.5L11 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6001 10H14.0001L13.5001 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    