<script>
export default {
  name: 'sign-out',
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
<path d="M16.784 8.0625L20.7205 12L16.784 15.9375M10.2205 12H20.7177M10.2205 20.25H4.97046C4.77155 20.25 4.58078 20.171 4.44013 20.0303C4.29948 19.8897 4.22046 19.6989 4.22046 19.5V4.5C4.22046 4.30109 4.29948 4.11032 4.44013 3.96967C4.58078 3.82902 4.77155 3.75 4.97046 3.75H10.2205" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    