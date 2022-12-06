<script>
export default {
  name: 'brand-toyota',
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
<path d="M12 19C17.5228 19 22 15.866 22 12C22 8.13401 17.5228 5 12 5C6.47715 5 2 8.13401 2 12C2 15.866 6.47715 19 12 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12C9 15.866 10.343 19 12 19C13.657 19 15 15.866 15 12C15 8.134 13.657 5 12 5C10.343 5 9 8.134 9 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.415 6.19092C5.527 6.69392 5 7.32092 5 7.99992C5 9.65692 8.134 10.9999 12 10.9999C15.866 10.9999 19 9.65692 19 7.99992C19 7.32192 18.475 6.69592 17.59 6.19392" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    