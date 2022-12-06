<script>
export default {
  name: 'hanger-off',
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
<path d="M14.004 6C14.004 5.46957 13.7933 4.96086 13.4182 4.58579C13.0431 4.21071 12.5344 4 12.004 4C11.4736 4 10.9649 4.21071 10.5898 4.58579C10.2147 4.96086 10.004 5.46957 10.004 6M16.51 12.506L19.971 14.428C20.2829 14.6012 20.5429 14.8548 20.7238 15.1623C20.9047 15.4698 21.0001 15.8202 21 16.177V17M19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V16.177C2.99991 15.8202 3.09527 15.4698 3.27621 15.1623C3.45714 14.8548 3.71706 14.6012 4.029 14.428L10.702 10.721" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    