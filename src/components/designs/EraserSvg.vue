<script>
export default {
  name: 'eraser-svg',
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
<path d="M9.3475 9.33274L15.7115 15.6967M21.0147 20.2344H7.52123L4.0442 16.7574C3.90491 16.6181 3.79442 16.4527 3.71904 16.2707C3.64366 16.0887 3.60486 15.8937 3.60486 15.6967C3.60486 15.4997 3.64366 15.3047 3.71904 15.1227C3.79442 14.9407 3.90491 14.7753 4.0442 14.636L14.6508 4.02944C14.9321 3.74813 15.3136 3.5901 15.7115 3.5901C16.1093 3.5901 16.4908 3.74813 16.7721 4.02944L21.0148 8.27208C21.1541 8.41136 21.2645 8.57672 21.3399 8.75871C21.4153 8.9407 21.4541 9.13575 21.4541 9.33274C21.4541 9.52972 21.4153 9.72477 21.3399 9.90676C21.2645 10.0888 21.1541 10.2541 21.0148 10.3934L11.1738 20.2344" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    