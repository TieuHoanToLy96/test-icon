<script>
export default {
  name: 'mouse-off',
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
<path d="M7.733 3.704C8.39952 3.24432 9.19033 2.99874 10 3H14C15.0609 3 16.0783 3.42143 16.8284 4.17158C17.5786 4.92172 18 5.93914 18 7V14M17.9 17.895C17.6971 18.7774 17.2009 19.5649 16.4925 20.1289C15.7841 20.6929 14.9055 21 14 21H10C8.93913 21 7.92172 20.5786 7.17157 19.8284C6.42143 19.0783 6 18.0609 6 17V7C6 6.7 6.033 6.407 6.096 6.126" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    