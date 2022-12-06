<script>
export default {
  name: 'selection-background',
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
<path d="M15.2732 3H13.6368M19.3643 3H20.1825C20.3995 3 20.6076 3.0862 20.7611 3.23965C20.9145 3.39309 21.0007 3.60121 21.0007 3.81821V4.63638M21.0007 10.3638V8.72743M19.3643 16.0913H20.1825C20.3995 16.0913 20.6076 16.0051 20.7611 15.8517C20.9145 15.6983 21.0007 15.4901 21.0007 15.2731V14.4549M9.54577 3H8.72756C8.51056 3 8.30245 3.0862 8.149 3.23965C7.99556 3.39309 7.90935 3.60121 7.90935 3.81821V4.63638M3.81821 7.90866H15.2731C15.725 7.90866 16.0913 8.27498 16.0913 8.72686V20.1818C16.0913 20.6337 15.725 21 15.2731 21H3.81821C3.36632 21 3 20.6337 3 20.1818V8.72686C3 8.27498 3.36632 7.90866 3.81821 7.90866Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    