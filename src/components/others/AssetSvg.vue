<script>
export default {
  name: 'asset-svg',
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
<path d="M9 21C12.3137 21 15 18.3137 15 15C15 11.6863 12.3137 9 9 9C5.68629 9 3 11.6863 3 15C3 18.3137 5.68629 21 9 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17C10.1046 17 11 16.1046 11 15C11 13.8954 10.1046 13 9 13C7.89543 13 7 13.8954 7 15C7 16.1046 7.89543 17 9 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.218 17.975L20.837 5.80103" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.0791 9.756L18.2961 3.125" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17C10.1046 17 11 16.1046 11 15C11 13.8954 10.1046 13 9 13C7.89543 13 7 13.8954 7 15C7 16.1046 7.89543 17 9 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    