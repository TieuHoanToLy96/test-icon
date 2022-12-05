<script>
export default {
  name: 'file-text',
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
<path d="M15.1909 3H6.19019C5.99127 3 5.80051 3.07902 5.65986 3.21967C5.5192 3.36032 5.44019 3.55109 5.44019 3.75V20.25C5.44019 20.4489 5.5192 20.6397 5.65986 20.7803C5.80051 20.921 5.99127 21 6.19019 21H19.6909C19.7894 21 19.8869 20.9806 19.9779 20.9429C20.0689 20.9052 20.1516 20.85 20.2212 20.7803C20.2909 20.7107 20.3461 20.628 20.3838 20.537C20.4215 20.446 20.4409 20.3485 20.4409 20.25V8.25M15.1909 3L20.4409 8.25M15.1909 3V8.25H20.4409M9.94092 12.75H15.9409M9.94092 15.75H15.9409" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    