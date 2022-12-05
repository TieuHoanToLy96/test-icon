<script>
export default {
  name: 'compass-off',
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
<path d="M12.999 9L16 8L14.998 11.005M14 14L8 16L10 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.042 16.0451C20.894 14.354 21.1909 12.4372 20.8905 10.5675C20.59 8.69789 19.7075 6.97066 18.3685 5.63165C17.0295 4.29265 15.3022 3.41011 13.4326 3.10964C11.5629 2.80916 9.64614 3.10607 7.95501 3.9581M5.63701 5.6351C4.78995 6.46815 4.11621 7.46067 3.65465 8.55541C3.19309 9.65015 2.95284 10.8254 2.94777 12.0135C2.94271 13.2015 3.17291 14.3788 3.62511 15.4775C4.07731 16.5761 4.74256 17.5744 5.58248 18.4146C6.4224 19.2549 7.42038 19.9205 8.51884 20.3731C9.6173 20.8258 10.7945 21.0564 11.9826 21.0518C13.1706 21.0472 14.346 20.8074 15.4409 20.3463C16.5358 19.8852 17.5286 19.2118 18.362 18.3651" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 12H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    