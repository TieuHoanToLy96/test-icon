<script>
export default {
  name: 'eject-svg',
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
<path d="M12.0372 3.597L4.75014 11.4913C4.65126 11.5984 4.58574 11.732 4.5616 11.8758C4.53746 12.0195 4.55574 12.1672 4.61421 12.3008C4.67268 12.4343 4.7688 12.5479 4.89082 12.6277C5.01284 12.7075 5.15546 12.75 5.30125 12.75H19.8753C20.0211 12.75 20.1637 12.7075 20.2857 12.6277C20.4077 12.5479 20.5038 12.4343 20.5623 12.3008C20.6208 12.1672 20.6391 12.0195 20.6149 11.8758C20.5908 11.732 20.5253 11.5984 20.4264 11.4913L13.1394 3.597C13.0691 3.52092 12.9839 3.46021 12.8891 3.41868C12.7942 3.37715 12.6918 3.35571 12.5883 3.35571C12.4847 3.35571 12.3823 3.37715 12.2875 3.41868C12.1926 3.46021 12.1074 3.52092 12.0372 3.597Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.33826 16.5V18.75C4.33826 19.1642 4.67404 19.5 5.08826 19.5H20.0883C20.5025 19.5 20.8383 19.1642 20.8383 18.75V16.5C20.8383 16.0858 20.5025 15.75 20.0883 15.75H5.08826C4.67404 15.75 4.33826 16.0858 4.33826 16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    