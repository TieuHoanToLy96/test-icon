<script>
export default {
  name: 'wifi-svg',
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
<path d="M12 18H12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.17212 15.1721C9.92223 14.4222 10.9395 14.001 12.0001 14.001C13.0608 14.001 14.078 14.4222 14.8281 15.1721" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.34302 12.3428C7.08589 11.5999 7.96782 11.0106 8.93846 10.6085C9.90909 10.2065 10.9494 9.99951 12 9.99951C13.0506 9.99951 14.0909 10.2065 15.0616 10.6085C16.0322 11.0106 16.9141 11.5999 17.657 12.3428" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.51489 9.51476C8.20089 4.82776 15.7989 4.82776 20.5149 9.51476" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    