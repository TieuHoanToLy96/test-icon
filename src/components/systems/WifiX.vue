<script>
export default {
  name: 'wifi-x',
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
<path d="M9.24015 15.5683C10.1258 14.7223 11.3034 14.2503 12.5282 14.2503C13.753 14.2503 14.9306 14.7223 15.8162 15.5683M21.5289 5.25L17.0289 9.75M21.5289 9.75L17.0289 5.25M2.87866 9.20433C5.44684 6.66379 8.91575 5.24235 12.5282 5.25027C13.0298 5.25018 13.531 5.27714 14.0296 5.33105M6.05817 12.3863C7.78424 10.6909 10.1088 9.74385 12.5282 9.75027C13.0316 9.75008 13.5341 9.79048 14.031 9.87107" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5282 19.6875C13.0455 19.6875 13.4648 19.2678 13.4648 18.75C13.4648 18.2322 13.0455 17.8125 12.5282 17.8125C12.0109 17.8125 11.5916 18.2322 11.5916 18.75C11.5916 19.2678 12.0109 19.6875 12.5282 19.6875Z" fill="currentColor"/>
</svg>

</template>
    