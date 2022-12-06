<script>
export default {
  name: 'paint-roller',
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
<path d="M19.5001 9H21.7501C21.949 9 22.1398 9.07902 22.2805 9.21967C22.4211 9.36032 22.5001 9.55109 22.5001 9.75V14.4343C22.5001 14.5973 22.447 14.7558 22.3489 14.8859C22.2507 15.016 22.1129 15.1106 21.9562 15.1554L12.5441 17.8446C12.3874 17.8894 12.2495 17.984 12.1514 18.1141C12.0532 18.2442 12.0001 18.4027 12.0001 18.5657V21.75M3.75012 9H1.50012M4.50012 5.25H18.7501C19.1643 5.25 19.5001 5.58579 19.5001 6V12C19.5001 12.4142 19.1643 12.75 18.7501 12.75H4.50012C4.08591 12.75 3.75012 12.4142 3.75012 12V6C3.75012 5.58579 4.08591 5.25 4.50012 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    