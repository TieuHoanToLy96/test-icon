<script>
export default {
  name: 'keyboard-hide',
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
<g clip-path="url(#clip0_108_39577)">
<path d="M20 3H4C2.89543 3 2 3.89543 2 5V13C2 14.1046 2.89543 15 4 15H20C21.1046 15 22 14.1046 22 13V5C22 3.89543 21.1046 3 20 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 11V11.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11V11.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21L12 19L14 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_108_39577">
<rect :width="width || size" :height="height || size" fill="white"/>
</clipPath>
</defs>
</svg>

</template>
    