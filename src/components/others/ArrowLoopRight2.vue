<script>
export default {
  name: 'arrow-loop-right-2',
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
<path d="M12 21V15M12 9V8C12 7.20888 11.7654 6.43552 11.3259 5.77772C10.8864 5.11992 10.2616 4.60723 9.53074 4.30448C8.79983 4.00173 7.99556 3.92252 7.21964 4.07686C6.44372 4.2312 5.73098 4.61216 5.17157 5.17157C4.61216 5.73098 4.2312 6.44372 4.07686 7.21964C3.92252 7.99556 4.00173 8.79983 4.30448 9.53074C4.60723 10.2616 5.11992 10.8864 5.77772 11.3259C6.43552 11.7654 7.20888 12 8 12H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 16L21 12L17 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    