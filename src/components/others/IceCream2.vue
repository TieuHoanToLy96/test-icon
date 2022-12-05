<script>
export default {
  name: 'ice-cream-2',
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
<path d="M17.657 11.004C17.9766 10.0991 18.0745 9.13069 17.9424 8.18011C17.8103 7.22952 17.4522 6.32448 16.8979 5.54097C16.3437 4.75745 15.6096 4.11831 14.7573 3.67719C13.9049 3.23608 12.9592 3.00586 11.9995 3.00586C11.0398 3.00586 10.0941 3.23608 9.24174 3.67719C8.3894 4.11831 7.65531 4.75745 7.10109 5.54097C6.54687 6.32448 6.18869 7.22952 6.05661 8.18011C5.92452 9.13069 6.0224 10.0991 6.34201 11.004" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.34204 11L12 22L17.657 11.004L6.34204 11Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    