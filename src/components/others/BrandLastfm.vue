<script>
export default {
  name: 'brand-lastfm',
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
<path d="M20 8.00012C19.17 7.00012 18.612 7.00012 18 7.00012C17.388 7.00012 16 7.27112 16 9.00012C16 10.7291 17.384 11.2331 19 12.0001C20.616 12.7671 21.125 13.8121 21 15.0001C20.875 16.1881 20 17.0001 18 17.0001C16 17.0001 15 16.0001 14.5 15.0001C14 14.0001 12.915 10.2201 12.003 9.00312C11.4102 8.21137 10.596 7.61322 9.6632 7.28431C8.73043 6.95541 7.72106 6.91054 6.76278 7.15537C5.80451 7.4002 4.94037 7.92374 4.27968 8.65976C3.61899 9.39579 3.19143 10.3112 3.05108 11.2903C2.91074 12.2693 3.06392 13.268 3.49124 14.16C3.91856 15.052 4.60082 15.7972 5.45173 16.3014C6.30264 16.8055 7.28397 17.046 8.27157 16.9924C9.25918 16.9388 10.2087 16.5935 11 16.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    