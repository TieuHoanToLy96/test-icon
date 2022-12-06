<script>
export default {
  name: 'wifi-high',
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
<path d="M9.41667 15.5683C10.3023 14.7223 11.48 14.2503 12.7047 14.2503C13.9295 14.2503 15.1071 14.7223 15.9928 15.5683M6.23469 12.3863C7.96435 10.6964 10.2865 9.75027 12.7047 9.75027C15.1229 9.75027 17.4451 10.6964 19.1747 12.3863M3.05518 9.20433C5.62781 6.67053 9.09382 5.25027 12.7047 5.25027C16.3156 5.25027 19.7816 6.67053 22.3543 9.20433" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7047 19.6875C13.222 19.6875 13.6413 19.2678 13.6413 18.75C13.6413 18.2322 13.222 17.8125 12.7047 17.8125C12.1874 17.8125 11.7681 18.2322 11.7681 18.75C11.7681 19.2678 12.1874 19.6875 12.7047 19.6875Z" fill="currentColor"/>
</svg>

</template>
    