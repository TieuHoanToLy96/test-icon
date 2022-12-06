<script>
export default {
  name: 'spade-svg',
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
<path d="M12.4116 2.25C12.4116 2.25 21.7866 8.25 21.7866 13.125C21.7866 14.0524 21.522 14.9606 21.0239 15.743C20.5259 16.5254 19.815 17.1494 18.9747 17.5419C18.1343 17.9344 17.1995 18.0791 16.2799 17.9589C15.3603 17.8388 14.494 17.4588 13.7827 16.8636L15.4116 21.75H9.41162L11.0405 16.8636C10.3293 17.4588 9.46298 17.8388 8.54335 17.9589C7.62372 18.0791 6.68889 17.9344 5.84859 17.5419C5.00829 17.1494 4.29738 16.5254 3.7993 15.743C3.30122 14.9606 3.03665 14.0524 3.03662 13.125C3.03662 8.25 12.4116 2.25 12.4116 2.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    