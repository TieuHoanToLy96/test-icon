<script>
export default {
  name: 'truck-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8528 11.25H16.8528M22.8528 11.25L21.5414 7.97146C21.4857 7.83228 21.3896 7.71298 21.2655 7.62895C21.1414 7.54491 20.9949 7.5 20.845 7.5H16.8528V11.25M22.8528 11.25V17.25C22.8528 17.4489 22.7738 17.6397 22.6331 17.7803C22.4925 17.921 22.3017 18 22.1028 18H20.2278M16.8528 11.25V16.0514V6H2.60278C2.40387 6 2.21311 6.07902 2.07245 6.21967C1.9318 6.36032 1.85278 6.55109 1.85278 6.75V17.25C1.85278 17.4489 1.9318 17.6397 2.07245 17.7803C2.21311 17.921 2.40387 18 2.60278 18H4.47778M1.85278 13.5H16.8528M20.2278 18C20.2278 19.2426 19.2204 20.25 17.9778 20.25C16.7351 20.25 15.7278 19.2426 15.7278 18M20.2278 18C20.2278 16.7574 19.2204 15.75 17.9778 15.75C16.7351 15.75 15.7278 16.7574 15.7278 18M15.7278 18H8.97778M8.97778 18C8.97778 19.2426 7.97042 20.25 6.72778 20.25C5.48514 20.25 4.47778 19.2426 4.47778 18M8.97778 18C8.97778 16.7574 7.97042 15.75 6.72778 15.75C5.48514 15.75 4.47778 16.7574 4.47778 18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    