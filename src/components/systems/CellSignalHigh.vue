<script>
export default {
  name: 'cell-signal-high',
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
<path d="M15.5289 6.00001V20.25M19.2789 4.06067V19.5C19.2789 19.6989 19.1999 19.8897 19.0593 20.0303C18.9186 20.171 18.7279 20.25 18.5289 20.25H3.0896C2.94126 20.25 2.79626 20.206 2.67292 20.1236C2.54959 20.0412 2.45346 19.9241 2.39669 19.787C2.33992 19.65 2.32507 19.4992 2.35401 19.3537C2.38295 19.2082 2.45438 19.0746 2.55927 18.9697L17.9986 3.53034C18.1035 3.42545 18.2371 3.35402 18.3826 3.32508C18.5281 3.29614 18.6789 3.31099 18.816 3.36776C18.953 3.42453 19.0701 3.52065 19.1525 3.64399C19.235 3.76733 19.2789 3.91233 19.2789 4.06067Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    