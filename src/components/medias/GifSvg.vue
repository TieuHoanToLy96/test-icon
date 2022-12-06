<script>
export default {
  name: 'gif-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2793 6.75001V17.25M21.9043 6.75001H17.4043V17.25M20.7793 12H17.4043M7.2793 12H9.5293V14.25C9.5293 15.0457 9.21323 15.8087 8.65062 16.3713C8.08801 16.9339 7.32495 17.25 6.5293 17.25C5.73365 17.25 4.97059 16.9339 4.40798 16.3713C3.84537 15.8087 3.5293 15.0457 3.5293 14.25V9.75001C3.5294 9.01979 3.79579 8.31467 4.27855 7.7668C4.76131 7.21893 5.4273 6.86591 6.1517 6.77392C6.8761 6.68192 7.60919 6.85725 8.21357 7.26705C8.81796 7.67685 9.25215 8.293 9.43478 9.00001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    