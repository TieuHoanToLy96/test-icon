<script>
export default {
  name: 'brand-gatsby',
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
<path d="M3.2959 14.2971L9.7029 20.7041C8.21409 20.3096 6.85113 19.5404 5.74392 18.4698C4.63671 17.3992 3.82216 16.0628 3.3779 14.5881L3.2959 14.2971V14.2971Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 13H21C20.59 16.603 17.993 19.59 14.614 20.614L3.38599 9.38497C3.8638 7.8146 4.7618 6.40472 5.9829 5.30777C7.20399 4.21083 8.70172 3.46855 10.3141 3.1612C11.9266 2.85385 13.5923 2.99313 15.1313 3.56396C16.6703 4.1348 18.024 5.11548 19.046 6.39997" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    