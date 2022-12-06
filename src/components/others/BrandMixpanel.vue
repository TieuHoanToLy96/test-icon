<script>
export default {
  name: 'brand-mixpanel',
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
<path d="M4.5 14.5C5.88071 14.5 7 13.3807 7 12C7 10.6193 5.88071 9.5 4.5 9.5C3.11929 9.5 2 10.6193 2 12C2 13.3807 3.11929 14.5 4.5 14.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 13.5C21.3284 13.5 22 12.8284 22 12C22 11.1716 21.3284 10.5 20.5 10.5C19.6716 10.5 19 11.1716 19 12C19 12.8284 19.6716 13.5 20.5 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 14C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10C11.8954 10 11 10.8954 11 12C11 13.1046 11.8954 14 13 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    