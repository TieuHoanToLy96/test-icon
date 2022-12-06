<script>
export default {
  name: 'toggle-left',
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
<path d="M16.9119 6H7.91186C4.59815 6 1.91187 8.6863 1.91187 12C1.91187 15.3137 4.59815 18 7.91186 18H16.9119C20.2256 18 22.9119 15.3137 22.9119 12C22.9119 8.68629 20.2256 6 16.9119 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.91186 15C9.56871 15 10.9119 13.6569 10.9119 12C10.9119 10.3431 9.56871 9 7.91186 9C6.255 9 4.91186 10.3431 4.91186 12C4.91186 13.6569 6.255 15 7.91186 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    