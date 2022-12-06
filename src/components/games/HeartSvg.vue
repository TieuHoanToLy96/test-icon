<script>
export default {
  name: 'heart-svg',
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
<path d="M12.0011 20.25C12.0011 20.25 2.6261 15 2.6261 8.62501C2.62629 7.49826 3.01671 6.40635 3.73098 5.53493C4.44526 4.66351 5.43929 4.06636 6.54409 3.84501C7.64888 3.62367 8.79624 3.79179 9.79109 4.32079C10.7859 4.84979 11.5669 5.70702 12.0011 6.74673L12.0011 6.74673C12.4353 5.70702 13.2163 4.84979 14.2111 4.32079C15.206 3.79179 16.3533 3.62367 17.4581 3.84501C18.5629 4.06636 19.5569 4.66351 20.2712 5.53493C20.9855 6.40635 21.3759 7.49826 21.3761 8.62501C21.3761 15 12.0011 20.25 12.0011 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    