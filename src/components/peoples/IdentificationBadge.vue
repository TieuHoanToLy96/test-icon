<script>
export default {
  name: 'identification-badge',
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
<path d="M12.2354 15.75C13.8922 15.75 15.2354 14.4069 15.2354 12.75C15.2354 11.0931 13.8922 9.75 12.2354 9.75C10.5785 9.75 9.23535 11.0931 9.23535 12.75C9.23535 14.4069 10.5785 15.75 12.2354 15.75ZM12.2354 15.75C11.3621 15.75 10.5008 15.9533 9.71972 16.3438C8.93864 16.7343 8.25919 17.3013 7.73516 17.9998M12.2354 15.75C13.1086 15.75 13.9698 15.9532 14.7509 16.3437C15.532 16.7342 16.2115 17.3011 16.7355 17.9996M9.23535 6H15.2354M19.7354 3.75V20.25C19.7354 20.6642 19.3996 21 18.9854 21H5.48535C5.07114 21 4.73535 20.6642 4.73535 20.25V3.75C4.73535 3.33579 5.07114 3 5.48535 3H18.9854C19.3996 3 19.7354 3.33579 19.7354 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    