<script>
export default {
  name: 'hexagon-7',
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
<path d="M19.02 6.85803C19.3272 7.03534 19.5818 7.29089 19.758 7.59866C19.9342 7.90643 20.0256 8.2554 20.023 8.61003V15.165C20.023 15.893 19.628 16.565 18.991 16.918L12.974 20.762C12.6761 20.9275 12.3409 21.0144 12 21.0144C11.6592 21.0144 11.324 20.9275 11.026 20.762L5.01003 16.918C4.6975 16.7444 4.43704 16.4905 4.2556 16.1825C4.07415 15.8744 3.97833 15.5235 3.97803 15.166V8.61003C3.97803 7.88203 4.37303 7.21003 5.01003 6.85703L11.027 3.27503C11.3337 3.10427 11.679 3.01465 12.03 3.01465C12.3811 3.01465 12.7263 3.10427 13.033 3.27503L19.05 6.85803H19.021H19.02Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 8H14L12 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    