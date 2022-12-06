<script>
export default {
  name: 'eraser-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0001 19.9998H8.50006L4.29006 15.6998C4.10381 15.5124 3.99927 15.259 3.99927 14.9948C3.99927 14.7306 4.10381 14.4772 4.29006 14.2898L9.28506 9.29679M11.2941 7.28679L14.2911 4.29079C14.4784 4.10454 14.7319 4 14.9961 4C15.2602 4 15.5137 4.10454 15.7011 4.29079L20.7011 9.29079C20.8873 9.47816 20.9919 9.73161 20.9919 9.99579C20.9919 10.26 20.8873 10.5134 20.7011 10.7008C19.2841 12.1318 18.2951 13.1328 17.7311 13.7008M15.7111 15.7438L11.5001 19.9998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 13.3L11.7 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    