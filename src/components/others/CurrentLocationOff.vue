<script>
export default {
  name: 'current-location-off',
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
<path d="M14.685 10.6611C14.385 10.0611 13.89 9.57511 13.283 9.28711M9.88601 9.87111C9.60355 10.1487 9.37885 10.4794 9.22486 10.8443C9.07087 11.2091 8.99064 11.6009 8.9888 11.9969C8.98696 12.3929 9.06354 12.7853 9.21413 13.1516C9.36472 13.5179 9.58634 13.8507 9.8662 14.1309C10.1461 14.4111 10.4786 14.6331 10.8447 14.7841C11.2108 14.9351 11.6032 15.0122 11.9992 15.0108C12.3952 15.0094 12.787 14.9297 13.1521 14.7761C13.5171 14.6225 13.8481 14.3982 14.126 14.1161" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.357 6.32996C5.60603 7.07038 5.00887 7.95197 4.59986 8.92402C4.19085 9.89606 3.97807 10.9394 3.97376 11.994C3.96945 13.0486 4.17369 14.0936 4.57473 15.069C4.97577 16.0443 5.56571 16.9308 6.31059 17.6773C7.05548 18.4238 7.94062 19.0157 8.91509 19.4189C9.88956 19.8221 10.9341 20.0287 11.9887 20.0267C13.0433 20.0247 14.0871 19.8142 15.0601 19.4074C16.033 19.0005 16.9159 18.4053 17.658 17.656M19.3 15.278C19.9666 13.796 20.1661 12.1462 19.872 10.5481C19.5779 8.94995 18.8041 7.47927 17.6535 6.33177C16.503 5.18426 15.0303 4.41433 13.4314 4.12443C11.8325 3.83454 10.1832 4.03843 8.703 4.70896" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12H22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    